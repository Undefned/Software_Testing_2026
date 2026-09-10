#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

TOKEN="518502949"
USER_ID="-1355159875"
REQUESTS_PER_USER_RPM=20
CONTINUE_USERS_STEP="${CONTINUE_USERS_STEP:-16}"
PLAN_DIR="quality_jmeter_plans/stress_until_503"
RESULT_DIR="results/stress_until_503"
HTML_DIR="html_reports/stress_until_503"
ASSETS_DIR="report_assets/stress_until_503"
PRIMARY_USERS=(2 3 4 5 7 10 12 16 20 24 32 40 48 56 64 72 80 96 112 128)

JMETER_SAVE_ARGS=(
  -Jjmeter.save.saveservice.output_format=csv
  -Jjmeter.save.saveservice.print_field_names=true
  -Jjmeter.save.saveservice.timestamp_format=ms
  -Jjmeter.save.saveservice.time=true
  -Jjmeter.save.saveservice.latency=true
  -Jjmeter.save.saveservice.label=true
  -Jjmeter.save.saveservice.response_code=true
  -Jjmeter.save.saveservice.response_message=true
  -Jjmeter.save.saveservice.successful=true
  -Jjmeter.save.saveservice.assertion_results_failure_message=true
  -Jjmeter.save.saveservice.thread_name=true
  -Jjmeter.save.saveservice.thread_counts=true
  -Jjmeter.save.saveservice.connect_time=true
)

detect_config() {
  local config="3"
  if [[ -s results/selected_config.txt ]]; then
    config="$(tr -cd '0-9' < results/selected_config.txt || true)"
    if [[ -z "$config" ]]; then
      config="3"
    fi
  fi
  printf '%s\n' "$config"
}

json_field() {
  local json="$1"
  local field="$2"
  python - "$json" "$field" <<'PY'
import json
import sys

value = json.loads(sys.argv[1])[sys.argv[2]]
if isinstance(value, bool):
    print("true" if value else "false")
elif isinstance(value, float):
    print(f"{value:.2f}")
else:
    print(value)
PY
}

ensure_plan() {
  local users="$1"
  python scripts/generate_stress_until_503_jmx.py --config "$CONFIG" --users "$users" >/dev/null
}

refresh_summary() {
  python scripts/analyze_until_503.py --results-dir "$RESULT_DIR" --assets-dir "$ASSETS_DIR" >/dev/null
}

validate_settings() {
  if [[ ! "$CONTINUE_USERS_STEP" =~ ^[1-9][0-9]*$ ]]; then
    printf 'CONTINUE_USERS_STEP must be a positive integer, got %s\n' "$CONTINUE_USERS_STEP" >&2
    exit 1
  fi
}

run_level() {
  local users="$1"
  local rpm=$((users * REQUESTS_PER_USER_RPM))
  local name="stress_until_503_${users}users_${rpm}rpm"
  local plan="${PLAN_DIR}/${name}_ctt.jmx"
  local jtl="${RESULT_DIR}/${name}.jtl"
  local log="${RESULT_DIR}/${name}.log"
  local html="${HTML_DIR}/${users}users_${rpm}rpm"
  local analysis
  local has_503
  local http_200
  local http_503
  local samples
  local error_rate
  local avg_ms
  local p95_ms
  local max_ms

  ensure_plan "$users"
  rm -f "$jtl" "$log"
  rm -rf "$html"
  mkdir -p "$RESULT_DIR" "$HTML_DIR"

  printf 'Running %s users / %s rpm...\n' "$users" "$rpm"
  jmeter -n -t "$plan" -l "$jtl" -j "$log" -e -o "$html" "${JMETER_SAVE_ARGS[@]}"

  analysis="$(python scripts/analyze_until_503.py --single "$jtl")"
  refresh_summary

  has_503="$(json_field "$analysis" has_503)"
  http_200="$(json_field "$analysis" http_200)"
  http_503="$(json_field "$analysis" http_503)"
  samples="$(json_field "$analysis" samples)"
  error_rate="$(json_field "$analysis" error_rate)"
  avg_ms="$(json_field "$analysis" avg_ms)"
  p95_ms="$(json_field "$analysis" p95_ms)"
  max_ms="$(json_field "$analysis" max_ms)"

  printf 'Done: users=%s rpm=%s samples=%s HTTP200=%s HTTP503=%s error_rate=%s%% avg=%sms p95=%sms max=%sms\n' \
    "$users" "$rpm" "$samples" "$http_200" "$http_503" "$error_rate" "$avg_ms" "$p95_ms" "$max_ms"

  HAS_503_BY_USERS["$users"]="$has_503"
}

