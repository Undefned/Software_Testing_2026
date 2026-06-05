package trig;

import common.MathModule;

/**
 * Вычисляет функцию синуса с помощью разложения в ряд Тейлора.
 */
public class Sin implements MathModule {
    private static final double DEFAULT_EPSILON = 1.0E-6;
    private static final int DEFAULT_MAX_ITERATIONS = 10_000;
    private static final double TWO_PI = 2.0 * Math.PI;

    private final double epsilon;
    private final int maxIterations;

    public Sin() {
        this(DEFAULT_EPSILON, DEFAULT_MAX_ITERATIONS);
    }

    public Sin(double epsilon, int maxIterations) {
        if (!Double.isFinite(epsilon) || epsilon <= 0.0) {
            throw new IllegalArgumentException("epsilon must be a positive finite number");
        }
        if (maxIterations <= 0) {
            throw new IllegalArgumentException("maxIterations must be positive");
        }
        this.epsilon = epsilon;
        this.maxIterations = maxIterations;
    }

    @Override
    public double calculate(double x) {
        if (Double.isNaN(x) || Double.isInfinite(x)) {
            return Double.NaN;
        }

        double normalizedX = normalize(x);
        double term = normalizedX;
        double sum = normalizedX;

        if (Math.abs(normalizedX) <= epsilon) {
            return normalizedX;
        }

        for (int iteration = 1; iteration <= maxIterations; iteration++) {
            double denominator = (2.0 * iteration) * (2.0 * iteration + 1.0);
            term *= -normalizedX * normalizedX / denominator;
            sum += term;

            if (Math.abs(term) <= epsilon) {
                return sum;
            }
        }

        throw new IllegalStateException("Taylor series did not converge within maxIterations");
    }

    private double normalize(double x) {
        double normalized = x % TWO_PI;

        if (normalized > Math.PI) {
            normalized -= TWO_PI;
        } else if (normalized < -Math.PI) {
            normalized += TWO_PI;
        }

        if (normalized > Math.PI / 2.0) {
            return Math.PI - normalized;
        }
        if (normalized < -Math.PI / 2.0) {
            return -Math.PI - normalized;
        }

        return normalized;
    }
}
