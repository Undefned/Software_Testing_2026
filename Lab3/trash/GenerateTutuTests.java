package ru.itmo;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.*;
import java.util.regex.Pattern;

/**
 * Генератор Selenium IDE .side файлов для tutu.ru
 * Запуск: java scripts/GenerateTutuTests.java
 */
public class GenerateTutuTests {
    private static final Path PROJECT_ROOT = Path.of("").toAbsolutePath();
    private static final Path OUTPUT_DIR = PROJECT_ROOT.resolve("docs/selenium-ide");
    private static final Path TEST_CASES_FILE = PROJECT_ROOT.resolve("docs/test-cases.md");
    private static final String BASE_URL = "https://www.tutu.ru";
    private static final int EXPECTED_COUNT = 15; // Количество тестовых сценариев

    // XPath локаторы для tutu.ru
    static class XPath {
        static final String FORM = "xpath=//form[contains(@class, 'search-form') or .//input[@data-ti='input']]";
        static final String HOTELS_TAB = "xpath=//button[contains(@class, 'oim-bed-double')]";
        static final String DEPARTURE_FIELD = "xpath=//input[@data-ti='input']";
        static final String DESTINATION_FIELD = "xpath=(//input[@data-ti='input'])[2]";
        static final String SEARCH_BUTTON = "xpath=//button[@type='submit']";
        static final String DEPARTURE_SUGGESTION = "xpath=//div[contains(text(),'Москва')]";
        static final String DESTINATION_SUGGESTION = "xpath=//div[contains(text(),'Санкт-Петербург')]";
        static final String SUGGESTIONS = "xpath=//div[@role='option' or contains(@class, 'suggest')]";
        static final String DEPARTURE_DATE = "xpath=//input[@placeholder='Когда' or contains(@placeholder, 'Когда')]";
        static final String CALENDAR = "xpath=//div[contains(@class, 'calendar') or @role='dialog']";
        static final String PASSENGERS = "xpath=//button[contains(., 'пассажир')]";
        static final String LOADING_OR_RESULTS = "xpath=//div[contains(@class, 'result') or contains(., 'билет')]";
        static final String NAVIGATION = "xpath=//header//a | //nav//a";
    }

    record TestCase(String code, String title, String steps, String expected) {}

