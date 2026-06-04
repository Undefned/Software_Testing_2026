package trig;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class CscTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Csc csc = new Csc(new Sin(1.0E-12, 10_000));

    @ParameterizedTest
    @CsvSource({
        "0.5235987755982988",
        "-0.5235987755982988",
        "1.5707963267948966",
    })
    void shouldApproximateCscAccurately(double x) {
        assertEquals(1.0 / Math.sin(x), csc.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldThrowWhenSinIsZero() {
        assertThrows(IllegalArgumentException.class, () -> csc.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> csc.calculate(Math.PI));
        assertThrows(IllegalArgumentException.class, () -> csc.calculate(-Math.PI));
    }

    @Test
    void shouldRejectNullSin() {
        assertThrows(IllegalArgumentException.class, () -> new Csc(null));
    }

    @Test
    void shouldReturnNaNForNonFiniteX() {
        assertTrue(Double.isNaN(csc.calculate(Double.NaN)));
        assertTrue(Double.isNaN(csc.calculate(Double.POSITIVE_INFINITY)));
        assertTrue(Double.isNaN(csc.calculate(Double.NEGATIVE_INFINITY)));
    }
}