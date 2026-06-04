package log;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class Log3Test {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Log3 log3 = new Log3(new Ln(1.0E-12, 10_000));

    @ParameterizedTest
    @CsvSource({
        "1.0, 0.0",
        "3.0, 1.0",
        "9.0, 2.0",
        "27.0, 3.0"
    })
    void shouldApproximateLog3Accurately(double x, double expected) {
        assertEquals(expected, log3.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldRejectNonPositiveArguments() {
        assertThrows(IllegalArgumentException.class, () -> log3.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> log3.calculate(-1.0));
    }

    @Test
    void shouldRejectNullLn() {
        assertThrows(IllegalArgumentException.class, () -> new Log3(null));
    }

    @Test
    void shouldHandleSpecialDoubleValues() {
        assertTrue(Double.isNaN(log3.calculate(Double.NaN)));
        assertEquals(Double.POSITIVE_INFINITY, log3.calculate(Double.POSITIVE_INFINITY));
    }
}