#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

mkdir -p results/load

for config in 1 2 3; do
  plan="quality_jmeter_plans/load/load_config${config}_7users_140rpm_ctt.jmx"
  out="results/load/load_config${config}_7users_140rpm_ctt.jtl"
  log="results/load/load_config${config}_7users_140rpm_ctt.log"
  rm -f "$out" "$log"
  jmeter -n -t "$plan" -l "$out" -j "$log"
done
