package trig;

import common.MathModule;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class DerivedTrigFunctionsTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final MathModule sin = new Sin(1.0E-12, 10_000);
    private final MathModule cos = new Cos(sin);
    private final MathModule tan = new Tan(sin, cos);
    private final MathModule cot = new Cot(cos, sin);
    private final MathModule sec = new Sec(cos);
    private final MathModule csc = new Csc(sin);

    @ParameterizedTest
    @CsvSource({
        "0.0",
        "1.0471975511965976",
        "-1.0471975511965976",
        "3.141592653589793"
    })
    void shouldApproximateCos(double x) {
        assertEquals(Math.cos(x), cos.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @CsvSource({
        "0.0",
        "0.7853981633974483",
        "-0.7853981633974483"
    })
    void shouldApproximateTan(double x) {
        assertEquals(Math.tan(x), tan.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @CsvSource({
        "0.7853981633974483",
        "-0.7853981633974483",
        "1.0471975511965976"
    })
    void shouldApproximateCot(double x) {
        assertEquals(1.0 / Math.tan(x), cot.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @CsvSource({
        "0.0",
        "1.0471975511965976",
        "3.141592653589793"
    })
    void shouldApproximateSec(double x) {
        assertEquals(1.0 / Math.cos(x), sec.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @CsvSource({
        "1.5707963267948966",
        "0.5235987755982988",
        "-0.5235987755982988"
    })
    void shouldApproximateCsc(double x) {
        assertEquals(1.0 / Math.sin(x), csc.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldRejectUndefinedTanAndSecPoints() {
        assertThrows(IllegalArgumentException.class, () -> tan.calculate(Math.PI / 2.0));
        assertThrows(IllegalArgumentException.class, () -> tan.calculate(-Math.PI / 2.0));
        assertThrows(IllegalArgumentException.class, () -> sec.calculate(Math.PI / 2.0));
        assertThrows(IllegalArgumentException.class, () -> sec.calculate(-Math.PI / 2.0));
    }

    @Test
    void shouldRejectUndefinedCotAndCscPoints() {
        assertThrows(IllegalArgumentException.class, () -> cot.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> cot.calculate(Math.PI));
        assertThrows(IllegalArgumentException.class, () -> csc.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> csc.calculate(Math.PI));
    }

    @Test
    void shouldRejectNullDependencies() {
        assertThrows(IllegalArgumentException.class, () -> new Cos(null));
        assertThrows(IllegalArgumentException.class, () -> new Tan(null, cos));
        assertThrows(IllegalArgumentException.class, () -> new Tan(sin, null));
        assertThrows(IllegalArgumentException.class, () -> new Cot(null, sin));
        assertThrows(IllegalArgumentException.class, () -> new Cot(cos, null));
        assertThrows(IllegalArgumentException.class, () -> new Sec(null));
        assertThrows(IllegalArgumentException.class, () -> new Csc(null));
    }
}
