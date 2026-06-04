package system;

import common.MathModule;
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

        double S = 2.0, C = 3.0, T = 5.0, Ct = 7.0, Sc = 11.0, Csc = 13.0;

        double secDivSin = Sc / S;
        double partA3 = Math.pow(Math.pow(secDivSin, 3) - Ct, 2);
        double partA5 = (partA3 / (S + S)) * Csc;
        double partA10 = ((partA5 + S * C) * Ct + Csc) * (Csc + Ct) + T;
        double A = partA10 / (Math.pow(Ct, 3) / (Sc - Csc));

        double partB4 = Math.pow(Math.pow(Math.pow(C - T, 2) + (Csc + Ct), 3), 2);
        double B = partB4 / Ct / (Csc - T) - T / (Sc * (Sc * (S * S * C)));

        assertEquals(A - B, trigBranch.calculate(-1.0), ASSERT_DELTA);
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
                x -> 2.0, x -> 0.0, x -> 5.0, x -> 7.0, x -> 11.0, x -> 13.0 );

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