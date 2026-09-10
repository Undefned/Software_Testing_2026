#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path
from typing import Any


REQUIRED_COLUMNS = ("timeStamp", "responseCode")


def normalize_header(value: str | None) -> str:
    return (value or "").strip().lstrip("\ufeff")


def parse_timestamp_ms(value: str, *, row_number: int) -> int:
    try:
        return int(value)
    except ValueError as exc:
        raise ValueError(f"row {row_number}: invalid timeStamp {value!r}") from exc


def analyze(path: Path) -> dict[str, Any]:
    with path.open(newline="", encoding="utf-8-sig") as file:
        reader = csv.DictReader(file)
        if reader.fieldnames is None:
            raise ValueError(f"{path}: missing CSV header")

        field_by_name = {normalize_header(field): field for field in reader.fieldnames}
        missing = [column for column in REQUIRED_COLUMNS if column not in field_by_name]
        if missing:
            raise ValueError(f"{path}: missing required CSV columns: {', '.join(missing)}")

        timestamp_field = field_by_name["timeStamp"]
        response_code_field = field_by_name["responseCode"]
        total_samples = 0
        total_503 = 0
        first_timestamp_ms: int | None = None
        first_503_timestamp_ms: int | None = None

        for row_number, row in enumerate(reader, start=2):
            total_samples += 1
            timestamp_ms = parse_timestamp_ms(row[timestamp_field], row_number=row_number)
            if first_timestamp_ms is None:
                first_timestamp_ms = timestamp_ms

            response_code = (row[response_code_field] or "").strip()
            if response_code == "503":
                total_503 += 1
                if first_503_timestamp_ms is None:
                    first_503_timestamp_ms = timestamp_ms

    first_503_after_sec = None
    if first_timestamp_ms is not None and first_503_timestamp_ms is not None:
        first_503_after_sec = round((first_503_timestamp_ms - first_timestamp_ms) / 1000, 3)

    return {
        "total_samples": total_samples,
        "total_503": total_503,
        "has_503": total_503 > 0,
        "first_503_after_sec": first_503_after_sec,
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Analyze until-503 JMeter CSV JTL.")
    parser.add_argument("jtl_file", type=Path)
    args = parser.parse_args()

    result = analyze(args.jtl_file)
    print(json.dumps(result, ensure_ascii=False, sort_keys=True))


if __name__ == "__main__":
    main()
