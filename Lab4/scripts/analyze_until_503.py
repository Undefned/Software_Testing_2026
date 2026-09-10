#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import json
import math
import re
from pathlib import Path
from statistics import mean, median
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
RESULTS_DIR = ROOT / "results" / "stress_until_503"
ASSETS_DIR = ROOT / "report_assets" / "stress_until_503"
MAX_RESPONSE_MS = 620
REQUESTS_PER_USER_RPM = 20
JTL_RE = re.compile(r"stress_until_503_(?P<users>\d+)users_(?P<rpm>\d+)rpm(?:_ctt)?\.jtl$")

SUMMARY_COLUMNS = [
    "users",
    "rpm",
    "samples",
    "http_200",
    "http_503",
    "other_http",
    "sla_errors",
    "error_rate",
    "avg_ms",
    "median_ms",
    "p90_ms",
    "p95_ms",
    "p99_ms",
    "max_ms",
    "has_503",
    "measured_throughput_rpm",
    "jtl_file",
]


def normalize_header(value: str | None) -> str:
    return (value or "").strip().lstrip("\ufeff")


def percentile(values: list[float], quantile: float) -> float:
    if not values:
        return 0.0
    sorted_values = sorted(values)
    if len(sorted_values) == 1:
        return sorted_values[0]
    position = (len(sorted_values) - 1) * quantile
    lower = math.floor(position)
    upper = math.ceil(position)
    if lower == upper:
        return sorted_values[int(position)]
    weight = position - lower
    return sorted_values[lower] * (1 - weight) + sorted_values[upper] * weight


def parse_users_rpm(path: Path) -> tuple[int, int]:
    match = JTL_RE.match(path.name)
    if not match:
        raise ValueError(f"{path}: filename must match stress_until_503_<users>users_<rpm>rpm.jtl")
    return int(match.group("users")), int(match.group("rpm"))


def field_map(fieldnames: list[str] | None, path: Path) -> dict[str, str]:
    if fieldnames is None:
        raise ValueError(f"{path}: missing CSV header")
    return {normalize_header(name): name for name in fieldnames}


def numeric(value: str | None, default: float = 0.0) -> float:
    try:
        return float((value or "").strip())
    except ValueError:
        return default


def analyze_jtl(path: Path) -> dict[str, Any]:
    users, rpm = parse_users_rpm(path)
    with path.open(newline="", encoding="utf-8-sig") as file:
        reader = csv.DictReader(file)
        fields = field_map(reader.fieldnames, path)
        required = {"timeStamp", "elapsed", "responseCode", "success"}
        missing = sorted(required - set(fields))
        if missing:
            raise ValueError(f"{path}: missing required columns: {', '.join(missing)}")

        timestamps: list[float] = []
        elapsed_values: list[float] = []
        samples = 0
        http_200 = 0
        http_503 = 0
        other_http = 0
        errors = 0
        sla_errors = 0

        for row in reader:
            samples += 1
            response_code = (row.get(fields["responseCode"]) or "").strip()
            elapsed = numeric(row.get(fields["elapsed"]))
            timestamp = numeric(row.get(fields["timeStamp"]))
            success = (row.get(fields["success"]) or "").strip().lower() == "true"

            timestamps.append(timestamp)
            elapsed_values.append(elapsed)
            if response_code == "200":
                http_200 += 1
            elif response_code == "503":
                http_503 += 1
            else:
                other_http += 1
            if not success:
                errors += 1
            if elapsed > MAX_RESPONSE_MS:
                sla_errors += 1

    duration_sec = 0.0
    if len(timestamps) > 1:
        duration_sec = max((max(timestamps) - min(timestamps)) / 1000.0, 0.001)
    measured_throughput = samples / duration_sec * 60.0 if duration_sec > 0 else 0.0
    return {
        "users": users,
        "rpm": rpm,
        "samples": samples,
        "http_200": http_200,
        "http_503": http_503,
        "other_http": other_http,
        "sla_errors": sla_errors,
        "error_rate": errors / samples * 100.0 if samples else 0.0,
        "avg_ms": mean(elapsed_values) if elapsed_values else 0.0,
        "median_ms": median(elapsed_values) if elapsed_values else 0.0,
        "p90_ms": percentile(elapsed_values, 0.90),
        "p95_ms": percentile(elapsed_values, 0.95),
        "p99_ms": percentile(elapsed_values, 0.99),
        "max_ms": max(elapsed_values) if elapsed_values else 0.0,
        "has_503": http_503 > 0,
        "measured_throughput_rpm": measured_throughput,
        "jtl_file": path.name,
    }


