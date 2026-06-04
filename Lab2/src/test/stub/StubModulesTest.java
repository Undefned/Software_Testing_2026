package stub;

import common.MathModule;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.stream.Stream;

// Проверяет, что заглушки согласованы
class StubModulesTest {
    private static final double ASSERT_DELTA = 1.0E-9;

    private static Stream<Double> provideLogPoints() {
        return java.util.Arrays.stream(StubModules.LOG_POINTS).boxed();
    }

    private static Stream<Double> provideTrigPoints() {
        return java.util.Arrays.stream(StubModules.TRIG_BRANCH_POINTS).boxed();
    }

    @ParameterizedTest
    @MethodSource("provideLogPoints")
    void shouldProvideConsistentLogarithmicStubValues_Log2(double x) {
        MathModule lnStub = StubModules.lnStub();
        MathModule log2Stub = StubModules.log2Stub();
        
        double ln = lnStub.calculate(x);
        assertEquals(ln / Math.log(2.0), log2Stub.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @MethodSource("provideLogPoints")
    void shouldProvideConsistentLogarithmicStubValues_Log3(double x) {
        MathModule lnStub = StubModules.lnStub();
        MathModule log3Stub = StubModules.log3Stub();
        
        double ln = lnStub.calculate(x);
        assertEquals(ln / Math.log(3.0), log3Stub.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @MethodSource("provideTrigPoints")
    void shouldProvideTrigBranchStubValuesForEveryConfiguredPoint(double x) {
        MathModule trigBranchStub = StubModules.trigBranchStub();
        assertDoesNotThrow(() -> trigBranchStub.calculate(x));
    }

    @ParameterizedTest
    @MethodSource("provideLogPoints")
    void shouldProvideLogBranchStubValuesForEveryConfiguredPoint(double x) {
        MathModule logBranchStub = StubModules.logBranchStub();
        assertDoesNotThrow(() -> logBranchStub.calculate(x));
    }
}