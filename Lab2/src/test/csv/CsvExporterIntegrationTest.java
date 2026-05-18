package lab2.csv;

import lab2.common.MathModule;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class CsvExporterIntegrationTest {
    @TempDir
    Path tempDir;

    @Test
    void shouldExportValuesToCsvFile() throws IOException {
        MathModule module = x -> {
            if (Math.abs(x - 0.5) < 1.0E-12) {
                throw new IllegalArgumentException("undefined");
            }
            return x * x;
        };

        Path output = tempDir.resolve("exports").resolve("module.csv");
        CsvExporter exporter = new CsvExporter();

        exporter.export(module, 0.0, 1.0, 0.5, output.toString(), "Result");

        List<String> lines = Files.readAllLines(output);

        assertEquals("X;Result", lines.get(0));
        assertEquals("0.0;0.0", lines.get(1));
        assertEquals("0.5;undefined", lines.get(2));
        assertEquals("1.0;1.0", lines.get(3));
    }

    @Test
    void shouldRejectInvalidExportArguments() {
        CsvExporter exporter = new CsvExporter();
        MathModule module = x -> x;

        assertThrows(IllegalArgumentException.class, () -> exporter.export(null, 0.0, 1.0, 0.5, "out.csv", "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, Double.NaN, 1.0, 0.5, "out.csv", "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, Double.POSITIVE_INFINITY, 0.5, "out.csv", "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, 1.0, Double.NEGATIVE_INFINITY, "out.csv", "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 1.0, 0.0, 0.5, "out.csv", "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, 1.0, 0.0, "out.csv", "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, 1.0, 0.5, null, "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, 1.0, 0.5, "", "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, 1.0, 0.5, "   ", "Result"));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, 1.0, 0.5, "out.csv", null));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, 1.0, 0.5, "out.csv", ""));
        assertThrows(IllegalArgumentException.class, () -> exporter.export(module, 0.0, 1.0, 0.5, "out.csv", "   "));
    }

    @Test
    void shouldExportToPathWithoutParent() throws IOException {
        CsvExporter exporter = new CsvExporter();
        MathModule module = x -> x + 1.0;
        Path output = Path.of("plain-" + UUID.randomUUID() + ".csv");

        try {
            exporter.export(module, 0.0, 0.0, 1.0, output.toString(), "Result");

            assertTrue(Files.exists(output));
            List<String> lines = Files.readAllLines(output);
            assertEquals(2, lines.size());
            assertEquals("X;Result", lines.get(0));
            assertEquals("0.0;1.0", lines.get(1));
        } finally {
            Files.deleteIfExists(output);
        }
    }

    @Test
    void shouldIncludeRightBoundaryAndHandleNonFiniteModuleResults() throws IOException {
        CsvExporter exporter = new CsvExporter();
        Path output = tempDir.resolve("boundary.csv");

        MathModule module = x -> {
            if (Math.abs(x - 1.0) < 1.0E-12) {
                return Double.NaN;
            }
            if (Math.abs(x - 2.0) < 1.0E-12) {
                return Double.POSITIVE_INFINITY;
            }
            return x;
        };

        exporter.export(module, 0.0, 2.0, 1.0, output.toString(), "Result");

        List<String> lines = Files.readAllLines(output);
        assertEquals("0.0;0.0", lines.get(1));
        assertEquals("1.0;undefined", lines.get(2));
        assertEquals("2.0;undefined", lines.get(3));
        assertEquals(4, lines.size());
    }
}
