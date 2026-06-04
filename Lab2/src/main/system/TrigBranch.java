package system;

import common.MathModule;

/**
 * Вычисляет тригонометрическую ветвь системы для {@code x <= 0}.
 * Формула: A - B, где A и B — два больших выражения.
 */
public class TrigBranch implements MathModule {
    private static final double ZERO_THRESHOLD = 1.0E-12;

    private final MathModule sin;
    private final MathModule cos;
    private final MathModule tan;
    private final MathModule cot;
    private final MathModule sec;
    private final MathModule csc;

    public TrigBranch(MathModule sin, MathModule cos, MathModule tan, 
        MathModule cot, MathModule sec, MathModule csc) {
        if (sin == null || cos == null || tan == null || cot == null || sec == null || csc == null) {
            throw new IllegalArgumentException("trigonometric dependencies must not be null");
        }
        this.sin = sin;
        this.cos = cos;
        this.tan = tan;
        this.cot = cot;
        this.sec = sec;
        this.csc = csc;
    }

    @Override
    public double calculate(double x) {
        if (!Double.isFinite(x)) {
            throw new IllegalArgumentException("x must be finite");
        }
        if (x > 0.0) {
            throw new IllegalArgumentException("TrigBranch is defined only for x <= 0");
        }

        double Sin = sin.calculate(x);
        double Cos = cos.calculate(x);
        double Tan = tan.calculate(x);
        double Cot = cot.calculate(x);
        double Sec = sec.calculate(x);
        double Csc = csc.calculate(x);

        // Проверки на нули в знаменателях
        if (Math.abs(Sin) <= ZERO_THRESHOLD) {
            throw new IllegalArgumentException("sin(x) is zero -> division by zero");
        }
        if (Math.abs(Sec - Csc) <= ZERO_THRESHOLD) {
            throw new IllegalArgumentException("sec(x) - csc(x) is zero -> division by zero");
        }
        if (Math.abs(Csc - Tan) <= ZERO_THRESHOLD) {
            throw new IllegalArgumentException("csc(x) - tan(x) is zero -> division by zero");
        }

        // ========== ЧАСТЬ A (числитель первой дроби, потом деление) ==========
        // ((sec/sin)^3 - cot)^2
        double secDivSin = Sec / Sin;
        double partA1 = Math.pow(secDivSin, 3);      // (sec/sin)^3
        double partA2 = partA1 - Cot;                 // (sec/sin)^3 - cot
        double partA3 = Math.pow(partA2, 2);         // ((sec/sin)^3 - cot)^2

        // деление на (sin+sin)
        double sinPlusSin = Sin + Sin;
        double partA4 = partA3 / sinPlusSin;         // ((...)^2) / (sin+sin)

        // умножение на csc
        double partA5 = partA4 * Csc;                // ... * csc

        // + (sin * cos)
        double partA6 = partA5 + (Sin * Cos);

        // * cot
        double partA7 = partA6 * Cot;

        // + csc
        double partA8 = partA7 + Csc;

        // * (csc + cot)
        double partA9 = partA8 * (Csc + Cot);

        // + tan
        double partA10 = partA9 + Tan;

        // деление на (cot^3 / (sec - csc))
        double cotCube = Math.pow(Cot, 3);
        double secMinusCsc = Sec - Csc;
        double denominatorA = cotCube / secMinusCsc;
        double A = partA10 / denominatorA;

        // ========== ЧАСТЬ B ==========
        // ((cos - tan)^2 + (csc + cot))^3)^2
        double cosMinusTan = Cos - Tan;
        double partB1 = Math.pow(cosMinusTan, 2);     // (cos - tan)^2
        double cscPlusCot = Csc + Cot;
        double partB2 = partB1 + cscPlusCot;          // (cos-tan)^2 + (csc+cot)
        double partB3 = Math.pow(partB2, 3);          // ((...))^3
        double partB4 = Math.pow(partB3, 2);          // ((...)^3)^2 = (...)^6

        // деление на cot
        double partB5 = partB4 / Cot;

        // деление на (csc - tan)
        double partB6 = partB5 / (Csc - Tan);

        // вычитаем (tan / (sec * (sec * (sin^2 * cos))))
        double sinSquared = Sin * Sin;
        double sinSquaredTimesCos = sinSquared * Cos;
        double secTimesSecTimesThat = Sec * (Sec * sinSquaredTimesCos);
        double tanDivThat = Tan / secTimesSecTimesThat;
        double B = partB6 - tanDivThat;

        // ========== РЕЗУЛЬТАТ ==========
        double result = A - B;

        if (!Double.isFinite(result)) {
            throw new IllegalArgumentException("Result is not finite (possible division by zero or overflow)");
        }

        return result;
    }
}