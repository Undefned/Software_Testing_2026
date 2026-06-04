package trig;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class CotTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Cot cot = new Cot(
        new Cos(new Sin(1.0E-12, 10_000)),
        new Sin(1.0E-12, 10_000)
    );

    @ParameterizedTest
    @CsvSource({
        "0.5235987755982988",
        "-0.5235987755982988",
        "0.7853981633974483",
        "1.0471975511965976"
    })
    void shouldApproximateCotAccurately(double x) {
        assertEquals(1.0 / Math.tan(x), cot.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldThrowWhenSinIsZero() {
        assertThrows(IllegalArgumentException.class, () -> cot.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> cot.calculate(Math.PI));
    }

    @Test
    void shouldReturnNaNForNonFiniteX() {
        assertTrue(Double.isNaN(cot.calculate(Double.NaN)));
        assertTrue(Double.isNaN(cot.calculate(Double.POSITIVE_INFINITY)));
        assertTrue(Double.isNaN(cot.calculate(Double.NEGATIVE_INFINITY)));
    }
}