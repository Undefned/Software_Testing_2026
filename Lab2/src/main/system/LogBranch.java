package lab2.system;

import lab2.common.MathModule;

public class LogBranch implements MathModule {
    private final MathModule ln;
    private final MathModule log2;
    private final MathModule log3;

    public LogBranch(MathModule ln, MathModule log2, MathModule log3) {
        if (ln == null || log2 == null || log3 == null) {
            throw new IllegalArgumentException("logarithmic dependencies must not be null");
        }
        this.ln = ln;
        this.log2 = log2;
        this.log3 = log3;
    }

    @Override
    public double calculate(double x) {
        if (!Double.isFinite(x)) {
            throw new IllegalArgumentException("x must be finite");
        }
        if (x <= 0.0) {
            throw new IllegalArgumentException("LogBranch is defined only for x > 0");
        }

        double lnx = ln.calculate(x);
        double log2x = log2.calculate(x);
        double log3x = log3.calculate(x);

        // ((((ln(x) * log2(x)) / log2(x)) * log2(x)) + ((log2(x)^2) + log2(x))) / log3(x)
        double first = (lnx * log2x) / log2x;   // = ln(x)
        double second = first * log2x;           // = ln(x) * log2(x)
        double third = (log2x * log2x) + log2x;
        double numerator = second + third;

        return numerator / log3x;
    }
}