print_result() {
  local min_503=""
  local previous_stable=""
  local users

  for users in "${!HAS_503_BY_USERS[@]}"; do
    if [[ "${HAS_503_BY_USERS[$users]}" == "true" ]]; then
      if [[ -z "$min_503" || "$users" -lt "$min_503" ]]; then
        min_503="$users"
      fi
    fi
  done

  if [[ -z "$min_503" ]]; then
    printf 'HTTP 503 was not detected in completed levels.\n'
    return
  fi

  for users in "${!HAS_503_BY_USERS[@]}"; do
    if [[ "${HAS_503_BY_USERS[$users]}" == "false" && "$users" -lt "$min_503" ]]; then
      if [[ -z "$previous_stable" || "$users" -gt "$previous_stable" ]]; then
        previous_stable="$users"
      fi
    fi
  done

  printf '\nFirst HTTP 503 detected at:\n'
  printf 'users = %s\n' "$min_503"
  printf 'rpm = %s\n\n' "$((min_503 * REQUESTS_PER_USER_RPM))"
  printf 'Previous stable level:\n'
  if [[ -n "$previous_stable" ]]; then
    printf 'users = %s\n' "$previous_stable"
    printf 'rpm = %s\n' "$((previous_stable * REQUESTS_PER_USER_RPM))"
  else
    printf 'users = not found\n'
    printf 'rpm = not found\n'
  fi
}

CONFIG="$(detect_config)"
declare -A HAS_503_BY_USERS=()
mkdir -p "$PLAN_DIR" "$RESULT_DIR" "$HTML_DIR" "$ASSETS_DIR"
validate_settings

jmeter --version >/dev/null

probe_url="http://localhost:8079/?token=${TOKEN}&user=${USER_ID}&config=${CONFIG}"
probe_code="$(curl -s -o /dev/null -w "%{http_code}" "$probe_url" || true)"
if [[ "$probe_code" != "200" ]]; then
  printf 'Application check failed: %s returned HTTP %s\n' "$probe_url" "$probe_code" >&2
  exit 1
fi

python scripts/generate_stress_until_503_jmx.py --config "$CONFIG" >/dev/null

previous_without_503=""
current_with_503=""

for users in "${PRIMARY_USERS[@]}"; do
  run_level "$users"
  if [[ "${HAS_503_BY_USERS[$users]}" == "true" ]]; then
    current_with_503="$users"
    break
  fi
  previous_without_503="$users"
done

while [[ -z "$current_with_503" ]]; do
  users=$((previous_without_503 + CONTINUE_USERS_STEP))
  printf 'HTTP 503 was not detected up to %s users / %s rpm; increasing to %s users / %s rpm...\n' \
    "$previous_without_503" "$((previous_without_503 * REQUESTS_PER_USER_RPM))" \
    "$users" "$((users * REQUESTS_PER_USER_RPM))"
  run_level "$users"
  if [[ "${HAS_503_BY_USERS[$users]}" == "true" ]]; then
    current_with_503="$users"
    break
  fi
  previous_without_503="$users"
done

if [[ -n "$current_with_503" && -n "$previous_without_503" ]]; then
  if (( current_with_503 - previous_without_503 > 1 )); then
    printf 'Refining between %s and %s users...\n' "$previous_without_503" "$current_with_503"
    for ((users = previous_without_503 + 1; users < current_with_503; users++)); do
      run_level "$users"
      if [[ "${HAS_503_BY_USERS[$users]}" == "true" ]]; then
        current_with_503="$users"
        break
      fi
      previous_without_503="$users"
    done
  fi
fi

refresh_summary
print_result
