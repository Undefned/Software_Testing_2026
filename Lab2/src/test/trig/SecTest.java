package trig;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class SecTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Sec sec = new Sec(new Cos(new Sin(1.0E-12, 10_000)));

    @ParameterizedTest
    @CsvSource({
        "0.0",
        "0.5235987755982988",
        "-0.5235987755982988",
        "1.0471975511965976",
        "3.141592653589793"
    })
    void shouldApproximateSecAccurately(double x) {
        assertEquals(1.0 / Math.cos(x), sec.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldThrowWhenCosIsZero() {
        assertThrows(IllegalArgumentException.class, () -> sec.calculate(Math.PI / 2.0));
        assertThrows(IllegalArgumentException.class, () -> sec.calculate(-Math.PI / 2.0));
        assertThrows(IllegalArgumentException.class, () -> sec.calculate(3.0 * Math.PI / 2.0));
    }

    @Test
    void shouldRejectNullCos() {
        assertThrows(IllegalArgumentException.class, () -> new Sec(null));
    }

    @Test
    void shouldReturnNaNForNonFiniteX() {
        assertTrue(Double.isNaN(sec.calculate(Double.NaN)));
        assertTrue(Double.isNaN(sec.calculate(Double.POSITIVE_INFINITY)));
        assertTrue(Double.isNaN(sec.calculate(Double.NEGATIVE_INFINITY)));
    }
}