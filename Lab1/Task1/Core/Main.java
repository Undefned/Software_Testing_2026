// 1. Для указанной функции провести модульное 
// тестирование разложения функции в степенной ряд. 
// Выбрать достаточное тестовое покрытие.

// Функция arctg(x)


public class Main
{
    private static final double EPSILON = 0.000000000001;
    private static final int MAX_ITERATIONS = 10000;
    
    public static void main(String[] args)
    {
        // проверка работы функции
        System.out.println("arctg(0) = " + arctg(0));
        System.out.println("arctg(0.5) = " + arctg(0.5));
        System.out.println("arctg(1) = " + arctg(1));
        System.out.println("arctg(-1) = " + arctg(-1));
    }

    // считаем arctg(x) через ряд тейлора
    // если |x| <= 1: arctg(x) = x - x³/3 + x⁵/5 - x⁷/7 + ...
    // если |x| > 1: используем формулу arctg(x) = π/2 - arctg(1/x)
    // для |x| близких к 1 делаем редукцию чтобы быстрее сходилась
    public static double arctg(double x)
    {
        if (x > 1.0)
        {
            return Math.PI / 2.0 - arctg(1.0 / x);
        }
        else if (x < -1.0)
        {
            return -Math.PI / 2.0 - arctg(1.0 / x);
        }
        
        // если х близок к 1, то уменьшаем через формулу
        if (Math.abs(x) > 0.5)
        {
            double reduced = x / (1.0 + Math.sqrt(1.0 + x * x));
            return 2.0 * arctg(reduced);
        }
        
        double result = 0.0;
        double xPower = x;
        int sign = 1;
        
        // сам ряд тейлора
        for (int n = 1; n <= MAX_ITERATIONS; n += 2)
        {
            double term = sign * xPower / n;
            result += term;
            
            if (Math.abs(term) < EPSILON)
            {
                break;
            }
            
            xPower *= x * x;
            sign = -sign;
        }
        
        return result;
    }
}