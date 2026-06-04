package trig;

import common.MathModule;

/**
 * Вычисляет функцию котангенса как отношение косинуса к синусу.
 */
public class Cot implements MathModule {
    private static final double ZERO_THRESHOLD = 1.0E-12;

    private final MathModule cos;
    private final MathModule sin;

    public Cot(MathModule cos, MathModule sin) {
        if (cos == null) {
            throw new IllegalArgumentException("cos module must not be null");
        }
        if (sin == null) {
            throw new IllegalArgumentException("sin module must not be null");
        }
        this.cos = cos;
        this.sin = sin;
    }


    @Override
    public double calculate(double x) {
        double denominator = sin.calculate(x);
        if (Math.abs(denominator) <= ZERO_THRESHOLD) {
            throw new IllegalArgumentException("cot is undefined when sin(x) = 0");
        }
        return cos.calculate(x) / denominator;
    }
}
