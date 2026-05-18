package stub;

import common.MathModule;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;

class StubModulesTest {
    private static final double ASSERT_DELTA = 1.0E-9;

    @Test
    void shouldProvideConsistentLogarithmicStubValuesOnAllPoints() {
        MathModule lnStub = StubModules.lnStub();
        MathModule log2Stub = StubModules.log2Stub();
        MathModule log3Stub = StubModules.log3Stub();


        for (double x : StubModules.LOG_POINTS) {
            double ln = lnStub.calculate(x);
            assertEquals(ln / Math.log(2.0), log2Stub.calculate(x), ASSERT_DELTA);
            assertEquals(ln / Math.log(3.0), log3Stub.calculate(x), ASSERT_DELTA);
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
