import java.io.*;
import java.util.*;

public class CsvStubGenerator {

    public static void main(String[] args) throws IOException {
        // Пишем в текущую папку (рядом с файлом)
        String outputDir = "../../src/main/resources/stub/";

        File dir = new File(outputDir);
        if (!dir.exists()) dir.mkdirs();

        // 1. trig-functions.csv
        try (PrintWriter w = new PrintWriter(outputDir + "trig-functions.csv")) {
            w.println("x;sin;cos;tan;cot;sec;csc");
            for (double x : TRIG_POINTS) {
                double S = Math.sin(x);
                double C = Math.cos(x);
                double T = Math.tan(x);
                double Ct = Math.abs(T) < 1e-12 ? Double.POSITIVE_INFINITY : 1.0 / T;
                double Sc = Math.abs(C) < 1e-12 ? Double.POSITIVE_INFINITY : 1.0 / C;
                double Csc = Math.abs(S) < 1e-12 ? Double.POSITIVE_INFINITY : 1.0 / S;
                w.printf(Locale.US, "%.10f;%.10f;%.10f;%.10f;%.10f;%.10f;%.10f\n",
                        x, S, C, T, Ct, Sc, Csc);
            }
        }

        // 2. trig-branch.csv
        try (PrintWriter w = new PrintWriter(outputDir + "trig-branch.csv")) {
            w.println("x;trig_branch");
            for (double x : TRIG_POINTS) {
                double val = trigBranch(x);
                if (Double.isNaN(val) || Double.isInfinite(val)) {
                    w.printf(Locale.US, "%.10f;NaN\n", x);
                } else {
                    w.printf(Locale.US, "%.10f;%.10f\n", x, val);
                }
            }
        }

        // 3. log-functions.csv
        try (PrintWriter w = new PrintWriter(outputDir + "log-functions.csv")) {
            w.println("x;ln;log2;log3;log5;log10");
            for (double x : LOG_POINTS) {
                double lnx = Math.log(x);
                double log2x = lnx / Math.log(2);
                double log3x = lnx / Math.log(3);
                double log5x = lnx / Math.log(5);
                double log10x = Math.log10(x);
                w.printf(Locale.US, "%.10f;%.10f;%.10f;%.10f;%.10f;%.10f\n",
                        x, lnx, log2x, log3x, log5x, log10x);
            }
        }

        // 4. log-branch.csv
        try (PrintWriter w = new PrintWriter(outputDir + "log-branch.csv")) {
            w.println("x;log_branch");
            for (double x : LOG_POINTS) {
                double val = logBranch(x);
                if (Double.isNaN(val) || Double.isInfinite(val)) {
                    w.printf(Locale.US, "%.10f;NaN\n", x);
                } else {
                    w.printf(Locale.US, "%.10f;%.10f\n", x, val);
                }
            }
        }

        System.out.println("CSV файлы созданы в: " + new File(outputDir).getAbsolutePath());
        System.out.println("Тригонометрических точек: " + TRIG_POINTS.length);
        System.out.println("Логарифмических точек: " + LOG_POINTS.length);
    }

    private static double trigBranch(double x) {
        double S = Math.sin(x);
        double C = Math.cos(x);
        double T = Math.tan(x);
        
        // Защита от деления на ноль
        if (Math.abs(S) < 1e-12) return Double.NaN;
        if (Math.abs(T) < 1e-12) return Double.NaN;
        
        double Ct = 1.0 / T;
        double Sc = 1.0 / C;
        double Csc = 1.0 / S;

        // Часть A
        double secDivSin = Sc / S;
        double partA1 = Math.pow(secDivSin, 3);
        double partA2 = partA1 - Ct;
        double partA3 = Math.pow(partA2, 2);
        double partA4 = partA3 / (S + S);
        double partA5 = partA4 * Csc;
        double partA6 = partA5 + (S * C);
        double partA7 = partA6 * Ct;
        double partA8 = partA7 + Csc;
        double partA9 = partA8 * (Csc + Ct);
        double partA10 = partA9 + T;
        double denominatorA = Math.pow(Ct, 3) / (Sc - Csc);
        double A = partA10 / denominatorA;

        // Часть B
        double cosMinusTan = C - T;
        double partB1 = Math.pow(cosMinusTan, 2);
        double partB2 = partB1 + (Csc + Ct);
        double partB3 = Math.pow(partB2, 3);
        double partB4 = Math.pow(partB3, 2);
        double partB5 = partB4 / Ct;
        double partB6 = partB5 / (Csc - T);
        double sinSquared = S * S;
        double tanDivThat = T / (Sc * (Sc * (sinSquared * C)));
        double B = partB6 - tanDivThat;

        return A - B;
    }

    private static double logBranch(double x) {
        double lnx = Math.log(x);
        double log2x = Math.log(x) / Math.log(2);
        double log3x = Math.log(x) / Math.log(3);

        double first = (lnx * log2x) / log2x;
        double second = first * log2x;
        double third = (log2x * log2x) + log2x;
        return (second + third) / log3x;
    }

    // ===== ТРИГОНОМЕТРИЧЕСКИЕ ТОЧКИ (x ≤ 0) =====
    private static final double[] TRIG_POINTS = {
        // От -2π до 0 с шагом π/12 (~15°)
        -6.283185307179586, -5.759586531581287, -5.235987755982989, -4.71238898038469,
        -4.1887902047863905, -3.665191429188092, -3.141592653589793, -2.6179938779914944,
        -2.0943951023931953, -1.5707963267948966, -1.0471975511965976, -0.5235987755982988,
        // Дополнительные точки
        -6.0, -5.5, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5,
        // Приближение к нулю
        -0.1, -0.05, -0.01, -0.005, -0.001, -0.0001,
        // Граница
        0.0
    };

    // ===== ЛОГАРИФМИЧЕСКИЕ ТОЧКИ (x > 0) =====
    private static final double[] LOG_POINTS = {
        0.001, 0.005, 0.01, 0.02, 0.05, 0.07, 0.1, 0.15, 0.2, 0.3, 0.4, 0.5,
        0.6, 0.7, 0.8, 0.9, 0.95, 0.99, 1.0,
        1.01, 1.05, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,
        2.2, 2.5, 2.7, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0,
        15.0, 20.0, 30.0, 50.0, 70.0, 100.0
    };
}