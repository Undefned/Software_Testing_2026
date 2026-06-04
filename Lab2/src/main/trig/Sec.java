package trig;

import common.MathModule;

/**
 * Вычисляет функцию секанса как величину, обратную косинусу.
 */
public class Sec implements MathModule {
    private static final double ZERO_THRESHOLD = 1.0E-12;

    private final MathModule cos;

    public Sec(MathModule cos) {
        if (cos == null) {
            throw new IllegalArgumentException("cos module must not be null");
        }
        this.cos = cos;
    }

    @Override
    public double calculate(double x) {
        double denominator = cos.calculate(x);
        if (Math.abs(denominator) <= ZERO_THRESHOLD) {
            throw new IllegalArgumentException("sec is undefined when cos(x) = 0");
        }
        return 1.0 / denominator;
    }
}
