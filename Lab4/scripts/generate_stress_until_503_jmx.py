#!/usr/bin/env python3
from __future__ import annotations

import argparse
import html
from pathlib import Path
import xml.etree.ElementTree as ET


ROOT = Path(__file__).resolve().parents[1]
PLAN_DIR = ROOT / "quality_jmeter_plans" / "stress_until_503"
TOKEN = "518502949"
USER = "-1355159875"
HOST = "localhost"
PORT = "8079"
PROTOCOL = "http"
PATH = "/"
REQUESTS_PER_USER_RPM = 20
DURATION_SEC = 90
MAX_RESPONSE_MS = 620
DEFAULT_CONFIG = 3
PRIMARY_USERS = [1, 2, 3, 4, 5, 7, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 112, 128]


def selected_config() -> int:
    selected_path = ROOT / "results" / "selected_config.txt"
    if not selected_path.exists():
        return DEFAULT_CONFIG
    raw = selected_path.read_text(encoding="utf-8").strip()
    try:
        return int(raw)
    except ValueError:
        return DEFAULT_CONFIG


def escape(value: object) -> str:
    return html.escape(str(value), quote=True)


def ramp_up_for(users: int) -> int:
    return max(5, min(60, users))


def plan_path(users: int) -> Path:
    rpm = users * REQUESTS_PER_USER_RPM
    return PLAN_DIR / f"stress_until_503_{users}users_{rpm}rpm_ctt.jmx"


def argument(name: str, value: object, indent: str) -> str:
    return f"""{indent}<elementProp name="{escape(name)}" elementType="HTTPArgument">
{indent}  <boolProp name="HTTPArgument.always_encode">false</boolProp>
{indent}  <stringProp name="Argument.value">{escape(value)}</stringProp>
{indent}  <stringProp name="Argument.metadata">=</stringProp>
{indent}  <boolProp name="HTTPArgument.use_equals">true</boolProp>
{indent}  <stringProp name="Argument.name">{escape(name)}</stringProp>
{indent}</elementProp>"""


def response_assertion(indent: str) -> str:
    return f"""{indent}<ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion: HTTP 200" enabled="true">
{indent}  <collectionProp name="Asserion.test_strings">
{indent}    <stringProp name="49586">200</stringProp>
{indent}  </collectionProp>
{indent}  <stringProp name="Assertion.custom_message"></stringProp>
{indent}  <stringProp name="Assertion.test_field">Assertion.response_code</stringProp>
{indent}  <boolProp name="Assertion.assume_success">false</boolProp>
{indent}  <intProp name="Assertion.test_type">8</intProp>
{indent}</ResponseAssertion>
{indent}<hashTree/>"""


def duration_assertion(indent: str) -> str:
    return f"""{indent}<DurationAssertion guiclass="DurationAssertionGui" testclass="DurationAssertion" testname="Duration Assertion: {MAX_RESPONSE_MS} ms" enabled="true">
{indent}  <stringProp name="DurationAssertion.duration">{MAX_RESPONSE_MS}</stringProp>
{indent}</DurationAssertion>
{indent}<hashTree/>"""


def throughput_timer(rpm: int, indent: str) -> str:
    return f"""{indent}<ConstantThroughputTimer guiclass="TestBeanGUI" testclass="ConstantThroughputTimer" testname="Constant Throughput Timer: {rpm} requests/min" enabled="true">
{indent}  <doubleProp>
{indent}    <name>throughput</name>
{indent}    <value>{float(rpm)}</value>
{indent}    <savedValue>0.0</savedValue>
{indent}  </doubleProp>
{indent}  <intProp name="calcMode">2</intProp>
{indent}</ConstantThroughputTimer>
{indent}<hashTree/>"""


def http_sampler(config: int, indent: str) -> str:
    return f"""{indent}<HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="GET / config={config}" enabled="true">
{indent}  <stringProp name="HTTPSampler.domain">{HOST}</stringProp>
{indent}  <stringProp name="HTTPSampler.port">{PORT}</stringProp>
{indent}  <stringProp name="HTTPSampler.protocol">{PROTOCOL}</stringProp>
{indent}  <stringProp name="HTTPSampler.contentEncoding"></stringProp>
{indent}  <stringProp name="HTTPSampler.path">{PATH}</stringProp>
{indent}  <stringProp name="HTTPSampler.method">GET</stringProp>
{indent}  <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
{indent}  <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
{indent}  <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
{indent}  <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
{indent}  <boolProp name="HTTPSampler.BROWSER_COMPATIBLE_MULTIPART">false</boolProp>
{indent}  <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="Parameters" enabled="true">
{indent}    <collectionProp name="Arguments.arguments">
{argument("token", TOKEN, indent + "      ")}
{argument("user", USER, indent + "      ")}
{argument("config", config, indent + "      ")}
{indent}    </collectionProp>
{indent}  </elementProp>
{indent}</HTTPSamplerProxy>"""


