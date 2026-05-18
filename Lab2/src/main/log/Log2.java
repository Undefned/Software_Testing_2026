package lab2.log;

import lab2.common.MathModule;

/**
 * Вычисляет логарифм по основанию 2 через натуральный логарифм.
 */
public class Log2 implements MathModule {
    private static final double BASE = 2.0;

    private final MathModule ln;
    private final double lnBase;

    /**
     * Создает модуль логарифма по основанию 2 из зависимости натурального логарифма.
     *
     * @param ln модуль натурального логарифма
     */
    public Log2(MathModule ln) {
        if (ln == null) {
            throw new IllegalArgumentException("ln module must not be null");
        }
        this.ln = ln;
        this.lnBase = ln.calculate(BASE);
    }

    /**
     * Вычисляет {@code log2(x)} как {@code ln(x) / ln(2)}.
     *
     * @param x положительный аргумент
     * @return приближенное значение логарифма по основанию 2
     */
    @Override
    public double calculate(double x) {
        return ln.calculate(x) / lnBase;
    }
}
