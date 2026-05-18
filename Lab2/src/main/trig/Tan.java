package trig;

import common.MathModule;

/**
 * Вычисляет функцию тангенса как отношение синуса к косинусу.
 */
public class Tan implements MathModule {
    private static final double ZERO_THRESHOLD = 1.0E-12;

    private final MathModule sin;
    private final MathModule cos;

    /**
     * Создает модуль тангенса из зависимостей синуса и косинуса.
     *
     * @param sin модуль синуса
     * @param cos модуль косинуса
     */
    public Tan(MathModule sin, MathModule cos) {
        if (sin == null) {
            throw new IllegalArgumentException("sin module must not be null");
        }
        if (cos == null) {
            throw new IllegalArgumentException("cos module must not be null");
        }
        this.sin = sin;
        this.cos = cos;
    }

    /**
     * Вычисляет {@code tan(x)} как {@code sin(x) / cos(x)}.
     *
     * @param x аргумент в радианах
     * @return приближенное значение тангенса
     */
    @Override
    public double calculate(double x) {
        double denominator = cos.calculate(x);
        if (Math.abs(denominator) <= ZERO_THRESHOLD) {
            throw new IllegalArgumentException("tan is undefined when cos(x) = 0");
        }
        return sin.calculate(x) / denominator;
    }
}
