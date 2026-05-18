package system;

import common.MathModule;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class LogBranchTest {
    private static final double ASSERT_DELTA = 1.0E-10;

    @Test
    void shouldRejectNonPositiveArgument() {
        LogBranch logBranch = new LogBranch(x -> 1.0, x -> 1.0, x -> 1.0);

        assertThrows(IllegalArgumentException.class, () -> logBranch.calculate(0.0));
        assertThrows(IllegalArgumentException.class, () -> logBranch.calculate(-1.0));
    }

    @Test
    void shouldRejectNonFiniteArgument() {
        LogBranch logBranch = new LogBranch(x -> 1.0, x -> 1.0, x -> 1.0);

        assertThrows(IllegalArgumentException.class, () -> logBranch.calculate(Double.NaN));
        assertThrows(IllegalArgumentException.class, () -> logBranch.calculate(Double.POSITIVE_INFINITY));
    }

    @Test
    void shouldRejectNullDependencies() {
        MathModule stub = x -> 1.0;

        assertThrows(IllegalArgumentException.class, () -> new LogBranch(null, stub, stub));
        assertThrows(IllegalArgumentException.class, () -> new LogBranch(stub, null, stub));
        assertThrows(IllegalArgumentException.class, () -> new LogBranch(stub, stub, null));
    }
}
