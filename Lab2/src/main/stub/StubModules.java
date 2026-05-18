package lab2.stub;

import lab2.common.MathModule;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Набор фабричных методов для табличных заглушек модулей системы.
 */
public final class StubModules {
    private static final double LOOKUP_EPSILON = 1.0E-6;

    private static final double[] BASE_TRIG_FUNCTION_POINTS = {
            -Math.PI / 2.0 - 0.01,
            -Math.PI / 2.0 + 0.01,
            -Math.PI / 3.0,
            -Math.PI / 4.0,
            -Math.PI / 6.0,
            -0.1,
            -0.01,
            0.01,
            0.1
    };

    public static final double[] TRIG_BRANCH_POINTS = loadPointsFromCsv("/lab2/stub/trig-branch.csv");
    public static final double[] TRIG_FUNCTION_POINTS = buildTrigFunctionPoints();
    public static final double[] LOG_POINTS = loadPointsFromCsv("/lab2/stub/log-functions.csv");

    private StubModules() {}

    public static MathModule sinStub() {
        return fromCsv("/lab2/stub/trig-functions.csv", "sin");
    }

    public static MathModule cosStub() {
        return fromCsv("/lab2/stub/trig-functions.csv", "cos");
    }

    public static MathModule tanStub() {
        return fromCsv("/lab2/stub/trig-functions.csv", "tan");
    }

    public static MathModule cotStub() {
        return fromCsv("/lab2/stub/trig-functions.csv", "cot");
    }

    public static MathModule secStub() {
        return fromCsv("/lab2/stub/trig-functions.csv", "sec");
    }

    public static MathModule cscStub() {
        return fromCsv("/lab2/stub/trig-functions.csv", "csc");
    }

    public static MathModule lnStub() {
        return fromCsv("/lab2/stub/log-functions.csv", "ln");
    }

    public static MathModule log2Stub() {
        return fromCsv("/lab2/stub/log-functions.csv", "log2");
    }

    public static MathModule log3Stub() {
        return fromCsv("/lab2/stub/log-functions.csv", "log3");
    }

    public static MathModule log5Stub() {
        return fromCsv("/lab2/stub/log-functions.csv", "log5");
    }

    public static MathModule log10Stub() {
        return fromCsv("/lab2/stub/log-functions.csv", "log10");
    }

    public static MathModule trigBranchStub() {
        return fromCsv("/lab2/stub/trig-branch.csv", "trig_branch");
    }

    public static MathModule logBranchStub() {
        return fromCsv("/lab2/stub/log-branch.csv", "log_branch");
    }

    private static MathModule fromCsv(String resourcePath, String columnName) {
        return new TableModule(loadColumn(resourcePath, columnName), LOOKUP_EPSILON);
    }

    private static Map<Double, Double> loadColumn(String resourcePath, String columnName) {
        try (BufferedReader reader = openResource(resourcePath)) {
            String header = reader.readLine();
            if (header == null) {
                throw new IllegalStateException("CSV resource is empty: " + resourcePath);
            }
            String[] columns = header.split(";");
            int targetIndex = findColumnIndex(columns, columnName, resourcePath);

            LinkedHashMap<Double, Double> result = new LinkedHashMap<>();
            String line;
            while ((line = reader.readLine()) != null) {
                if (line.isBlank()) {
                    continue;
                }
                String[] parts = line.split(";");
                result.put(Double.parseDouble(parts[0]), Double.parseDouble(parts[targetIndex]));
            }
            return result;
        } catch (IOException exception) {
            throw new IllegalStateException("Failed to read CSV resource: " + resourcePath, exception);
        }
    }

    private static double[] loadPointsFromCsv(String resourcePath) {
        Map<Double, Double> values = loadColumn(resourcePath, "x");
        double[] points = new double[values.size()];
        int index = 0;
        for (double point : values.keySet()) {
            points[index++] = point;
        }
        return points;
    }

    private static int findColumnIndex(String[] columns, String columnName, String resourcePath) {
        for (int index = 0; index < columns.length; index++) {
            if (columns[index].trim().equals(columnName)) {
                return index;
            }
        }
        throw new IllegalStateException("Column '" + columnName + "' is missing in " + resourcePath);
    }

    private static BufferedReader openResource(String resourcePath) {
        InputStream resource = StubModules.class.getResourceAsStream(resourcePath);
        if (resource == null) {
            throw new IllegalStateException("Resource not found: " + resourcePath);
        }
        return new BufferedReader(new InputStreamReader(resource, StandardCharsets.UTF_8));
    }

    private static double[] buildTrigFunctionPoints() {
        LinkedHashMap<Double, Boolean> points = new LinkedHashMap<>();
        addPoints(points, BASE_TRIG_FUNCTION_POINTS);
        for (double point : TRIG_BRANCH_POINTS) {
            if (point < 0.0) {
                addPoint(points, point);
                addPoint(points, Math.PI / 2.0 - point);
            }
        }

        double[] result = new double[points.size()];
        int index = 0;
        for (double point : points.keySet()) {
            result[index] = point;
            index++;
        }
        return result;
    }

    private static void addPoints(LinkedHashMap<Double, Boolean> points, double[] values) {
        for (double value : values) {
            addPoint(points, value);
        }
    }

    private static void addPoint(LinkedHashMap<Double, Boolean> points, double point) {
        points.put(point, Boolean.TRUE);
    }
}
