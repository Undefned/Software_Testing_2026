package trig;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;


class TanTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final Tan tan = new Tan(
        new Sin(1.0E-12, 10_000),
        new Cos(new Sin(1.0E-12, 10_000))
    );

    @ParameterizedTest
    @CsvSource({
        "0.0",
        "0.5235987755982988",
        "-0.5235987755982988",
        "0.7853981633974483",
        "3.141592653589793"
    })
    void shouldApproximateTanAccurately(double x) {
        assertEquals(Math.tan(x), tan.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldThrowWhenCosIsZero() {
        assertThrows(IllegalArgumentException.class, () -> tan.calculate(Math.PI / 2.0));
        assertThrows(IllegalArgumentException.class, () -> tan.calculate(-Math.PI / 2.0));
    }

    @Test
    void shouldReturnNaNForNonFiniteX() {
        assertTrue(Double.isNaN(tan.calculate(Double.NaN)));
        assertTrue(Double.isNaN(tan.calculate(Double.POSITIVE_INFINITY)));
        assertTrue(Double.isNaN(tan.calculate(Double.NEGATIVE_INFINITY)));
    }
}