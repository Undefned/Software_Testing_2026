import common.MathModule;
import csv.CsvExporter;
import stub.StubModules;
import system.TrigBranch;
import trig.Cos;
import trig.Cot;
import trig.Csc;
import trig.Sec;
import trig.Tan;

import java.io.IOException;

public final class App {
    private App() {
    }

    public static void main(String[] args) {
        run(new CsvExporter());

        System.out.println(Math.log(2.0));
        System.out.println(Math.log(3.0));
        System.out.println("Значение sin для 8.83395 = " + StubModules.sinStub().calculate(8.83395));

        MathModule cosStub = StubModules.cosStub();
        MathModule realCos = new Cos(StubModules.sinStub());

        MathModule tanStub = StubModules.tanStub();
        MathModule realTan = new Tan(StubModules.sinStub(), cosStub);

        MathModule cotStub = StubModules.cotStub();
        MathModule realCot = new Cot(cosStub, StubModules.sinStub());
     

        MathModule secStub = StubModules.secStub();
        MathModule realSec = new Sec(cosStub);
        MathModule sinStub = StubModules.sinStub();

MathModule realCsc = new Csc(sinStub);



        MathModule realTrigBranch = new TrigBranch(
            sinStub, cosStub, realTan, realCot, realSec, realCsc
        );

for (double x : StubModules.TRIG_BRANCH_POINTS) {
    double expected = StubModules.trigBranchStub().calculate(x);
    double actual = realTrigBranch.calculate(x);

    if (Math.abs(expected - actual) > 1e-6) {
        System.out.println(x);
        System.out.println(expected);
        System.out.println(actual);
    }
}
    }

    static void run(CsvExporter exporter) {
        MathModule sinStub = StubModules.sinStub();

        try {
            exporter.export(
                    sinStub,
                    -7.22594, 
                    -0.94276,
                    6.28318,                   // шаг
                    "target/sin-stub.csv",
                    "Result"
            );
        } catch (IOException exception) {
            throw new IllegalStateException("Failed to export CSV example", exception);
        }
    }
}
