#!/usr/bin/env python3
from pathlib import Path
import argparse
import math
import os
import re

ROOT = Path(__file__).resolve().parents[1]
os.environ.setdefault("MPLCONFIGDIR", str(ROOT / "report_assets" / ".mplconfig"))

import matplotlib.pyplot as plt
import pandas as pd


RESULTS = ROOT / "results"
ASSETS = ROOT / "report_assets"
MAX_RESPONSE_MS = 620
CONFIG_COSTS = {1: 5200, 2: 10100, 3: 10800}
STRESS_PATTERN = re.compile(r"stress_config(?P<config>\d+)_(?P<users>\d+)u_(?P<rpm>\d+)rpm\.jtl")


def read_jtl(path: Path) -> pd.DataFrame:
    df = pd.read_csv(path)
    required = {"timeStamp", "elapsed", "responseCode", "success"}
    missing = required - set(df.columns)
    if missing:
        raise ValueError(f"{path} misses columns: {', '.join(sorted(missing))}")
    df["elapsed"] = pd.to_numeric(df["elapsed"], errors="coerce")
    df["timeStamp"] = pd.to_numeric(df["timeStamp"], errors="coerce")
    df["success_bool"] = df["success"].astype(str).str.lower().eq("true")
    return df.dropna(subset=["elapsed", "timeStamp"])


def stats_for(path: Path) -> dict:
    df = read_jtl(path)
    if df.empty:
        raise ValueError(f"{path} is empty")
    elapsed = df["elapsed"]
    duration_sec = max((df["timeStamp"].max() - df["timeStamp"].min()) / 1000, 1)
    errors = (~df["success_bool"]).sum()
    http_503 = (df["responseCode"].astype(str) == "503").sum()
    return {
        "file": path.name,
        "sample_count": int(len(df)),
        "error_count": int(errors),
        "http_503_count": int(http_503),
        "error_rate_pct": errors / len(df) * 100,
        "avg_ms": elapsed.mean(),
        "median_ms": elapsed.median(),
        "p90_ms": elapsed.quantile(0.90),
        "p95_ms": elapsed.quantile(0.95),
        "p99_ms": elapsed.quantile(0.99),
        "max_ms": elapsed.max(),
        "throughput_rpm": len(df) / duration_sec * 60,
    }


def load_stats() -> pd.DataFrame:
    rows = []
    for config, cost in CONFIG_COSTS.items():
        path = RESULTS / f"config{config}_load.jtl"
        if path.exists():
            row = stats_for(path)
            row["config"] = config
            row["cost_usd"] = cost
            row["meets_requirements"] = (
                row["error_count"] == 0 and row["max_ms"] <= MAX_RESPONSE_MS
            )
            rows.append(row)
    return pd.DataFrame(rows).sort_values("config") if rows else pd.DataFrame()


def stress_stats() -> pd.DataFrame:
    rows = []
    for path in sorted(RESULTS.glob("stress_config*_*.jtl")):
        match = STRESS_PATTERN.match(path.name)
        if not match:
            continue
        row = stats_for(path)
        row["config"] = int(match.group("config"))
        row["users"] = int(match.group("users"))
        row["target_rpm"] = int(match.group("rpm"))
        row["failed"] = row["max_ms"] > MAX_RESPONSE_MS or row["http_503_count"] > 0
        rows.append(row)
    return pd.DataFrame(rows).sort_values(["config", "users"]) if rows else pd.DataFrame()


def save_table(df: pd.DataFrame, path: Path) -> None:
    if not df.empty:
        df.to_csv(path, index=False)


def annotate_values(ax, xs, ys, fmt="{:.0f}") -> None:
    for x, y in zip(xs, ys):
        if pd.notna(y) and math.isfinite(float(y)):
            ax.annotate(fmt.format(y), (x, y), textcoords="offset points", xytext=(0, 5), ha="center", fontsize=8)


