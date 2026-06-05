package integration;

import common.MathModule;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

import stub.StubModules;
import system.TrigBranch;
import trig.*;

import static integration.IntegrationTestSupport.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import java.util.stream.Stream;

public class TrigBranchIntegrationTest {
    // MathModule sinSlub = createRealSin();     
    private static Stream<Arguments> provideTestPoints() {
        return Arrays.stream(TRIG_BRANCH_SAFE_POINTS)
            .mapToObj(Arguments::of);
    }

    /**
     * ЭТАП 0: Реальный только TrigBranch (УРОВЕНЬ 1)
     * Все зависимости (Sin, Cos, Tan, Cot, Sec, Csc) — заглушки
     */
    @ParameterizedTest
    @MethodSource("provideTestPoints")
    void stage0_onlyTrigBranchReal(double x) {
        MathModule realTrigBranch = new TrigBranch(
            StubModules.sinStub(),
            StubModules.cosStub(),
            StubModules.tanStub(),
            StubModules.cotStub(),
            StubModules.secStub(),
            StubModules.cscStub()
        );
        
        assertEqualsWithStub(realTrigBranch, StubModules.trigBranchStub(), x);
    }

    /**
     * ЭТАП 1: Реальные TrigBranch + УРОВЕНЬ 2 (Tan, Cot, Sec)
     * Уровень 3 (Cos, Csc) и Уровень 4 (Sin) — заглушки
     */
    @ParameterizedTest
    @MethodSource("provideTestPoints")
    void stage1_trigBranchAndLevel2Real(double x) {
        MathModule sinStub = StubModules.sinStub();
        MathModule cosStub = StubModules.cosStub();
        MathModule cscStub = StubModules.cscStub();
        
        MathModule realTan = new Tan(sinStub, cosStub);
        MathModule realCot = new Cot(cosStub, sinStub);
        MathModule realSec = new Sec(cosStub);
        
        MathModule realTrigBranch = new TrigBranch(
            sinStub, cosStub, realTan, realCot, realSec, cscStub
        );
        
        assertEqualsWithStub(realTrigBranch, StubModules.trigBranchStub(), x);
    }

    /**
     * ЭТАП 2: Реальные TrigBranch + УРОВЕНЬ 2 + УРОВЕНЬ 3 (Cos, Csc)
     * Уровень 4 (Sin) — заглушка
     */
    @ParameterizedTest
    @MethodSource("provideTestPoints")
    void stage2_trigBranchAndLevel2AndLevel3Real(double x) {
        MathModule sinStub = StubModules.sinStub();

        MathModule realCos = new Cos(sinStub);
        MathModule realCsc = new Csc(sinStub);
        MathModule realTan = new Tan(sinStub, realCos);
        MathModule realCot = new Cot(realCos, sinStub);
        MathModule realSec = new Sec(realCos);

        MathModule realTrigBranch = new TrigBranch(
            sinStub, realCos, realTan, realCot, realSec, realCsc
        );

        assertEqualsWithStub(realTrigBranch, StubModules.trigBranchStub(), x);
    }

    /**
     * ЭТАП 3: Полностью реальный TrigBranch (все уровни)
     */
    @ParameterizedTest
    @MethodSource("provideTestPoints")
    void stage3_fullyRealTrigBranch(double x) {
        MathModule realTrigBranch = createRealTrigBranch();
        MathModule stubTrigBranch = StubModules.trigBranchStub();
        
        assertEqualsWithStub(realTrigBranch, stubTrigBranch, x);
    }

    private void assertEqualsWithStub(MathModule real, MathModule stub, double x) {
        double expected = stub.calculate(x);
        double actual = real.calculate(x);
        double delta = Math.max(DELTA, Math.abs(expected) * 1.0E-8);
        assertEquals(expected, actual, delta, "x = " + x);
    }
}