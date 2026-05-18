package lab2.log;

import lab2.common.MathModule;

/**
 * Вычисляет натуральный логарифм только с помощью разложения в ряд.
 */
public class Ln implements MathModule {
    private static final double DEFAULT_EPSILON = 1.0E-12;
    private static final int DEFAULT_MAX_ITERATIONS = 10_000;
    private static final double LOWER_NORMALIZATION_BOUND = 0.75;
    private static final double UPPER_NORMALIZATION_BOUND = 1.5;
    private static final double LN_2 = computeLn2();

    private final double epsilon;
    private final int maxIterations;

    /**
     * Создает модуль натурального логарифма с настройками точности по умолчанию.
     */
    public Ln() {
        this(DEFAULT_EPSILON, DEFAULT_MAX_ITERATIONS);
    }

    /**
     * Создает модуль натурального логарифма с пользовательскими настройками точности.
     *
     * @param epsilon порог сходимости для следующего члена ряда
     * @param maxIterations максимальное число итераций ряда
     */
    public Ln(double epsilon, int maxIterations) {
        if (!Double.isFinite(epsilon) || epsilon <= 0.0) {
            throw new IllegalArgumentException("epsilon must be a positive finite number");
        }
        if (maxIterations <= 0) {
            throw new IllegalArgumentException("maxIterations must be positive");
        }
        this.epsilon = epsilon;
        this.maxIterations = maxIterations;
    }

    /**
     * Вычисляет {@code ln(x)} с помощью ряда на основе функции atanh.
     *
     * @param x положительный аргумент
     * @return приближенное значение натурального логарифма
     */
    @Override
    public double calculate(double x) {
        if (Double.isNaN(x)) {
            return Double.NaN;
        }
        if (x <= 0.0) {
            throw new IllegalArgumentException("ln is defined only for positive arguments");
        }
        if (Double.isInfinite(x)) {
            return Double.POSITIVE_INFINITY;
        }

        double normalized = x;
        int powerOfTwo = 0;

        while (normalized > UPPER_NORMALIZATION_BOUND) {
            normalized /= 2.0;
            powerOfTwo++;
        }

        while (normalized < LOWER_NORMALIZATION_BOUND) {
            normalized *= 2.0;
            powerOfTwo--;
        }

        return powerOfTwo * LN_2 + computeSeries(normalized, epsilon, maxIterations);
    }

    private static double computeLn2() {
        return computeSeries(2.0, 1.0E-16, 100_000);
    }

    private static double computeSeries(double x, double epsilon, int maxIterations) {
        double y = (x - 1.0) / (x + 1.0);
        double ySquared = y * y;
        double power = y;
        double sum = 0.0;

        for (int iteration = 0; iteration < maxIterations; iteration++) {
            double term = power / (2 * iteration + 1);
            sum += term;

            if (Math.abs(term) <= epsilon / 2.0) {
                return 2.0 * sum;
            }

            power *= ySquared;
        }

        throw new IllegalStateException("Logarithm series did not converge within maxIterations");
    }
}
