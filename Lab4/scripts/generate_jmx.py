#!/usr/bin/env python3
from __future__ import annotations

import argparse
import html
from pathlib import Path
import xml.etree.ElementTree as ET


TOKEN = "518502949"
USER = "-1355159875"
HOST = "localhost"
PORT = "8079"
PROTOCOL = "http"
PATH = "/"
RAMP_UP_SEC = 7
DURATION_SEC = 120
MAX_RESPONSE_MS = 620
LOAD_USERS = 7
LOAD_THROUGHPUT_RPM = 140
REQUESTS_PER_USER_RPM = 20
STRESS_CONFIG = 3

CONFIG_PRICES = {
    1: 200,
    2: 10100,
    3: 10800,
}

STRESS_USERS = [1, 2, 4, 7, 10, 12, 16]
STRESS_UNTIL_503_USERS = [1, 2, 4, 7, 10, 12, 16, 20, 24, 32, 40, 50, 60, 80, 100]
STRESS_UNTIL_503_DIR = Path("quality_jmeter_plans/stress_config3_until_503")
STRESS_UNTIL_503_PREFIX = "stress_config3_until_503"
STOP_ON_503_TESTNAME = "Stop Test On First HTTP 503"
STOP_ON_503_SCRIPT = """if (prev != null && prev.getResponseCode() == '503') {
    log.warn('HTTP 503 detected, stopping test immediately')
    ctx.getEngine().stopTest(false)
}"""


def escape(value: object) -> str:
    return html.escape(str(value), quote=True)


def response_assertion(indent: str = "          ") -> str:
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


def duration_assertion(indent: str = "          ") -> str:
    return f"""{indent}<DurationAssertion guiclass="DurationAssertionGui" testclass="DurationAssertion" testname="Duration Assertion: {MAX_RESPONSE_MS} ms" enabled="true">
{indent}  <stringProp name="DurationAssertion.duration">{MAX_RESPONSE_MS}</stringProp>
{indent}</DurationAssertion>
{indent}<hashTree/>"""


def stop_on_503_post_processor(indent: str = "          ") -> str:
    return f"""{indent}<JSR223PostProcessor guiclass="TestBeanGUI" testclass="JSR223PostProcessor" testname="{STOP_ON_503_TESTNAME}" enabled="true">
{indent}  <stringProp name="scriptLanguage">groovy</stringProp>
{indent}  <stringProp name="parameters"></stringProp>
{indent}  <stringProp name="filename"></stringProp>
{indent}  <stringProp name="cacheKey">true</stringProp>
{indent}  <stringProp name="script">{escape(STOP_ON_503_SCRIPT)}</stringProp>
{indent}</JSR223PostProcessor>
{indent}<hashTree/>"""


def throughput_timer(throughput_rpm: int, indent: str = "        ") -> str:
    return f"""{indent}<ConstantThroughputTimer guiclass="TestBeanGUI" testclass="ConstantThroughputTimer" testname="Constant Throughput Timer: {throughput_rpm} requests/min" enabled="true">
{indent}  <doubleProp>
{indent}    <name>throughput</name>
{indent}    <value>{float(throughput_rpm)}</value>
{indent}    <savedValue>0.0</savedValue>
{indent}  </doubleProp>
{indent}  <intProp name="calcMode">2</intProp>
{indent}</ConstantThroughputTimer>
{indent}<hashTree/>"""


