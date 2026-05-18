package lab2;

import lab2.common.MathModule;
import lab2.csv.CsvExporter;
import lab2.log.Ln;
import lab2.log.Log10;
import lab2.log.Log2;
import lab2.log.Log3;
import lab2.log.Log5;
import lab2.stub.TableModule;
import lab2.stub.StubModules;
import lab2.system.LogBranch;
import lab2.system.SystemFunction;
import lab2.system.TrigBranch;
import lab2.trig.Cos;
import lab2.trig.Cot;
import lab2.trig.Csc;
import lab2.trig.Sec;
import lab2.trig.Sin;
import lab2.trig.Tan;
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
        MathModule log5 = new Log5(ln);
        MathModule log10 = new Log10(ln);
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
            log5,
            log10,
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
