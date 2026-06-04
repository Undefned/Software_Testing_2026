package trig;

import common.MathModule;

/**
 * Вычисляет функцию косеканса как величину, обратную синусу.
 */
public class Csc implements MathModule {
    private static final double ZERO_THRESHOLD = 1.0E-12;

    private final MathModule sin;

    public Csc(MathModule sin) {
        if (sin == null) {
            throw new IllegalArgumentException("sin module must not be null");
        }
        this.sin = sin;
    }

    @Override
    public double calculate(double x) {
        double denominator = sin.calculate(x);
        if (Math.abs(denominator) <= ZERO_THRESHOLD) {
            throw new IllegalArgumentException("csc is undefined when sin(x) = 0");
        }
        return 1.0 / denominator;
    }
}
