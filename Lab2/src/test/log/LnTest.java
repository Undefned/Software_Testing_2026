package log;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class LnTest {
    private static final double EPSILON = 1.0E-12;
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Ln ln = new Ln(EPSILON, 10_000);

    @ParameterizedTest
    @CsvSource({
        "1.0", "2.718281828459045", "0.5", "2.0", "10.0"
    })
    void shouldApproximateLnAccurately(double x) {
        assertEquals(Math.log(x), ln.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldRejectNonPositiveArguments() {
        assertThrows(IllegalArgumentException.class, () -> ln.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> ln.calculate(-1.0));
        assertThrows(IllegalArgumentException.class, () -> ln.calculate(-10.0));
    }

    @Test
    void shouldRejectInvalidConstructorArguments() {
        assertThrows(IllegalArgumentException.class, () -> new Ln(0.0, 10));
        assertThrows(IllegalArgumentException.class, () -> new Ln(-1.0E-6, 10));
        assertThrows(IllegalArgumentException.class, () -> new Ln(Double.NaN, 10));
        assertThrows(IllegalArgumentException.class, () -> new Ln(Double.POSITIVE_INFINITY, 10));
        assertThrows(IllegalArgumentException.class, () -> new Ln(1.0E-12, 0));
        assertThrows(IllegalArgumentException.class, () -> new Ln(1.0E-12, -1));
    }

    @Test
    void shouldHandleSpecialDoubleValues() {
        assertTrue(Double.isNaN(ln.calculate(Double.NaN)));
        assertEquals(Double.POSITIVE_INFINITY, ln.calculate(Double.POSITIVE_INFINITY));
    }

    @Test
    void shouldNormalizeDownWhenValueIsAboveUpperBound() {
        double x = 10.0;

        assertEquals(Math.log(x), ln.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldNormalizeUpWhenValueIsBelowLowerBound() {
        double x = 0.1;

        assertEquals(Math.log(x), ln.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldThrowWhenSeriesDoesNotConvergeWithinMaxIterations() {
        Ln nonConvergingLn = new Ln(1.0E-30, 1);

        assertThrows(IllegalStateException.class, () -> nonConvergingLn.calculate(1.2));
    }
}
