package lab2.system;

import lab2.common.MathModule;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class TrigBranchTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    @Test
    void shouldComputeTrigBranchFromDependencies() {
        MathModule sin = x -> 2.0;
        MathModule cos = x -> 3.0;
        MathModule tan = x -> 5.0;
        MathModule cot = x -> 7.0;
        MathModule sec = x -> 11.0;
        MathModule csc = x -> 13.0;

        TrigBranch trigBranch = new TrigBranch(sin, cos, tan, cot, sec, csc);

        double expectedPart1 = (Math.pow(5.0, 3) - 13.0) * Math.pow(5.0, 3);
        double expectedPart2 = (11.0 + 5.0) + 2.0;
        double expectedDivision1 = (expectedPart1 - expectedPart2) / 3.0;
        double expectedDivision2 = expectedDivision1 / (13.0 + 13.0);
        double expectedDivision3 = expectedDivision2 / (13.0 / 2.0);
        double expectedMultiplied = expectedDivision3 * (11.0 * Math.pow(3.0, 2));
        double expectedAdded = expectedMultiplied + ((11.0 / 7.0) * 5.0);
        double expectedDivision4 = expectedAdded / (13.0 + (2.0 * Math.pow(5.0, 3)));
        double expected = Math.pow(expectedDivision4 - 13.0, 3);

        assertEquals(expected, trigBranch.calculate(-1.0), ASSERT_DELTA);
    }

    @Test
    void shouldRejectPositiveArgument() {
        TrigBranch trigBranch = new TrigBranch(x -> 1.0, x -> 1.0, x -> 1.0, x -> 1.0, x -> 1.0, x -> 1.0);

        assertThrows(IllegalArgumentException.class, () -> trigBranch.calculate(0.1));
    }

    @Test
    void shouldRejectNonFiniteArgument() {
        TrigBranch trigBranch = new TrigBranch(x -> 1.0, x -> 1.0, x -> 1.0, x -> 1.0, x -> 1.0, x -> 1.0);

        assertThrows(IllegalArgumentException.class, () -> trigBranch.calculate(Double.NaN));
        assertThrows(IllegalArgumentException.class, () -> trigBranch.calculate(Double.NEGATIVE_INFINITY));
    }

    @Test
    void shouldRejectDivisionByZeroInsideFormula() {
        TrigBranch trigBranch = new TrigBranch(
                x -> 2.0,
                x -> 0.0,
                x -> 5.0,
                x -> 7.0,
                x -> 11.0,
                x -> 13.0
        );

        assertThrows(IllegalArgumentException.class, () -> trigBranch.calculate(-1.0));
    }

    @Test
    void shouldRejectNullDependencies() {
        MathModule stub = x -> 1.0;

        assertThrows(IllegalArgumentException.class, () -> new TrigBranch(null, stub, stub, stub, stub, stub));
        assertThrows(IllegalArgumentException.class, () -> new TrigBranch(stub, null, stub, stub, stub, stub));
        assertThrows(IllegalArgumentException.class, () -> new TrigBranch(stub, stub, null, stub, stub, stub));
        assertThrows(IllegalArgumentException.class, () -> new TrigBranch(stub, stub, stub, null, stub, stub));
        assertThrows(IllegalArgumentException.class, () -> new TrigBranch(stub, stub, stub, stub, null, stub));
        assertThrows(IllegalArgumentException.class, () -> new TrigBranch(stub, stub, stub, stub, stub, null));
    }
}