def plot_load(load: pd.DataFrame) -> None:
    if load.empty:
        return
    ASSETS.mkdir(parents=True, exist_ok=True)
    x = load["config"].astype(str)

    fig, ax = plt.subplots(figsize=(8, 4.5))
    ax.bar(x, load["avg_ms"], color="#4c78a8")
    ax.axhline(MAX_RESPONSE_MS, color="#d62728", linestyle="--", linewidth=1.2, label="limit 620 ms")
    ax.set_title("Average response time by configuration")
    ax.set_xlabel("Configuration")
    ax.set_ylabel("Average response time, ms")
    ax.legend()
    fig.tight_layout()
    fig.savefig(ASSETS / "load_avg_response_by_config.png", dpi=160)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(8, 4.5))
    data = [read_jtl(RESULTS / f"config{cfg}_load.jtl")["elapsed"] for cfg in load["config"]]
    ax.boxplot(data, tick_labels=[f"config {cfg}" for cfg in load["config"]], showfliers=False)
    ax.axhline(MAX_RESPONSE_MS, color="#d62728", linestyle="--", linewidth=1.2)
    ax.set_title("Response time distribution by configuration")
    ax.set_ylabel("Response time, ms")
    fig.tight_layout()
    fig.savefig(ASSETS / "load_response_boxplot.png", dpi=160)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(8, 4.5))
    for col, color in [("p90_ms", "#59a14f"), ("p95_ms", "#f28e2b"), ("p99_ms", "#e15759")]:
        ax.plot(x, load[col], marker="o", label=col.replace("_ms", ""), color=color)
    ax.axhline(MAX_RESPONSE_MS, color="#d62728", linestyle="--", linewidth=1.2, label="limit 620 ms")
    ax.set_title("Response time percentiles")
    ax.set_xlabel("Configuration")
    ax.set_ylabel("Response time, ms")
    ax.legend()
    fig.tight_layout()
    fig.savefig(ASSETS / "load_percentiles.png", dpi=160)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(8, 4.5))
    ax.bar(x, load["throughput_rpm"], color="#76b7b2")
    ax.axhline(140, color="#333333", linestyle="--", linewidth=1.2, label="target 140 rpm")
    ax.set_title("Throughput by configuration")
    ax.set_xlabel("Configuration")
    ax.set_ylabel("Throughput, requests/min")
    ax.legend()
    fig.tight_layout()
    fig.savefig(ASSETS / "load_throughput.png", dpi=160)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(8, 4.5))
    ax.bar(x, load["error_rate_pct"], color="#b07aa1")
    ax.set_title("Error rate by configuration")
    ax.set_xlabel("Configuration")
    ax.set_ylabel("Error rate, %")
    fig.tight_layout()
    fig.savefig(ASSETS / "load_error_rate.png", dpi=160)
    plt.close(fig)


def plot_stress(stress: pd.DataFrame) -> None:
    if stress.empty:
        return
    ASSETS.mkdir(parents=True, exist_ok=True)

    fig, ax = plt.subplots(figsize=(8, 4.5))
    ax.plot(stress["target_rpm"], stress["avg_ms"], marker="o", label="avg")
    ax.plot(stress["target_rpm"], stress["max_ms"], marker="o", label="max")
    ax.axhline(MAX_RESPONSE_MS, color="#d62728", linestyle="--", linewidth=1.2, label="limit 620 ms")
    ax.set_title("Response time under stress load")
    ax.set_xlabel("Target throughput, requests/min")
    ax.set_ylabel("Response time, ms")
    ax.legend()
    fig.tight_layout()
    fig.savefig(ASSETS / "stress_response_vs_load.png", dpi=160)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(8, 4.5))
    ax.plot(stress["target_rpm"], stress["error_rate_pct"], marker="o", color="#b07aa1")
    ax.set_title("Error rate under stress load")
    ax.set_xlabel("Target throughput, requests/min")
    ax.set_ylabel("Error rate, %")
    fig.tight_layout()
    fig.savefig(ASSETS / "stress_error_rate_vs_load.png", dpi=160)
    plt.close(fig)


def write_summary(load: pd.DataFrame, stress: pd.DataFrame) -> None:
    lines = []
    selected = None
    if not load.empty:
        candidates = load[load["meets_requirements"]].sort_values("cost_usd")
        if not candidates.empty:
            selected = int(candidates.iloc[0]["config"])
            (RESULTS / "selected_config.txt").write_text(str(selected), encoding="utf-8")
            lines.append(f"Selected configuration: {selected} (${CONFIG_COSTS[selected]})")
        else:
            lines.append("Selected configuration: none; no configuration met max response time and error requirements.")
        lines.append("")
        lines.append("Load testing summary:")
        lines.append(load.to_markdown(index=False, floatfmt=".2f"))
        lines.append("")
    if not stress.empty:
        failed = stress[stress["failed"]].sort_values("target_rpm")
        if not failed.empty:
            first = failed.iloc[0]
            failed_levels = ", ".join(
                f"{int(row.users)} users / {int(row.target_rpm)} rpm (max {row.max_ms:.0f} ms, HTTP 503 {int(row.http_503_count)})"
                for row in failed.itertuples(index=False)
            )
            lines.append(f"First observed failure point: {int(first['users'])} users / {int(first['target_rpm'])} rpm")
            lines.append(f"Failed levels by criterion: {failed_levels}")
        else:
            lines.append("Failure point: not reached in tested range.")
        lines.append("")
        lines.append("Stress testing summary:")
        lines.append(stress.to_markdown(index=False, floatfmt=".2f"))
    (RESULTS / "summary.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--load-only", action="store_true")
    args = parser.parse_args()

    RESULTS.mkdir(parents=True, exist_ok=True)
    ASSETS.mkdir(parents=True, exist_ok=True)

    load = load_stats()
    stress = pd.DataFrame() if args.load_only else stress_stats()
    save_table(load, RESULTS / "load_summary.csv")
    if not args.load_only:
        save_table(stress, RESULTS / "stress_summary.csv")
    plot_load(load)
    if not args.load_only:
        plot_stress(stress)
    write_summary(load, stress)
    print((RESULTS / "summary.md").relative_to(ROOT))


if __name__ == "__main__":
    main()