def save_config(indent: str = "              ") -> str:
    return f"""{indent}<time>true</time>
{indent}<latency>true</latency>
{indent}<timestamp>true</timestamp>
{indent}<success>true</success>
{indent}<label>true</label>
{indent}<code>true</code>
{indent}<message>true</message>
{indent}<threadName>true</threadName>
{indent}<dataType>true</dataType>
{indent}<encoding>false</encoding>
{indent}<assertions>true</assertions>
{indent}<subresults>true</subresults>
{indent}<responseData>false</responseData>
{indent}<samplerData>false</samplerData>
{indent}<xml>false</xml>
{indent}<fieldNames>true</fieldNames>
{indent}<responseHeaders>false</responseHeaders>
{indent}<requestHeaders>false</requestHeaders>
{indent}<responseDataOnError>false</responseDataOnError>
{indent}<saveAssertionResultsFailureMessage>true</saveAssertionResultsFailureMessage>
{indent}<assertionsResultsToSave>0</assertionsResultsToSave>
{indent}<bytes>true</bytes>
{indent}<sentBytes>true</sentBytes>
{indent}<url>true</url>
{indent}<threadCounts>true</threadCounts>
{indent}<idleTime>true</idleTime>
{indent}<connectTime>true</connectTime>"""


def listener(guiclass: str, testname: str, indent: str = "      ") -> str:
    return f"""{indent}<ResultCollector guiclass="{guiclass}" testclass="ResultCollector" testname="{testname}" enabled="true">
{indent}  <boolProp name="ResultCollector.error_logging">false</boolProp>
{indent}  <objProp>
{indent}    <name>saveConfig</name>
{indent}    <value class="SampleSaveConfiguration">
{save_config(indent + "      ")}
{indent}    </value>
{indent}  </objProp>
{indent}  <stringProp name="filename"></stringProp>
{indent}</ResultCollector>
{indent}<hashTree/>"""


def listeners(indent: str = "      ") -> str:
    return "\n".join(
        [
            listener("ViewResultsFullVisualizer", "View Results Tree", indent),
            listener("SummaryReport", "Summary Report", indent),
            listener("StatVisualizer", "Aggregate Report", indent),
            listener("GraphVisualizer", "Graph Results", indent),
        ]
    )


def http_sampler(config: int, indent: str = "        ") -> str:
    return f"""{indent}<HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="GET {PATH} config={config}" enabled="true">
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


def argument(name: str, value: object, indent: str) -> str:
    return f"""{indent}<elementProp name="{escape(name)}" elementType="HTTPArgument">
{indent}  <boolProp name="HTTPArgument.always_encode">false</boolProp>
{indent}  <stringProp name="Argument.value">{escape(value)}</stringProp>
{indent}  <stringProp name="Argument.metadata">=</stringProp>
{indent}  <boolProp name="HTTPArgument.use_equals">true</boolProp>
{indent}  <stringProp name="Argument.name">{escape(name)}</stringProp>
{indent}</elementProp>"""


def thread_group(
    *,
    config: int,
    threads: int,
    throughput_rpm: int,
    name: str,
    include_listeners: bool,
    ramp_up_sec: int = RAMP_UP_SEC,
    duration_sec: int | None = DURATION_SEC,
    scheduler: bool = True,
    stop_on_503: bool = False,
    indent: str = "      ",
) -> str:
    listener_xml = f"\n{listeners(indent + '    ')}" if include_listeners else ""
    stop_on_503_xml = f"\n{stop_on_503_post_processor(indent + '    ')}" if stop_on_503 else ""
    scheduler_xml = f"{indent}  <boolProp name=\"ThreadGroup.scheduler\">{str(scheduler).lower()}</boolProp>"
    duration_xml = ""
    if scheduler:
        if duration_sec is None:
            raise ValueError("duration_sec must be set when ThreadGroup scheduler is enabled")
        duration_xml = (
            f"\n{indent}  <stringProp name=\"ThreadGroup.duration\">{duration_sec}</stringProp>"
            f"\n{indent}  <stringProp name=\"ThreadGroup.delay\">0</stringProp>"
        )
    return f"""{indent}<ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="{escape(name)}" enabled="true">
{indent}  <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
{indent}  <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">
{indent}    <boolProp name="LoopController.continue_forever">true</boolProp>
{indent}    <intProp name="LoopController.loops">-1</intProp>
{indent}  </elementProp>
{indent}  <stringProp name="ThreadGroup.num_threads">{threads}</stringProp>
{indent}  <stringProp name="ThreadGroup.ramp_time">{ramp_up_sec}</stringProp>
{scheduler_xml}{duration_xml}
{indent}  <boolProp name="ThreadGroup.same_user_on_next_iteration">true</boolProp>
{indent}</ThreadGroup>
{indent}<hashTree>
{throughput_timer(throughput_rpm, indent + "  ")}
{http_sampler(config, indent + "  ")}
{indent}  <hashTree>
{response_assertion(indent + "    ")}
{duration_assertion(indent + "    ")}{stop_on_503_xml}
{indent}  </hashTree>{listener_xml}
{indent}</hashTree>"""


def test_plan_header(name: str, comments: str) -> str:
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.6.3">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="{escape(name)}" enabled="true">
      <stringProp name="TestPlan.comments">{escape(comments)}</stringProp>
      <boolProp name="TestPlan.functional_mode">false</boolProp>
      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
        <collectionProp name="Arguments.arguments"/>
      </elementProp>
      <stringProp name="TestPlan.user_define_classpath"></stringProp>
    </TestPlan>
    <hashTree>"""


