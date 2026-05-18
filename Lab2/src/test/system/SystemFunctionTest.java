package lab2.system;

import lab2.common.MathModule;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class SystemFunctionTest {
    @Test
    void shouldUseTrigBranchForNonPositiveArguments() {
        double[] captured = {Double.NaN};
        MathModule trigBranch = x -> {
            captured[0] = x;
            return -123.0;
        };
        MathModule logBranch = x -> 999.0;

        SystemFunction systemFunction = new SystemFunction(trigBranch, logBranch);

        assertEquals(-123.0, systemFunction.calculate(-2.0));
        assertEquals(-2.0, captured[0]);
        assertEquals(-123.0, systemFunction.calculate(0.0));
    }

    @Test
    void shouldUseLogBranchForPositiveArguments() {
        double[] captured = {Double.NaN};
        MathModule trigBranch = x -> -999.0;
        MathModule logBranch = x -> {
            captured[0] = x;
            return 456.0;
        };

        SystemFunction systemFunction = new SystemFunction(trigBranch, logBranch);

        assertEquals(456.0, systemFunction.calculate(3.0));
        assertEquals(3.0, captured[0]);
    }

    @Test
    void shouldPropagateBranchErrors() {
        MathModule trigBranch = x -> {
            throw new IllegalArgumentException("bad trig point");
        };
        MathModule logBranch = x -> {
            throw new IllegalArgumentException("bad log point");
        };

        SystemFunction systemFunction = new SystemFunction(trigBranch, logBranch);

        assertThrows(IllegalArgumentException.class, () -> systemFunction.calculate(-1.0));
        assertThrows(IllegalArgumentException.class, () -> systemFunction.calculate(1.0));
    }

    @Test
    void shouldRejectInvalidArgumentsAndDependencies() {
        MathModule stub = x -> 1.0;

        assertThrows(IllegalArgumentException.class, () -> new SystemFunction(null, stub));
        assertThrows(IllegalArgumentException.class, () -> new SystemFunction(stub, null));

        SystemFunction systemFunction = new SystemFunction(stub, stub);
        assertThrows(IllegalArgumentException.class, () -> systemFunction.calculate(Double.NaN));
        assertThrows(IllegalArgumentException.class, () -> systemFunction.calculate(Double.POSITIVE_INFINITY));
    }
}
