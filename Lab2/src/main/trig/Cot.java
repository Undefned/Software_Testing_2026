package lab2.trig;

import lab2.common.MathModule;

/**
 * Вычисляет функцию котангенса как отношение косинуса к синусу.
 */
public class Cot implements MathModule {
    private static final double ZERO_THRESHOLD = 1.0E-12;

    private final MathModule cos;
    private final MathModule sin;

    /**
     * Создает модуль котангенса из зависимостей косинуса и синуса.
     *
     * @param cos модуль косинуса
     * @param sin модуль синуса
     */
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

    /**
     * Вычисляет {@code cot(x)} как {@code cos(x) / sin(x)}.
     *
     * @param x аргумент в радианах
     * @return приближенное значение котангенса
     */
    @Override
    public double calculate(double x) {
        double denominator = sin.calculate(x);
        if (Math.abs(denominator) <= ZERO_THRESHOLD) {
            throw new IllegalArgumentException("cot is undefined when sin(x) = 0");
        }
        return cos.calculate(x) / denominator;
    }
}
