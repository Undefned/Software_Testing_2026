// public class MathUsagePrinter {
//     public static void main(String[] args) {
        
//         // ===== Из DerivedLogarithmsTest =====
//         double x = 10; // пример
       
//         // ===== Из LnTest =====
//         System.out.println("ln(x) = " + Math.log(x));
        
//         // ===== Из StubModulesTest =====
//         System.out.println("ln(x) / ln(2) = " + (Math.log(x) / Math.log(2.0)));
//         System.out.println("ln(x) / ln(3) = " + (Math.log(x) / Math.log(3.0)));
        
//         // ===== Из DerivedTrigFunctionsTest =====
//         double angle = 1.0471975511965976; // 60 градусов
//         System.out.println("cos(x) = " + Math.cos(angle));
//         System.out.println("tan(x) = " + Math.tan(angle));
//         System.out.println("1 / tan(x) = " + (1.0 / Math.tan(angle)));
//         System.out.println("1 / cos(x) = " + (1.0 / Math.cos(angle)));
//         System.out.println("1 / sin(x) = " + (1.0 / Math.sin(angle)));
        
//         // ===== Из SinTest =====
//         System.out.println("sin(x) = " + Math.sin(angle));
        
//         // ===== Из TrigBranchTest =====
//         // Там используются просто числа 2.0, 3.0, 5.0, 7.0, 11.0, 13.0
//         // без вызова Math, только арифметика
        
//         // ===== Из CsvExporterIntegrationTest =====
//         // Нет Math, просто x * x
        
//         // ===== Из LogBranchTest, SystemFunctionTest =====
//         // Нет Math, просто моки
        
//         // ===== Из TrigBranchTest.shouldComputeTrigBranchFromDependencies =====
//         // Там формула с Math.pow, но на конкретных числах:
//         double S = 2.0, C = 3.0, T = 5.0, Ct = 7.0, Sc = 11.0, Csc = 13.0;
        
//         double secDivSin = Sc / S;
//         double partA3 = Math.pow(Math.pow(secDivSin, 3) - Ct, 2);
//         double partA5 = (partA3 / (S + S)) * Csc;
//         double partA10 = ((partA5 + S * C) * Ct + Csc) * (Csc + Ct) + T;
//         double A = partA10 / (Math.pow(Ct, 3) / (Sc - Csc));
        
//         double partB4 = Math.pow(Math.pow(Math.pow(C - T, 2) + (Csc + Ct), 3), 2);
//         double B = partB4 / Ct / (Csc - T) - T / (Sc * (Sc * (S * S * C)));
        
//         System.out.println("A - B (на моках) = " + (A - B));
        
//         // ===== Из ProjectStructureTest =====
//         System.out.println("sin(0.0) = " + Math.sin(0.0));
//         System.out.println("ln(1.0) = " + Math.log(1.0));
//     }
// }