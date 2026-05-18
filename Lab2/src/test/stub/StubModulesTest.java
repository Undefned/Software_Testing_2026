package lab2.stub;

import lab2.common.MathModule;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;

class StubModulesTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    @Test
    void shouldProvideConsistentTrigonometricStubValuesOnAllPoints() {
        MathModule sinStub = StubModules.sinStub();
        MathModule cosStub = StubModules.cosStub();
        MathModule tanStub = StubModules.tanStub();
        MathModule cotStub = StubModules.cotStub();
        MathModule secStub = StubModules.secStub();
        MathModule cscStub = StubModules.cscStub();

        for (double x : StubModules.TRIG_FUNCTION_POINTS) {
            double sin = assertDoesNotThrow(() -> sinStub.calculate(x));
            double cos = assertDoesNotThrow(() -> cosStub.calculate(x));
            double tan = assertDoesNotThrow(() -> tanStub.calculate(x));
            double cot = assertDoesNotThrow(() -> cotStub.calculate(x));
            double sec = assertDoesNotThrow(() -> secStub.calculate(x));
            double csc = assertDoesNotThrow(() -> cscStub.calculate(x));

            assertEquals(tan, sin / cos, ASSERT_DELTA);
            assertEquals(cot, cos / sin, ASSERT_DELTA);
            assertEquals(sec, 1.0 / cos, ASSERT_DELTA);
            assertEquals(csc, 1.0 / sin, ASSERT_DELTA);
        }
    }

    @Test
    void shouldProvideConsistentLogarithmicStubValuesOnAllPoints() {
        MathModule lnStub = StubModules.lnStub();
        MathModule log2Stub = StubModules.log2Stub();
        MathModule log3Stub = StubModules.log3Stub();
        MathModule log5Stub = StubModules.log5Stub();
        MathModule log10Stub = StubModules.log10Stub();

        for (double x : StubModules.LOG_POINTS) {
            double ln = assertDoesNotThrow(() -> lnStub.calculate(x));
            assertEquals(ln / Math.log(2.0), assertDoesNotThrow(() -> log2Stub.calculate(x)), ASSERT_DELTA);
            assertEquals(ln / Math.log(3.0), assertDoesNotThrow(() -> log3Stub.calculate(x)), ASSERT_DELTA);
            assertEquals(ln / Math.log(5.0), assertDoesNotThrow(() -> log5Stub.calculate(x)), ASSERT_DELTA);
            assertEquals(ln / Math.log(10.0), assertDoesNotThrow(() -> log10Stub.calculate(x)), ASSERT_DELTA);
        }
    }

    @Test
    void shouldProvideBranchStubValuesForEveryConfiguredPoint() {
        MathModule trigBranchStub = StubModules.trigBranchStub();
        MathModule logBranchStub = StubModules.logBranchStub();

        for (double x : StubModules.TRIG_BRANCH_POINTS) {
            assertDoesNotThrow(() -> trigBranchStub.calculate(x));
        }

        for (double x : StubModules.LOG_POINTS) {
            assertDoesNotThrow(() -> logBranchStub.calculate(x));
        }
    }
}
