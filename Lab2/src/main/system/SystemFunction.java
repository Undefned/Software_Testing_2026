package system;

import common.MathModule;

/**
 * Перенаправляет вычисление в тригонометрическую или логарифмическую ветвь.
 */
public class SystemFunction implements MathModule {
    private final MathModule trigBranch;
    private final MathModule logBranch;

    /**
     * Создает системную функцию из двух зависимостей-ветвей.
     *
     * @param trigBranch ветвь для {@code x <= 0}
     * @param logBranch ветвь для {@code x > 0}
     */
    public SystemFunction(MathModule trigBranch, MathModule logBranch) {
        if (trigBranch == null || logBranch == null) {
            throw new IllegalArgumentException("system branches must not be null");
        }
        this.trigBranch = trigBranch;
        this.logBranch = logBranch;
    }

    /**
     * Вычисляет полную системную функцию.
     *
     * @param x аргумент системной функции
     * @return значение выбранной ветви
     */
    @Override
    public double calculate(double x) {
        if (!Double.isFinite(x)) {
            throw new IllegalArgumentException("x must be finite");
        }
        if (x <= 0.0) {
            return trigBranch.calculate(x);
        }
        return logBranch.calculate(x);
    }
}
