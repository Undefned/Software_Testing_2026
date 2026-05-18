import common.MathModule;
import csv.CsvExporter;
import stub.StubModules;
import java.io.IOException;

public final class App {
    private App() {
    }

    public static void main(String[] args) {
        run(new CsvExporter());

        System.out.println(Math.log(2.0));
        System.out.println(Math.log(3.0));
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
