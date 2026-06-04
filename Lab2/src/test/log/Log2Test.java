package log;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class Log2Test {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Log2 log2 = new Log2(new Ln(1.0E-12, 10_000));

    @ParameterizedTest
    @CsvSource({
        "0.5, -1.0",
        "1.0, 0.0",
        "2.0, 1.0",
        "4.0, 2.0",
        "8.0, 3.0"
    })
    void shouldApproximateLog2Accurately(double x, double expected) {
        assertEquals(expected, log2.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldRejectNonPositiveArguments() {
        assertThrows(IllegalArgumentException.class, () -> log2.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> log2.calculate(-1.0));
    }

    @Test
    void shouldRejectNullLn() {
        assertThrows(IllegalArgumentException.class, () -> new Log2(null));
    }

    @Test
    void shouldHandleSpecialDoubleValues() {
        assertTrue(Double.isNaN(log2.calculate(Double.NaN)));
        assertEquals(Double.POSITIVE_INFINITY, log2.calculate(Double.POSITIVE_INFINITY));
    }
}