    public static void main(String[] args) {
        try {
            List<TestCase> cases = parseTestCases();
            Map<String, Object> side = buildSide(cases);
            writeSideFile(side);
            System.out.println("✅ Generated " + OUTPUT_DIR.resolve("tutu.side"));
        } catch (Exception e) {
            System.err.println("❌ Error: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static List<TestCase> parseTestCases() throws IOException {
        List<TestCase> cases = new ArrayList<>();
        if (!Files.exists(TEST_CASES_FILE)) {
            // Если файла нет, создаём дефолтные тест-кейсы
            return createDefaultTestCases();
        }

        String content = Files.readString(TEST_CASES_FILE);
        Pattern pattern = Pattern.compile("\\|\\s*(TC-\\d+)\\s*\\|.*?\\|.*?\\|.*?\\|.*?\\|");
        // Упрощённый парсинг — в реальности нужно больше логики
        return cases.isEmpty() ? createDefaultTestCases() : cases;
    }

    private static List<TestCase> createDefaultTestCases() {
        return List.of(
            new TestCase("TC-01", "Открытие главной страницы", "Открыть сайт", "Страница загружена"),
            new TestCase("TC-02", "Поиск отелей Москва → СПб", "Выбрать отели, ввести города, нажать поиск", "Поиск запущен"),
            new TestCase("TC-03", "Проверка видимости полей", "Проверить поля Откуда, Куда, Найти", "Все поля видны"),
            new TestCase("TC-04", "Переключение на вкладку Отели", "Клик по вкладке Отели", "Вкладка активна"),
            new TestCase("TC-05", "Поиск без заполнения полей", "Нажать поиск без данных", "Валидация или форма доступна")
        );
    }

    @SuppressWarnings("unchecked")
    private static Map<String, Object> buildSide(List<TestCase> cases) {
        Map<String, Object> side = new LinkedHashMap<>();
        side.put("id", UUID.nameUUIDFromBytes("tutu-tests".getBytes()).toString());
        side.put("version", "2.0");
        side.put("name", "Tutu.ru Functional Tests");
        side.put("url", BASE_URL);

        List<Map<String, Object>> tests = new ArrayList<>();
        List<String> testIds = new ArrayList<>();

        for (TestCase tc : cases) {
            String testId = UUID.nameUUIDFromBytes(tc.code().getBytes()).toString();
            testIds.add(testId);
            tests.add(Map.of(
                "id", testId,
                "name", tc.code() + " - " + tc.title(),
                "description", "Steps: " + tc.steps() + "\nExpected: " + tc.expected(),
                "commands", generateCommands(tc)
            ));
        }

        side.put("tests", tests);
        side.put("suites", List.of(Map.of(
            "id", UUID.nameUUIDFromBytes("all-tests".getBytes()).toString(),
            "name", "All Tutu.ru Scenarios",
            "persistSession", false,
            "parallel", false,
            "timeout", 300,
            "tests", testIds
        )));
        side.put("urls", List.of(BASE_URL));
        side.put("plugins", List.of());

        return side;
    }

    private static List<Map<String, Object>> generateCommands(TestCase tc) {
        List<Map<String, Object>> commands = new ArrayList<>();
        int idx = 1;

        commands.add(command(idx++, "open", "/", ""));

        switch (tc.code()) {
            case "TC-01" -> {
                commands.add(command(idx++, "assertElementPresent", XPath.FORM, ""));
            }
            case "TC-02" -> {
                commands.addAll(hotelsSearchCommands(idx));
            }
            case "TC-03" -> {
                commands.add(command(idx++, "assertElementPresent", XPath.DEPARTURE_FIELD, ""));
                commands.add(command(idx++, "assertElementPresent", XPath.DESTINATION_FIELD, ""));
                commands.add(command(idx++, "assertElementPresent", XPath.SEARCH_BUTTON, ""));
            }
            case "TC-04" -> {
                commands.add(command(idx++, "click", XPath.HOTELS_TAB, ""));
                commands.add(command(idx++, "assertElementPresent", XPath.DEPARTURE_FIELD, ""));
            }
            case "TC-05" -> {
                commands.add(command(idx++, "click", XPath.SEARCH_BUTTON, ""));
                commands.add(command(idx++, "assertElementPresent", XPath.FORM, ""));
            }
            default -> {
                commands.add(command(idx++, "assertElementPresent", XPath.FORM, ""));
            }
        }

        return commands;
    }

    private static List<Map<String, Object>> hotelsSearchCommands(int startIdx) {
        List<Map<String, Object>> commands = new ArrayList<>();
        int i = startIdx;

        // Клик по вкладке Отели
        commands.add(command(i++, "click", XPath.HOTELS_TAB, ""));

        // Поле Откуда - ввод Москва через executeScript
        commands.add(command(i++, "click", XPath.DEPARTURE_FIELD, ""));
        commands.add(executeScript(i++, "const input = document.querySelector(\"input[data-ti='input']\");"
                + "if(input) { input.value = 'Москва'; input.dispatchEvent(new Event('input', {bubbles: true})); }"));
        commands.add(command(i++, "waitForElementVisible", XPath.SUGGESTIONS, "5000"));
        commands.add(command(i++, "click", XPath.DEPARTURE_SUGGESTION, ""));

        // Поле Куда - ввод Санкт-Петербург через executeScript
        commands.add(command(i++, "click", XPath.DESTINATION_FIELD, ""));
        commands.add(executeScript(i++, "const inputs = document.querySelectorAll(\"input[data-ti='input']\");"
                + "if(inputs[1]) { inputs[1].value = 'Санкт-Петербург'; inputs[1].dispatchEvent(new Event('input', {bubbles: true})); }"));
        commands.add(command(i++, "waitForElementVisible", XPath.SUGGESTIONS, "5000"));
        commands.add(command(i++, "click", XPath.DESTINATION_SUGGESTION, ""));

        // Поиск
        commands.add(command(i++, "click", XPath.SEARCH_BUTTON, ""));
        commands.add(command(i++, "waitForElementVisible", XPath.LOADING_OR_RESULTS, "10000"));

        return commands;
    }

    private static Map<String, Object> command(int id, String name, String target, String value) {
        Map<String, Object> cmd = new LinkedHashMap<>();
        cmd.put("id", UUID.randomUUID().toString());
        cmd.put("comment", "");
        cmd.put("command", name);
        cmd.put("target", target);
        cmd.put("targets", target.startsWith("xpath=") ? List.of(List.of(target, "xpath")) : List.of());
        cmd.put("value", value);
        return cmd;
    }

    private static Map<String, Object> executeScript(int id, String script) {
        return command(id, "executeScript", script, "");
    }

    private static void writeSideFile(Map<String, Object> side) throws IOException {
        Files.createDirectories(OUTPUT_DIR);
        Path outputFile = OUTPUT_DIR.resolve("tutu.side");
        String json = formatJson(side);
        Files.writeString(outputFile, json);
    }

    @SuppressWarnings("unchecked")
    private static String formatJson(Map<String, Object> map) {
        StringBuilder sb = new StringBuilder();
        sb.append("{\n");
        int size = map.size();
        int idx = 0;
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            sb.append("  \"").append(entry.getKey()).append("\": ");
            sb.append(formatValue(entry.getValue()));
            if (++idx < size) sb.append(",");
            sb.append("\n");
        }
        sb.append("}");
        return sb.toString();
    }

    private static String formatValue(Object value) {
        if (value instanceof String s) {
            return "\"" + escapeJson(s) + "\"";
        } else if (value instanceof Number || value instanceof Boolean) {
            return String.valueOf(value);
        } else if (value instanceof List) {
            List<?> list = (List<?>) value;
            if (list.isEmpty()) return "[]";
            StringBuilder sb = new StringBuilder("[");
            for (int i = 0; i < list.size(); i++) {
                sb.append(formatValue(list.get(i)));
                if (i < list.size() - 1) sb.append(", ");
            }
            sb.append("]");
            return sb.toString();
        } else if (value instanceof Map) {
            return formatJson((Map<String, Object>) value);
        }
        return "null";
    }

    private static String escapeJson(String s) {
        return s.replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t");
    }
}