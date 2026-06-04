package trig;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class CosTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Cos cos = new Cos(new Sin(1.0E-12, 10_000));

    @ParameterizedTest
    @CsvSource({
        "0.0",
        "0.5235987755982988",
        "-0.5235987755982988",
        "1.5707963267948966",
        "3.141592653589793"
    })
    void shouldApproximateCosAccurately(double x) {
        assertEquals(Math.cos(x), cos.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldRejectNullSin() {
        assertThrows(IllegalArgumentException.class, () -> new Cos(null));
    }

    @Test
    void shouldReturnNaNForNonFiniteX() {
        assertTrue(Double.isNaN(cos.calculate(Double.NaN)));
        assertTrue(Double.isNaN(cos.calculate(Double.POSITIVE_INFINITY)));
        assertTrue(Double.isNaN(cos.calculate(Double.NEGATIVE_INFINITY)));
    }
}