def collect_rows(results_dir: Path) -> list[dict[str, Any]]:
    rows = [analyze_jtl(path) for path in sorted(results_dir.glob("stress_until_503_*users_*rpm*.jtl"))]
    return sorted(rows, key=lambda row: (int(row["users"]), int(row["rpm"])))


def fmt(value: Any) -> str:
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, float):
        return f"{value:.2f}"
    return str(value)


def write_csv(rows: list[dict[str, Any]], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=SUMMARY_COLUMNS)
        writer.writeheader()
        for row in rows:
            writer.writerow({column: fmt(row.get(column, "")) for column in SUMMARY_COLUMNS})


def markdown_table(rows: list[dict[str, Any]]) -> str:
    columns = SUMMARY_COLUMNS[:-1]
    lines = ["| " + " | ".join(columns) + " |", "| " + " | ".join(["---"] * len(columns)) + " |"]
    for row in rows:
        lines.append("| " + " | ".join(fmt(row.get(column, "")) for column in columns) + " |")
    return "\n".join(lines)


def write_markdown(rows: list[dict[str, Any]], path: Path) -> None:
    lines = ["# Stress until HTTP 503 summary", ""]
    first_503 = next((row for row in rows if row["has_503"]), None)
    if first_503 is None:
        lines.append("HTTP 503 was not detected in available JTL files.")
    else:
        previous = [row for row in rows if row["users"] < first_503["users"] and not row["has_503"]]
        lines.append(
            f"First HTTP 503 detected at: users={first_503['users']}, rpm={first_503['rpm']}."
        )
        if previous:
            stable = max(previous, key=lambda row: row["users"])
            lines.append(f"Previous stable level: users={stable['users']}, rpm={stable['rpm']}.")
        else:
            lines.append("Previous stable level: not found in available JTL files.")
    lines.extend(["", markdown_table(rows), ""])
    path.write_text("\n".join(lines), encoding="utf-8")


def image_font(size: int = 12) -> ImageFont.ImageFont:
    from PIL import ImageFont

    try:
        return ImageFont.truetype("DejaVuSans.ttf", size)
    except OSError:
        return ImageFont.load_default()


def plot_line_chart(
    rows: list[dict[str, Any]],
    filename: str,
    title: str,
    y_label: str,
    series: list[tuple[str, str, tuple[int, int, int]]],
    y_reference: tuple[float, str] | None = None,
) -> None:
    from PIL import Image, ImageDraw

    ASSETS_DIR.mkdir(parents=True, exist_ok=True)
    width, height = 1000, 560
    margin_left, margin_right, margin_top, margin_bottom = 82, 36, 58, 82
    image = Image.new("RGB", (width, height), "white")
    draw = ImageDraw.Draw(image)
    font = image_font(13)
    small = image_font(11)
    title_font = image_font(17)

    draw.text((margin_left, 20), title, fill=(25, 25, 25), font=title_font)
    if not rows:
        draw.text((margin_left, 100), "No JTL data", fill=(80, 80, 80), font=font)
        image.save(ASSETS_DIR / filename)
        return

    xs = [float(row["users"]) for row in rows]
    x_min, x_max = min(xs), max(xs)
    if x_min == x_max:
        x_min -= 1
        x_max += 1
    y_values = [float(row[key]) for key, _, _ in series for row in rows]
    if y_reference is not None:
        y_values.append(float(y_reference[0]))
    y_min = 0.0
    y_max = max(y_values) if y_values else 1.0
    if y_max <= 0:
        y_max = 1.0
    y_max *= 1.12

    plot_left = margin_left
    plot_top = margin_top
    plot_right = width - margin_right
    plot_bottom = height - margin_bottom

    def x_pos(value: float) -> float:
        return plot_left + (value - x_min) / (x_max - x_min) * (plot_right - plot_left)

    def y_pos(value: float) -> float:
        return plot_bottom - (value - y_min) / (y_max - y_min) * (plot_bottom - plot_top)

    draw.line((plot_left, plot_bottom, plot_right, plot_bottom), fill=(50, 50, 50), width=2)
    draw.line((plot_left, plot_top, plot_left, plot_bottom), fill=(50, 50, 50), width=2)

    for i in range(6):
        y_value = y_min + (y_max - y_min) * i / 5
        y = y_pos(y_value)
        draw.line((plot_left, y, plot_right, y), fill=(230, 230, 230), width=1)
        draw.text((12, y - 7), f"{y_value:.0f}", fill=(70, 70, 70), font=small)

    x_ticks = sorted(set(int(row["users"]) for row in rows))
    max_labels = 14
    step = max(1, math.ceil(len(x_ticks) / max_labels))
    for value in x_ticks[::step]:
        x = x_pos(float(value))
        draw.line((x, plot_bottom, x, plot_bottom + 5), fill=(50, 50, 50), width=1)
        draw.text((x - 10, plot_bottom + 9), str(value), fill=(70, 70, 70), font=small)

    if y_reference is not None:
        y = y_pos(float(y_reference[0]))
        draw.line((plot_left, y, plot_right, y), fill=(200, 48, 48), width=2)
        draw.text((plot_right - 120, y - 18), y_reference[1], fill=(200, 48, 48), font=small)

    legend_x = plot_left + 8
    legend_y = plot_top + 8
    for index, (key, label, color) in enumerate(series):
        points = [(x_pos(float(row["users"])), y_pos(float(row[key]))) for row in rows]
        if len(points) == 1:
            x, y = points[0]
            draw.ellipse((x - 4, y - 4, x + 4, y + 4), fill=color)
        else:
            draw.line(points, fill=color, width=3)
            for x, y in points:
                draw.ellipse((x - 3, y - 3, x + 3, y + 3), fill=color)
        y = legend_y + index * 20
        draw.line((legend_x, y + 7, legend_x + 24, y + 7), fill=color, width=3)
        draw.text((legend_x + 30, y), label, fill=(40, 40, 40), font=small)

    draw.text(((plot_left + plot_right) / 2 - 28, height - 34), "users", fill=(40, 40, 40), font=font)
    draw.text((12, 24), y_label, fill=(40, 40, 40), font=font)
    image.save(ASSETS_DIR / filename)