def test_plan_footer() -> str:
    return """    </hashTree>
  </hashTree>
</jmeterTestPlan>
"""


def single_group_plan(
    *,
    config: int,
    threads: int,
    throughput_rpm: int,
    plan_name: str,
    thread_group_name: str | None = None,
    include_listeners: bool = True,
    ramp_up_sec: int = RAMP_UP_SEC,
    duration_sec: int | None = DURATION_SEC,
    scheduler: bool = True,
    stop_on_503: bool = False,
    include_test_plan_listeners: bool = False,
) -> str:
    comments = (
        f"Token={TOKEN}, user={USER}, config={config}, "
        f"{threads} users, {throughput_rpm} requests/min, local tunnel {PROTOCOL}://{HOST}:{PORT}{PATH}"
    )
    group_name = thread_group_name or f"Thread Group: config={config}, {threads} users, {throughput_rpm} requests/min"
    parts = [
        test_plan_header(plan_name, comments),
        thread_group(
            config=config,
            threads=threads,
            throughput_rpm=throughput_rpm,
            name=group_name,
            include_listeners=include_listeners,
            ramp_up_sec=ramp_up_sec,
            duration_sec=duration_sec,
            scheduler=scheduler,
            stop_on_503=stop_on_503,
        ),
    ]
    if include_test_plan_listeners:
        parts.append(listeners("      "))
    parts.append(test_plan_footer())
    return "\n".join(parts)


def all_configs_gui_plan() -> str:
    comments = (
        f"Token={TOKEN}, user={USER}, configs=1/2/3, {LOAD_USERS} users per group, "
        f"{LOAD_THROUGHPUT_RPM} requests/min per group, local tunnel {PROTOCOL}://{HOST}:{PORT}{PATH}"
    )
    groups = [
        thread_group(
            config=config,
            threads=LOAD_USERS,
            throughput_rpm=LOAD_THROUGHPUT_RPM,
            name=f"Thread Group - config={config} - {LOAD_USERS} users",
            include_listeners=False,
        )
        for config in CONFIG_PRICES
    ]
    return "\n".join(
        [
            test_plan_header("Lab 4 - All configs - GUI - local tunnel", comments),
            *groups,
            listeners("      "),
            test_plan_footer(),
        ]
    )


