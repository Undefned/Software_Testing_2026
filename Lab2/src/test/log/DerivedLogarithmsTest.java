package lab2.log;

import lab2.common.MathModule;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class DerivedLogarithmsTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    private final MathModule ln = new Ln(1.0E-12, 10_000);
    private final MathModule log2 = new Log2(ln);
    private final MathModule log3 = new Log3(ln);
    private final MathModule log5 = new Log5(ln);
    private final MathModule log10 = new Log10(ln);

    @ParameterizedTest
    @CsvSource({
        "0.5",
        "1.0",
        "2.0",
        "5.0",
        "10.0"
    })
    void shouldApproximateLog2(double x) {
        assertEquals(Math.log(x) / Math.log(2.0), log2.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @CsvSource({
        "0.5",
        "1.0",
        "2.0",
        "5.0",
        "10.0"
    })
    void shouldApproximateLog3(double x) {
        assertEquals(Math.log(x) / Math.log(3.0), log3.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @CsvSource({
        "0.5",
        "1.0",
        "2.0",
        "5.0",
        "10.0"
    })
    void shouldApproximateLog5(double x) {
        assertEquals(Math.log(x) / Math.log(5.0), log5.calculate(x), ASSERT_DELTA);
    }

    @ParameterizedTest
    @CsvSource({
        "0.5",
        "1.0",
        "2.0",
        "5.0",
        "10.0"
    })
    void shouldApproximateLog10(double x) {
        assertEquals(Math.log10(x), log10.calculate(x), ASSERT_DELTA);
    }

    @Test
    void shouldRejectInvalidLogarithmArguments() {
        assertThrows(IllegalArgumentException.class, () -> log2.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> log3.calculate(-1.0));
        assertThrows(IllegalArgumentException.class, () -> log5.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> log10.calculate(-10.0));
    }

    @Test
    void shouldRejectNullDependencies() {
        assertThrows(IllegalArgumentException.class, () -> new Log2(null));
        assertThrows(IllegalArgumentException.class, () -> new Log3(null));
        assertThrows(IllegalArgumentException.class, () -> new Log5(null));
        assertThrows(IllegalArgumentException.class, () -> new Log10(null));
    }
}
