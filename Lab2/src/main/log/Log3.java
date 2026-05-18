package log;

import common.MathModule;

/**
 * Вычисляет логарифм по основанию 3 через натуральный логарифм.
 */
public class Log3 implements MathModule {
    private static final double BASE = 3.0;

    private final MathModule ln;
    private final double lnBase;

    /**
     * Создает модуль логарифма по основанию 3 из зависимости натурального логарифма.
     *
     * @param ln модуль натурального логарифма
     */
    public Log3(MathModule ln) {
        if (ln == null) {
            throw new IllegalArgumentException("ln module must not be null");
        }
        this.ln = ln;
        this.lnBase = ln.calculate(BASE);
    }

    /**
     * Вычисляет {@code log3(x)} как {@code ln(x) / ln(3)}.
     *
     * @param x положительный аргумент
     * @return приближенное значение логарифма по основанию 3
     */
    @Override
    public double calculate(double x) {
        return ln.calculate(x) / lnBase;
    }
}
