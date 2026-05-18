package lab2.trig;

import lab2.common.MathModule;

/**
 * Вычисляет функцию косинуса через модуль синуса.
 */
public class Cos implements MathModule {
    private final MathModule sin;

    /**
     * Создает модуль косинуса на основе зависимости от синуса.
     *
     * @param sin модуль синуса, используемый для вычисления косинуса
     */
    public Cos(MathModule sin) {
        if (sin == null) {
            throw new IllegalArgumentException("sin module must not be null");
        }
        this.sin = sin;
    }

    /**
     * Вычисляет {@code cos(x)} как {@code sin(pi / 2 - x)}.
     *
     * @param x аргумент в радианах
     * @return приближенное значение косинуса
     */
    @Override
    public double calculate(double x) {
        return sin.calculate(Math.PI / 2.0 - x);
    }
}