def build_plots(rows: list[dict[str, Any]]) -> None:
    plot_line_chart(
        rows,
        "until_503_response_time_vs_users.png",
        "Response time vs users",
        "ms",
        [
            ("avg_ms", "avg", (58, 112, 184)),
            ("p95_ms", "p95", (242, 142, 43)),
            ("max_ms", "max", (200, 70, 70)),
        ],
        y_reference=(MAX_RESPONSE_MS, "620 ms"),
    )
    plot_line_chart(
        rows,
        "until_503_http_503_count_vs_users.png",
        "HTTP 503 count vs users",
        "count",
        [("http_503", "HTTP 503", (200, 70, 70))],
    )
    plot_line_chart(
        rows,
        "until_503_error_rate_vs_users.png",
        "Error rate vs users",
        "%",
        [("error_rate", "error rate", (156, 90, 166))],
    )
    plot_line_chart(
        rows,
        "until_503_throughput_rpm_vs_users.png",
        "Target and measured throughput vs users",
        "rpm",
        [
            ("rpm", "target rpm", (76, 120, 168)),
            ("measured_throughput_rpm", "measured rpm", (82, 160, 95)),
        ],
    )


def write_outputs(results_dir: Path, assets_dir: Path) -> list[dict[str, Any]]:
    global ASSETS_DIR
    ASSETS_DIR = assets_dir
    rows = collect_rows(results_dir)
    write_csv(rows, results_dir / "until_503_summary.csv")
    write_markdown(rows, results_dir / "until_503_summary.md")
    build_plots(rows)
    return rows


def absolute_path(path: Path) -> Path:
    if path.is_absolute():
        return path.resolve()
    return (Path.cwd() / path).resolve()


def display_path(path: Path) -> str:
    resolved = path.resolve()
    try:
        return str(resolved.relative_to(ROOT))
    except ValueError:
        return str(resolved)


def main() -> None:
    parser = argparse.ArgumentParser(description="Analyze JMeter JTL files for HTTP 503 stress search.")
    parser.add_argument("--results-dir", type=Path, default=RESULTS_DIR)
    parser.add_argument("--assets-dir", type=Path, default=ASSETS_DIR)
    parser.add_argument("--single", type=Path, help="Analyze a single JTL and print JSON.")
    args = parser.parse_args()

    args.results_dir = absolute_path(args.results_dir)
    args.assets_dir = absolute_path(args.assets_dir)

    if args.single:
        print(json.dumps(analyze_jtl(absolute_path(args.single)), sort_keys=True))
        return

    rows = write_outputs(args.results_dir, args.assets_dir)
    print(display_path(args.results_dir / "until_503_summary.csv"))
    print(display_path(args.results_dir / "until_503_summary.md"))
    print(f"analyzed_jtl_files={len(rows)}")


if __name__ == "__main__":
    main()