package integration;

import common.MathModule;
import log.Ln;
import log.Log2;
import log.Log3;
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

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;

final class IntegrationTestSupport {
    static final double DELTA = 1.0E-6;

    static final double[] TRIG_BRANCH_POINTS = StubModules.TRIG_BRANCH_POINTS.clone();
    static final double[] TRIG_BRANCH_SAFE_POINTS = Arrays.stream(StubModules.TRIG_BRANCH_POINTS)
            .filter(x -> x < 0.0)
            .toArray();
    static final double[] LOG_POINTS = StubModules.LOG_POINTS.clone();

    private IntegrationTestSupport() {}

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
            assertEquals(expected, actual, scaledDelta, "x = " + x);
        }
    }

    static void assertSystemMatches(MathModule systemUnderTest, MathModule trigExpected, double[] trigPoints,
                                    MathModule logExpected, double[] logPoints) {
        assertMatchesOnPoints(systemUnderTest, trigExpected, trigPoints);
        assertMatchesOnPoints(systemUnderTest, logExpected, logPoints);
    }
}