def write(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")
    print(path)


def remove_obsolete_plans() -> None:
    obsolete_paths = [
        Path("quality_jmeter_plans/load/load_config1.jmx"),
        Path("quality_jmeter_plans/load/load_config2.jmx"),
        Path("quality_jmeter_plans/load/load_config3.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_1u_20rpm.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_2u_40rpm.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_3u_60rpm.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_4u_80rpm.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_5u_100rpm.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_7u_140rpm.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_10u_200rpm.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_12u_240rpm.jmx"),
        Path("quality_jmeter_plans/stress/stress_config3_16u_320rpm.jmx"),
    ]
    for path in obsolete_paths:
        if path.exists():
            path.unlink()
            print(f"removed obsolete {path}")

    old_stress_dir = Path("quality_jmeter_plans/stress")
    if old_stress_dir.exists() and not any(old_stress_dir.iterdir()):
        old_stress_dir.rmdir()
        print(f"removed obsolete {old_stress_dir}")


def generated_until_503_plan_path(users: int) -> Path:
    throughput_rpm = users * REQUESTS_PER_USER_RPM
    return STRESS_UNTIL_503_DIR / f"{STRESS_UNTIL_503_PREFIX}_{users}users_{throughput_rpm}rpm_ctt.jmx"


def first_named_text(root: ET.Element, prop_name: str) -> str | None:
    for element in root.iter():
        if element.attrib.get("name") == prop_name:
            return element.text
    return None


def named_texts(root: ET.Element, prop_name: str) -> list[str]:
    return [element.text or "" for element in root.iter() if element.attrib.get("name") == prop_name]


def http_arguments(root: ET.Element) -> dict[str, str]:
    arguments: dict[str, str] = {}
    for element in root.iter("elementProp"):
        if element.attrib.get("elementType") != "HTTPArgument":
            continue
        name = None
        value = None
        for child in element:
            if child.attrib.get("name") == "Argument.name":
                name = child.text
            elif child.attrib.get("name") == "Argument.value":
                value = child.text
        if name is not None and value is not None:
            arguments[name] = value
    return arguments


def bean_property_value(root: ET.Element, prop_name: str) -> str | None:
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


def direct_sampler_hash_trees(root: ET.Element) -> list[ET.Element]:
    sampler_hash_trees: list[ET.Element] = []
    for parent in root.iter():
        children = list(parent)
        for index, child in enumerate(children[:-1]):
            if child.tag == "HTTPSamplerProxy" and children[index + 1].tag == "hashTree":
                sampler_hash_trees.append(children[index + 1])
    return sampler_hash_trees


def validate_until_503_plans() -> None:
    expected_paths = {generated_until_503_plan_path(users) for users in STRESS_UNTIL_503_USERS}
    actual_paths = set(STRESS_UNTIL_503_DIR.glob("*.jmx"))
    missing = [str(path) for path in sorted(expected_paths) if not path.exists()]
    if missing:
        raise RuntimeError(f"Missing generated until-503 plans: {', '.join(missing)}")
    unexpected = [str(path) for path in sorted(actual_paths - expected_paths)]
    if unexpected:
        raise RuntimeError(f"Unexpected until-503 plans: {', '.join(unexpected)}")

    for users in STRESS_UNTIL_503_USERS:
        throughput_rpm = users * REQUESTS_PER_USER_RPM
        path = generated_until_503_plan_path(users)
        content = path.read_text(encoding="utf-8")
        root = ET.fromstring(content)

        thread_groups = list(root.iter("ThreadGroup"))
        if len(thread_groups) != 1:
            raise RuntimeError(f"{path}: expected exactly one Thread Group, got {len(thread_groups)}")

        checks = {
            "ThreadGroup.num_threads": str(users),
            "ThreadGroup.scheduler": "false",
            "LoopController.continue_forever": "true",
            "LoopController.loops": "-1",
            "calcMode": "2",
            "HTTPSampler.domain": HOST,
            "HTTPSampler.port": PORT,
            "HTTPSampler.protocol": PROTOCOL,
            "HTTPSampler.path": PATH,
            "HTTPSampler.method": "GET",
            "DurationAssertion.duration": str(MAX_RESPONSE_MS),
            "Assertion.test_field": "Assertion.response_code",
        }
        for prop_name, expected in checks.items():
            actual = first_named_text(root, prop_name)
            if actual != expected:
                raise RuntimeError(f"{path}: expected {prop_name}={expected!r}, got {actual!r}")

        for forbidden_prop in (
            "ThreadGroup.duration",
            "ThreadGroup.delay",
            "ThreadGroup.start_time",
            "ThreadGroup.end_time",
        ):
            values = named_texts(root, forbidden_prop)
            if values:
                raise RuntimeError(f"{path}: unexpected {forbidden_prop} in until-503 plan: {values[0]!r}")

        ramp_up = int(first_named_text(root, "ThreadGroup.ramp_time") or "0")
        if ramp_up < users:
            raise RuntimeError(f"{path}: ramp-up {ramp_up} is lower than users {users}")

        throughput = bean_property_value(root, "throughput")
        if throughput != str(float(throughput_rpm)):
            raise RuntimeError(f"{path}: expected Constant Throughput Timer target {throughput_rpm} rpm, got {throughput!r}")

        args = http_arguments(root)
        expected_args = {"token": TOKEN, "user": USER, "config": str(STRESS_CONFIG)}
        if args != expected_args:
            raise RuntimeError(f"{path}: expected HTTP arguments {expected_args}, got {args}")

        if "200" not in named_texts(root, "49586"):
            raise RuntimeError(f"{path}: expected Response Assertion for HTTP 200")

        stop_post_processors = [
            element
            for element in root.iter("JSR223PostProcessor")
            if element.attrib.get("testname") == STOP_ON_503_TESTNAME
        ]
        if len(stop_post_processors) != 1:
            raise RuntimeError(f"{path}: expected exactly one {STOP_ON_503_TESTNAME!r} JSR223 PostProcessor")
        if any(element.attrib.get("testname") == STOP_ON_503_TESTNAME for element in root.iter("JSR223Assertion")):
            raise RuntimeError(f"{path}: stop-on-503 must be a JSR223 PostProcessor, not an Assertion")
        stop_post_processor = stop_post_processors[0]
        stop_script = first_named_text(stop_post_processor, "script")
        stop_language = first_named_text(stop_post_processor, "scriptLanguage")
        if stop_language != "groovy":
            raise RuntimeError(f"{path}: expected Groovy JSR223 PostProcessor, got {stop_language!r}")
        if stop_script != STOP_ON_503_SCRIPT:
            raise RuntimeError(f"{path}: unexpected stop-on-503 JSR223 script")

        sampler_hash_trees = direct_sampler_hash_trees(root)
        if len(sampler_hash_trees) != 1:
            raise RuntimeError(f"{path}: expected exactly one HTTP sampler hashTree, got {len(sampler_hash_trees)}")
        sampler_post_processors = [
            element
            for element in sampler_hash_trees[0].iter("JSR223PostProcessor")
            if element.attrib.get("testname") == STOP_ON_503_TESTNAME
        ]
        if len(sampler_post_processors) != 1:
            raise RuntimeError(f"{path}: stop-on-503 PostProcessor must be under the HTTP Request")

        listener_names = {
            element.attrib.get("testname")
            for element in root.iter("ResultCollector")
        }
        required_listeners = {"View Results Tree", "Summary Report", "Aggregate Report", "Graph Results"}
        missing_listeners = sorted(required_listeners - listener_names)
        if missing_listeners:
            raise RuntimeError(f"{path}: missing GUI listeners: {', '.join(missing_listeners)}")

        old_duration_limits = [value for value in named_texts(root, "DurationAssertion.duration") if value in {"790", "1200"}]
        if old_duration_limits:
            raise RuntimeError(f"{path}: old Duration Assertion limit found: {old_duration_limits[0]}")

        required_literals = [str(MAX_RESPONSE_MS), HOST, PORT, TOKEN, USER]
        missing_literals = [literal for literal in required_literals if literal not in content]
        if missing_literals:
            raise RuntimeError(f"{path}: missing required values: {', '.join(missing_literals)}")


def validate_duration_based_quality_plans() -> None:
    load_paths = [
        Path("quality_jmeter_plans/load")
        / f"load_config{config}_{LOAD_USERS}users_{LOAD_THROUGHPUT_RPM}rpm_ctt.jmx"
        for config in CONFIG_PRICES
    ]
    stress_paths = [
        Path("quality_jmeter_plans/stress_config3")
        / f"stress_config3_{users}users_{users * REQUESTS_PER_USER_RPM}rpm_ctt.jmx"
        for users in STRESS_USERS
    ]

    for path in load_paths + stress_paths:
        root = ET.parse(path).getroot()
        checks = {
            "ThreadGroup.scheduler": "true",
            "ThreadGroup.duration": str(DURATION_SEC),
            "ThreadGroup.delay": "0",
            "LoopController.continue_forever": "true",
            "LoopController.loops": "-1",
        }
        for prop_name, expected in checks.items():
            actual = first_named_text(root, prop_name)
            if actual != expected:
                raise RuntimeError(f"{path}: expected duration-based {prop_name}={expected!r}, got {actual!r}")
        if any(element.attrib.get("testname") == STOP_ON_503_TESTNAME for element in root.iter()):
            raise RuntimeError(f"{path}: stop-on-503 element must not be present in ordinary load/stress plans")


def generate(clean: bool) -> None:
    if clean:
        remove_obsolete_plans()

    write(
        Path("gui_jmeter_plans/lab4_all_configs_gui_local_tunnel.jmx"),
        all_configs_gui_plan(),
    )

    for config in CONFIG_PRICES:
        plan_name = f"load_config{config}"
        write(
            Path("gui_jmeter_plans") / f"{plan_name}.jmx",
            single_group_plan(
                config=config,
                threads=LOAD_USERS,
                throughput_rpm=LOAD_THROUGHPUT_RPM,
                plan_name=plan_name,
                thread_group_name=f"Thread Group - config={config} - {LOAD_USERS} users",
                include_listeners=True,
            ),
        )
        write(
            Path("quality_jmeter_plans/load")
            / f"load_config{config}_{LOAD_USERS}users_{LOAD_THROUGHPUT_RPM}rpm_ctt.jmx",
            single_group_plan(
                config=config,
                threads=LOAD_USERS,
                throughput_rpm=LOAD_THROUGHPUT_RPM,
                plan_name=f"load_config{config}_{LOAD_USERS}users_{LOAD_THROUGHPUT_RPM}rpm_ctt",
                thread_group_name=f"Thread Group - config={config} - {LOAD_USERS} users",
                include_listeners=False,
            ),
        )

    for users in STRESS_USERS:
        throughput_rpm = users * REQUESTS_PER_USER_RPM
        write(
            Path("quality_jmeter_plans/stress_config3")
            / f"stress_config3_{users}users_{throughput_rpm}rpm_ctt.jmx",
            single_group_plan(
                config=STRESS_CONFIG,
                threads=users,
                throughput_rpm=throughput_rpm,
                plan_name=f"stress_config3_{users}users_{throughput_rpm}rpm_ctt",
                thread_group_name=f"Thread Group - config=3 - {users} users",
                include_listeners=False,
            ),
        )

    for users in STRESS_UNTIL_503_USERS:
        throughput_rpm = users * REQUESTS_PER_USER_RPM
        write(
            generated_until_503_plan_path(users),
            single_group_plan(
                config=STRESS_CONFIG,
                threads=users,
                throughput_rpm=throughput_rpm,
                plan_name=f"{STRESS_UNTIL_503_PREFIX}_{users}users_{throughput_rpm}rpm_ctt",
                thread_group_name=f"Thread Group - config=3 until HTTP 503 - {users} users",
                include_listeners=False,
                ramp_up_sec=max(users, RAMP_UP_SEC),
                duration_sec=None,
                scheduler=False,
                stop_on_503=True,
                include_test_plan_listeners=True,
            ),
        )

    validate_until_503_plans()
    validate_duration_based_quality_plans()


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate Lab 4 JMeter plans.")
    parser.add_argument(
        "--no-clean",
        action="store_true",
        help="Do not remove old generated JMeter plans with obsolete names.",
    )
    args = parser.parse_args()

    generate(clean=not args.no_clean)


if __name__ == "__main__":
    main()
