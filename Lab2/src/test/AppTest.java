import common.MathModule;
import csv.CsvExporter;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class AppTest {

    @Test
    void shouldCreateSinStubCsvOnSuccessPathViaRun() throws IOException {
        Path output = Path.of("target", "sin-stub.csv");
        Files.deleteIfExists(output);

        try {
            App.run(new CsvExporter());

            assertTrue(Files.exists(output));
            List<String> lines = Files.readAllLines(output);
            assertFalse(lines.isEmpty());
            assertTrue(lines.get(0).startsWith("X;Result"));
        } finally {
            Files.deleteIfExists(output);
        }
    }

    @Test
    void shouldWrapIOExceptionIntoIllegalStateException() {
        IOException expectedCause = new IOException("simulated io failure");
        CsvExporter failingExporter = new CsvExporter() {
            @Override
            public void export(
                    MathModule module,
                    double startX,
                    double endX,
                    double step,
                    String outputPath,
                    String headerName
            ) throws IOException {
                throw expectedCause;
            }
        };

        IllegalStateException exception =
                assertThrows(IllegalStateException.class, () -> App.run(failingExporter));

        assertEquals("Failed to export CSV example", exception.getMessage());
        assertEquals(expectedCause, exception.getCause());
    }
}