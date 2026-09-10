#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

mkdir -p results/stress_config3

for spec in 1users_20rpm 2users_40rpm 4users_80rpm 7users_140rpm 10users_200rpm 12users_240rpm 16users_320rpm; do
  plan="quality_jmeter_plans/stress_config3/stress_config3_${spec}_ctt.jmx"
  out="results/stress_config3/stress_config3_${spec}_ctt.jtl"
  log="results/stress_config3/stress_config3_${spec}_ctt.log"
  rm -f "$out" "$log"
  jmeter -n -t "$plan" -l "$out" -j "$log"
done
