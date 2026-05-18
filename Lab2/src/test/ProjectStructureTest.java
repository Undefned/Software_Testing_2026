import common.MathModule;
import csv.CsvExporter;
import log.Ln;
import log.Log2;
import log.Log3;
import stub.TableModule;
import stub.StubModules;
import system.LogBranch;
import system.SystemFunction;
import system.TrigBranch;
import trig.Cos;
import trig.Cot;
import trig.Csc;
import trig.Sec;
import trig.Sin;
import trig.Tan;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;

class ProjectStructureTest {
    @Test
    void shouldKeepModulesInstantiable() {
        MathModule sin = new Sin();
        MathModule cos = new Cos(sin);
        MathModule ln = new Ln();
        MathModule tan = new Tan(sin, cos);
        MathModule cot = new Cot(cos, sin);
        MathModule sec = new Sec(cos);
        MathModule csc = new Csc(sin);
        MathModule log2 = new Log2(ln);
        MathModule log3 = new Log3(ln);
        MathModule trigBranch = new TrigBranch(sin, cos, tan, cot, sec, csc);
        MathModule logBranch = new LogBranch(ln, log2, log3);
        MathModule tableModule = new TableModule(Map.of(0.25, 42.0), 1.0E-6);
        MathModule sinStub = StubModules.sinStub();
        MathModule logBranchStub = StubModules.logBranchStub();

        MathModule[] modules = {
            cos,
            tan,
            cot,
            sec,
            csc,
            log2,
            log3,
            trigBranch,
            logBranch,
            new SystemFunction(trigBranch, logBranch),
            tableModule,
            sinStub,
            logBranchStub
        };

        for (MathModule module : modules) {
            double argument = 0.25;
            if (module == trigBranch || module == sinStub) {
                argument = -Math.PI / 6.0;
            } else if (module == logBranch || module == logBranchStub) {
                argument = 2.0;
            }
            double finalArgument = argument;
            assertDoesNotThrow(() -> module.calculate(finalArgument));
        }
    }

    @Test
    void shouldProvideWorkingImplementedModules() {
        assertEquals(0.0, new Sin().calculate(0.0), 1.0E-12);
        assertEquals(0.0, new Ln().calculate(1.0), 1.0E-12);
    }

    @Test
    void shouldProvideUtilitySkeletons() {
        assertDoesNotThrow(() -> exportCsvExample());
        assertDoesNotThrow(() -> App.main(new String[0]));
    }

    private void exportCsvExample() throws IOException {
        new CsvExporter().export(x -> x, 0.0, 1.0, 0.5, "target/output.csv", "Result");
    }
}
