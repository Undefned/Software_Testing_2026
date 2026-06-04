package trig;

import common.MathModule;

/**
 * Вычисляет функцию косинуса через синус.
 */
public class Cos implements MathModule {
    private final MathModule sin;

    public Cos(MathModule sin) {
        if (sin == null) {
            throw new IllegalArgumentException("sin module must not be null");
        }
        this.sin = sin;
    }
    
    @Override
    public double calculate(double x) {
        return sin.calculate(Math.PI / 2.0 - x);
    }
}
