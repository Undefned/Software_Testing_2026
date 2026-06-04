package integration;

import common.MathModule;
import log.Ln;
import log.Log2;
import log.Log3;
import stub.StubModules;
import system.LogBranch;
import system.SystemFunction;
import system.TrigBranch;
import trig.*;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;

public final class IntegrationTestSupport {
    static final double DELTA = 1.0E-6;
    static final double EPSILON = 1.0E-12;
    static final int MAX_ITERATIONS = 10_000;

    static final double[] TRIG_BRANCH_POINTS = StubModules.TRIG_BRANCH_POINTS.clone();
    static final double[] TRIG_BRANCH_SAFE_POINTS = Arrays.stream(StubModules.TRIG_BRANCH_POINTS)
        .filter(x -> x < 0.0)                           // только отрицательные
        .filter(x -> x <= 0)                            // строго ≤ 0 (дубль)
        .filter(x -> x > -20.0)                         // не слишком далеко
        // Исключаем особые точки (где функция не определена)
        .filter(x -> Math.abs(x + 6.283) > 0.01)        // -2π
        .filter(x -> Math.abs(x + 5.498) > 0.01)        // -7π/4
        .filter(x -> Math.abs(x + 5.378) > 0.01)        // csc=tan
        .filter(x -> Math.abs(x + 4.712) > 0.01)        // -3π/2
        .filter(x -> Math.abs(x + 3.142) > 0.01)        // -π
        .filter(x -> Math.abs(x + 2.356) > 0.01)        // -3π/4
        .filter(x -> Math.abs(x + 1.571) > 0.01)        // -π/2
        .filter(x -> Math.abs(x + 0.905) > 0.01)        // csc=tan
        .filter(x -> Math.abs(x) > 0.01)                // 0
        .toArray();
    static final double[] LOG_POINTS = StubModules.LOG_POINTS.clone();

    private IntegrationTestSupport() {}

    /** Создаёт Sin через ряд (Уровень 4) */
    static MathModule createRealSin() {
        return new Sin(EPSILON, MAX_ITERATIONS);
    }

    /** Создаёт Cos через Sin (Уровень 3) */
    static MathModule createRealCos(MathModule sin) {
        return new Cos(sin);
    }

    /** Создаёт Csc через Sin (Уровень 3) */
    static MathModule createRealCsc(MathModule sin) {
        return new Csc(sin);
    }

    /** Создаёт Tan через Sin и Cos (Уровень 2) */
    static MathModule createRealTan(MathModule sin, MathModule cos) {
        return new Tan(sin, cos);
    }

    /** Создаёт Cot через Cos и Sin (Уровень 2) */
    static MathModule createRealCot(MathModule cos, MathModule sin) {
        return new Cot(cos, sin);
    }

    /** Создаёт Sec через Cos (Уровень 2) */
    static MathModule createRealSec(MathModule cos) {
        return new Sec(cos);
    }

    /** Создаёт TrigBranch полностью реальным (все уровни) */
    static MathModule createRealTrigBranch() {
        MathModule sin = createRealSin();
        MathModule cos = createRealCos(sin);
        MathModule tan = createRealTan(sin, cos);
        MathModule cot = createRealCot(cos, sin);
        MathModule sec = createRealSec(cos);
        MathModule csc = createRealCsc(sin);
        return new TrigBranch(sin, cos, tan, cot, sec, csc);
    }

    /** Создаёт TrigBranch с заглушками для всех зависимостей */
    static MathModule createTrigBranchWithAllStubs() {
        return new TrigBranch(
                StubModules.sinStub(),
                StubModules.cosStub(),
                StubModules.tanStub(),
                StubModules.cotStub(),
                StubModules.secStub(),
                StubModules.cscStub()
        );
    }

    /** Создаёт Ln через ряд (базовый) */
    static MathModule createRealLn() {
        return new Ln(EPSILON, MAX_ITERATIONS);
    }

    /** Создаёт Log2 через Ln */
    static MathModule createRealLog2(MathModule ln) {
        return new Log2(ln);
    }

    /** Создаёт Log3 через Ln */
    static MathModule createRealLog3(MathModule ln) {
        return new Log3(ln);
    }

    /** Создаёт LogBranch полностью реальным */
    static MathModule createRealLogBranch() {
        MathModule ln = createRealLn();
        MathModule log2 = createRealLog2(ln);
        MathModule log3 = createRealLog3(ln);
        return new LogBranch(ln, log2, log3);
    }

    /** Создаёт LogBranch с заглушками */
    static MathModule createLogBranchWithAllStubs() {
        return new LogBranch(
                StubModules.lnStub(),
                StubModules.log2Stub(),
                StubModules.log3Stub()
        );
    }

    // ==================== SYSTEM ====================

    static MathModule createSystemFunction(MathModule trigBranch, MathModule logBranch) {
        return new SystemFunction(trigBranch, logBranch);
    }

    // ==================== ASSERTIONS ====================

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