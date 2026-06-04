package integration;

import common.MathModule;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import stub.StubModules;
import log.Log2;
import log.Log3;
import system.LogBranch;

import static integration.IntegrationTestSupport.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import java.util.stream.Stream;

public class LogBranchIntegrationTest {

    private static Stream<Arguments> provideTestPoints() {
        return Arrays.stream(LOG_POINTS)
            .mapToObj(Arguments::of);
    }

    /**
     * ЭТАП 0: Реальный только LogBranch (УРОВЕНЬ 1)
     * Все зависимости (Ln, Log2, Log3) — заглушки
     */
    @ParameterizedTest
    @MethodSource("provideTestPoints")
    void stage0_onlyLogBranchReal(double x) {
        MathModule realLogBranch = new LogBranch(
            StubModules.lnStub(),
            StubModules.log2Stub(),
            StubModules.log3Stub()
        );
        
        assertEqualsWithStub(realLogBranch, StubModules.logBranchStub(), x);
    }

    /**
     * ЭТАП 1: Реальные Log2 и Log3 (зависят от Ln — заглушка)
     */
    @ParameterizedTest
    @MethodSource("provideTestPoints")
    void stage1_log2AndLog3Real(double x) {
        MathModule lnStub = StubModules.lnStub();
        MathModule realLog2 = new Log2(lnStub);
        MathModule realLog3 = new Log3(lnStub);
        
        MathModule realLogBranch = new LogBranch(lnStub, realLog2, realLog3);
        
        assertEqualsWithStub(realLogBranch, StubModules.logBranchStub(), x);
    }

    /**
     * ЭТАП 2: Реальные Ln + Log2 + Log3
     */
    @ParameterizedTest
    @MethodSource("provideTestPoints")
    void stage2_allLogReal(double x) {
        MathModule realLn = createRealLn();
        MathModule realLog2 = new Log2(realLn);
        MathModule realLog3 = new Log3(realLn);
        
        MathModule realLogBranch = new LogBranch(realLn, realLog2, realLog3);
        
        assertEqualsWithStub(realLogBranch, StubModules.logBranchStub(), x);
    }

    private void assertEqualsWithStub(MathModule real, MathModule stub, double x) {
        double expected = stub.calculate(x);
        double actual = real.calculate(x);
        double delta = Math.max(DELTA, Math.abs(expected) * 1.0E-12);
        assertEquals(expected, actual, delta, "x = " + x);
    }
}