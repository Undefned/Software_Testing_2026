import java.io.*;
import java.util.*;

public class CsvStubGenerator {

    public static void main(String[] args) throws IOException {
        String currentDir = System.getProperty("user.dir");
        String outputDir = currentDir + "\\Lab2\\src\\main\\resources\\stub\\";
        System.out.println("директория: " + outputDir);

        // String outputDir = "src/main/resources/stub/";

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
                w.printf(Locale.US, "%.15f;%.15f;%.15f;%.15f;%.15f;%.15f;%.15f\n",
                        x, S, C, T, Ct, Sc, Csc);
            }
        }

        // 2. trig-branch.csv
        try (PrintWriter w = new PrintWriter(outputDir + "trig-branch.csv")) {
            w.println("x;trig_branch");
            for (double x : TRIG_POINTS) {
                double val = trigBranch(x);
                if (Double.isNaN(val) || Double.isInfinite(val)) {
                    w.printf(Locale.US, "%.15f;NaN\n", x);
                } else {
                    w.printf(Locale.US, "%.15f;%.15f\n", x, val);
                }
            }
        }

        // 3. log-functions.csv
        try (PrintWriter w = new PrintWriter(outputDir + "log-functions.csv")) {
            w.println("x;ln;log2;log3");
            for (double x : LOG_POINTS) {
                double lnx = Math.log(x);
                double log2x = lnx / Math.log(2);
                double log3x = lnx / Math.log(3);
                w.printf(Locale.US, "%.15f;%.15f;%.15f;%.15f\n",
                        x, lnx, log2x, log3x);
            }
        }

        // 4. log-branch.csv
        try (PrintWriter w = new PrintWriter(outputDir + "log-branch.csv")) {
            w.println("x;log_branch");
            for (double x : LOG_POINTS) {
                double val = logBranch(x);
                if (Double.isNaN(val) || Double.isInfinite(val)) {
                    w.printf(Locale.US, "%.15f;NaN\n", x);
                } else {
                    w.printf(Locale.US, "%.15f;%.15f\n", x, val);
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
        
        if (Math.abs(S) < 1e-12) return Double.NaN;
        if (Math.abs(T) < 1e-12) return Double.NaN;
        
        double Ct = 1.0 / T;
        double Sc = 1.0 / C;
        double Csc = 1.0 / S;

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
        double log2x = lnx / Math.log(2);
        double log3x = lnx / Math.log(3);

        double first = (lnx * log2x) / log2x;
        double second = first * log2x;
        double third = (log2x * log2x) + log2x;
        return (second + third) / log3x;
    }

    // ===== ТРИГОНОМЕТРИЧЕСКИЕ ТОЧКИ (x ≤ 0) =====
    private static final double[] TRIG_POINTS = {

        -7.27117,
        -7.26315,
        -7.22594,
        -7.20103,
        -7.19826,
        -7.25954,
        -7.2029,

        -7.03514,
        -7.1745,
        -6.8324,

        -5.55076,
        -5.6498,
        -5.4729,

        -4.28941,
        -4.28849,
        -4.28576,
        -4.24848,
        -4.16,
        -3.8018,
        -3.4547,
        
        -2.883,
        -2.56796,
        -2.2446,


        //
        // -0.94276,
        // -0.97997,
        // -0.91784,
        // -0.97176,
        // -0.9216,
        // -0.98815,
        // -0.91563,
        

        // -8.79674,
        // 8.841966326794896,
        // 8.83434,
        // 8.833946326794897,
        // 8.796736326794896,

        // // ПЕРВЫЙ ПЕРИОД (от 0 до -2π)
        // -0.942759,                 // особая точка (csc=tan)
        // -0.979966,
        // -0.917841,

       
        // -3.8018,
        
        // -7.22594,
        
        
        // -7.03514,               
        // -10.085140010000002,
        // -11.83395,
        // -13.31833,


        // -13.50913,
        // -13.48421,
        // -13.54634,

        // -16.368273340000002,
        // -22.65140667,
        // -28.93454,
        
        // // ПРИБЛИЖЕНИЕ К НУЛЮ
        // -0.100, -0.050, -0.010, -0.005, -0.001, -0.0001


    };

    // ===== ЛОГАРИФМИЧЕСКИЕ ТОЧКИ (x > 0) =====
    private static final double[] LOG_POINTS = {


        0.1405,

        // Участок (0, 1) — пересечения с 0 и экстремумы
        0.05854,                // минимум (-9.40)
        0.06641,                // пересечение с 0
        0.09555,                // минимум (-7.51)

        0.664059,
        
        // Мелкие значения
        0.001, 0.005, 0.010, 0.020, 0.050, 0.070, 0.100, 0.150, 0.200,
        
        // Приближение к 1 слева
        0.300, 0.400, 0.500, 0.600, 0.700, 0.800, 0.900, 0.950, 0.990, 0.999,
        
        // x = 1 — пропускаем (особая точка)
        
        // Приближение к 1 справа
        1.001, 1.010, 1.050, 1.100, 1.200, 1.300, 1.400,
        1.500, 1.600, 1.700, 1.800, 1.900, 2.000,
        
        // Точка из примера
        1.60006,                // значение 3.40476
        
        // Умеренные значения
        2.200, 2.500, 2.700, 3.000, 3.500,
        
        // Большие значения
        4.000, 4.500, 5.000, 6.000, 7.000, 8.000, 9.000, 10.000,
        15.000, 20.000, 30.000, 50.000, 70.000, 100.000
    };
}