package lab2.integration;

import lab2.common.MathModule;
import lab2.log.Ln;
import lab2.log.Log10;
import lab2.log.Log2;
import lab2.log.Log3;
import lab2.log.Log5;
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

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;

final class SupportIntegrationTest {
    static final double DELTA = 1.0E-6;

    static final double[] TRIG_BRANCH_POINTS = StubModules.TRIG_BRANCH_POINTS.clone();
    static final double[] TRIG_BRANCH_SAFE_POINTS = Arrays.stream(StubModules.TRIG_BRANCH_POINTS)
            .filter(x -> x < 0.0)
            .toArray();
    static final double[] LOG_POINTS = StubModules.LOG_POINTS.clone();

    private IntegrationTestSupport() {
    }

    static MathModule createRealTrigBranch() {
        MathModule sin = new Sin(1.0E-12, 10_000);
        MathModule cos = new Cos(sin);
        MathModule tan = new Tan(sin, cos);
        MathModule cot = new Cot(cos, sin);
        MathModule sec = new Sec(cos);
        MathModule csc = new Csc(sin);
        return new TrigBranch(sin, cos, tan, cot, sec, csc);
    }

    static MathModule createStubTrigBranch() {
        return StubModules.trigBranchStub();
    }

    static MathModule createRealLogBranch() {
        MathModule ln = new Ln(1.0E-12, 10_000);
        MathModule log2 = new Log2(ln);
        MathModule log3 = new Log3(ln);
        return new LogBranch(ln, log2, log3);
    }

    static MathModule createStubLogBranch() {
        return StubModules.logBranchStub();
    }

    static MathModule createSystemFunction(MathModule trigBranch, MathModule logBranch) {
        return new SystemFunction(trigBranch, logBranch);
    }

    static void assertMatchesOnPoints(MathModule actualModule, MathModule expectedModule, double[] points) {
        for (double x : points) {
            double actual = assertDoesNotThrow(() -> actualModule.calculate(x));
            double expected = assertDoesNotThrow(() -> expectedModule.calculate(x));
            double scaledDelta = Math.max(DELTA, Math.abs(expected) * 1.0E-12);
            assertEquals(expected, actual, scaledDelta);
        }
    }

    static void assertSystemMatches(MathModule systemUnderTest, MathModule trigExpected, double[] trigPoints,
                                    MathModule logExpected, double[] logPoints) {
        assertMatchesOnPoints(systemUnderTest, trigExpected, trigPoints);
        assertMatchesOnPoints(systemUnderTest, logExpected, logPoints);
    }
}