def plan_xml(config: int, users: int) -> str:
    rpm = users * REQUESTS_PER_USER_RPM
    ramp_up = ramp_up_for(users)
    name = f"stress_until_503_{users}users_{rpm}rpm_ctt"
    comments = (
        f"Token={TOKEN}, user={USER}, config={config}, {users} users, {rpm} requests/min, "
        f"duration={DURATION_SEC}s, local tunnel {PROTOCOL}://{HOST}:{PORT}{PATH}"
    )
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.6.3">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="{name}" enabled="true">
      <stringProp name="TestPlan.comments">{escape(comments)}</stringProp>
      <boolProp name="TestPlan.functional_mode">false</boolProp>
      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
        <collectionProp name="Arguments.arguments"/>
      </elementProp>
      <stringProp name="TestPlan.user_define_classpath"></stringProp>
    </TestPlan>
    <hashTree>
      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group - until HTTP 503 - {users} users" enabled="true">
        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
        <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">
          <boolProp name="LoopController.continue_forever">true</boolProp>
          <intProp name="LoopController.loops">-1</intProp>
        </elementProp>
        <stringProp name="ThreadGroup.num_threads">{users}</stringProp>
        <stringProp name="ThreadGroup.ramp_time">{ramp_up}</stringProp>
        <boolProp name="ThreadGroup.scheduler">true</boolProp>
        <stringProp name="ThreadGroup.duration">{DURATION_SEC}</stringProp>
        <stringProp name="ThreadGroup.delay">0</stringProp>
        <boolProp name="ThreadGroup.same_user_on_next_iteration">true</boolProp>
      </ThreadGroup>
      <hashTree>
{throughput_timer(rpm, "        ")}
{http_sampler(config, "        ")}
        <hashTree>
{response_assertion("          ")}
{duration_assertion("          ")}
        </hashTree>
      </hashTree>
    </hashTree>
  </hashTree>
</jmeterTestPlan>
"""


def named_text(root: ET.Element, prop_name: str) -> str | None:
    for element in root.iter():
        if element.attrib.get("name") == prop_name:
            return element.text
    return None


def bean_value(root: ET.Element, prop_name: str) -> str | None:
    for element in root.iter():
        name = None
        value = None
        for child in element:
            if child.tag == "name":
                name = child.text
            elif child.tag == "value":
                value = child.text
        if name == prop_name:
            return value
    return None


def validate(path: Path, config: int, users: int) -> None:
    root = ET.parse(path).getroot()
    rpm = users * REQUESTS_PER_USER_RPM
    expected = {
        "ThreadGroup.num_threads": str(users),
        "ThreadGroup.ramp_time": str(ramp_up_for(users)),
        "ThreadGroup.scheduler": "true",
        "ThreadGroup.duration": str(DURATION_SEC),
        "LoopController.continue_forever": "true",
        "LoopController.loops": "-1",
        "HTTPSampler.domain": HOST,
        "HTTPSampler.port": PORT,
        "HTTPSampler.protocol": PROTOCOL,
        "HTTPSampler.path": PATH,
        "HTTPSampler.method": "GET",
        "DurationAssertion.duration": str(MAX_RESPONSE_MS),
        "Assertion.test_field": "Assertion.response_code",
    }
    for prop_name, value in expected.items():
        actual = named_text(root, prop_name)
        if actual != value:
            raise RuntimeError(f"{path}: expected {prop_name}={value!r}, got {actual!r}")
    if bean_value(root, "throughput") != str(float(rpm)):
        raise RuntimeError(f"{path}: invalid Constant Throughput Timer target")
    content = path.read_text(encoding="utf-8")
    for literal in (TOKEN, USER, f"<stringProp name=\"Argument.value\">{config}</stringProp>", "200"):
        if literal not in content:
            raise RuntimeError(f"{path}: missing {literal!r}")


def generate(config: int, users_values: list[int]) -> None:
    PLAN_DIR.mkdir(parents=True, exist_ok=True)
    for users in users_values:
        path = plan_path(users)
        path.write_text(plan_xml(config, users), encoding="utf-8")
        validate(path, config, users)
        print(path.relative_to(ROOT))


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate JMeter plans for fixed-duration HTTP 503 stress search.")
    parser.add_argument("--config", type=int, default=selected_config())
    parser.add_argument("--users", type=int, nargs="*", default=PRIMARY_USERS)
    args = parser.parse_args()
    users_values = sorted(set(args.users))
    if not users_values:
        raise SystemExit("no users values supplied")
    generate(args.config, users_values)


if __name__ == "__main__":
    main()