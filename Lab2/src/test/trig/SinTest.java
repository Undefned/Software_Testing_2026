package lab2.trig;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class SinTest {
    private static final double EPSILON = 1.0E-12;
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Sin sin = new Sin(EPSILON, 10_000);

    @ParameterizedTest
    @CsvSource({
        "0.0",
        "0.5235987755982988",
        "-0.5235987755982988",
        "1.5707963267948966",
        "3.141592653589793"
    })
    void shouldApproximateSinAccurately(double x) {
        assertEquals(Math.sin(x), sin.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldRejectInvalidConstructorArguments() {
        assertThrows(IllegalArgumentException.class, () -> new Sin(0.0, 10));
        assertThrows(IllegalArgumentException.class, () -> new Sin(-1.0E-6, 10));
        assertThrows(IllegalArgumentException.class, () -> new Sin(Double.NaN, 10));
        assertThrows(IllegalArgumentException.class, () -> new Sin(Double.POSITIVE_INFINITY, 10));
        assertThrows(IllegalArgumentException.class, () -> new Sin(1.0E-12, 0));
        assertThrows(IllegalArgumentException.class, () -> new Sin(1.0E-12, -1));
    }

    @Test
    void shouldReturnNaNForNonFiniteX() {
        assertTrue(Double.isNaN(sin.calculate(Double.NaN)));
        assertTrue(Double.isNaN(sin.calculate(Double.POSITIVE_INFINITY)));
        assertTrue(Double.isNaN(sin.calculate(Double.NEGATIVE_INFINITY)));
    }

    @Test
    void shouldReturnEarlyWhenAbsNormalizedXIsWithinEpsilon() {
        Sin relaxedSin = new Sin(1.0E-3, 10_000);

        assertEquals(5.0E-4, relaxedSin.calculate(5.0E-4), 0.0);
    }

    @Test
    void shouldNormalizeWhenRemainderIsGreaterThanPi() {
        double x = 3.0 * Math.PI / 2.0;

        assertEquals(Math.sin(x), sin.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldNormalizeWhenRemainderIsLowerThanMinusPi() {
        double x = -3.0 * Math.PI / 2.0;

        assertEquals(Math.sin(x), sin.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldMirrorWhenNormalizedIsGreaterThanHalfPi() {
        double x = 0.75 * Math.PI;

        assertEquals(Math.sin(x), sin.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldMirrorWhenNormalizedIsLowerThanMinusHalfPi() {
        double x = -0.75 * Math.PI;

        assertEquals(Math.sin(x), sin.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldThrowWhenSeriesDoesNotConvergeWithinMaxIterations() {
        Sin nonConvergingSin = new Sin(1.0E-30, 1);

        assertThrows(IllegalStateException.class, () -> nonConvergingSin.calculate(1.0));
    }
}
