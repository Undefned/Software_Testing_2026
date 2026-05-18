package lab2;

import lab2.common.MathModule;
import lab2.csv.CsvExporter;
import lab2.stub.StubModules;

import java.io.IOException;

public final class App {
    private App() {
    }

    public static void main(String[] args) {
        run(new CsvExporter());
    }

    static void run(CsvExporter exporter) {
        MathModule sinStub = StubModules.sinStub();

        try {
            exporter.export(
                    sinStub,
                    -Math.PI / 3.0,
                    -Math.PI / 6.0,
                    Math.PI / 12.0,
                    "target/sin-stub.csv",
                    "Result"
            );
        } catch (IOException exception) {
            throw new IllegalStateException("Failed to export CSV example", exception);
        }
    }
}
