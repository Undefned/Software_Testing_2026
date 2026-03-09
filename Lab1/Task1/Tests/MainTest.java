import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

// тесты для arctg(x) - разложение в ряд тейлора
// использовал:
// - эквивалентные классы (|x|<1, |x|=1, |x|>1)
// - граничные значения (-1, 0, 1)
// - white-box (все ветки кода)
// - black-box (проверка поведения)
@DisplayName("тесты arctg(x)")
public class MainTest
{
    
    private static final double DELTA = 1e-9;

    @Nested
    @DisplayName("|x| < 1 - обычный ряд тейлора")
    class DirectTaylorSeriesTests
    {
        @Test
        @DisplayName("arctg(0) = 0")
        void testArctgZero()
        {
            assertEquals(0.0, Main.arctg(0.0), DELTA, "arctg(0) должен быть 0");
        }

        @Test
        @DisplayName("arctg(0.5) - положительная дробь")
        void testArctgPositiveFraction()
        {
            double expected = Math.atan(0.5);
            double actual = Main.arctg(0.5);
            assertEquals(expected, actual, DELTA);
        }

        @Test
        @DisplayName("arctg(-0.5) - отрицательная дробь")
        void testArctgNegativeFraction()
        {
            double expected = Math.atan(-0.5);
            double actual = Main.arctg(-0.5);
            assertEquals(expected, actual, DELTA);
        }

        @Test
        @DisplayName("arctg(0.1) - маленькое положительное")
        void testArctgSmallPositive()
        {
            assertEquals(Math.atan(0.1), Main.arctg(0.1), DELTA);
        }

        @Test
        @DisplayName("arctg(-0.1) - маленькое отрицательное")
        void testArctgSmallNegative()
        {
            assertEquals(Math.atan(-0.1), Main.arctg(-0.1), DELTA);
        }
    }

    @Nested
    @DisplayName("|x| = 1 - граничные значения")
    class BoundaryTests
    {
        @Test
        @DisplayName("arctg(1) = π/4")
        void testArctgOne()
        {
            double expected = Math.PI / 4.0;
            double actual = Main.arctg(1.0);
            assertEquals(expected, actual, DELTA, "arctg(1) должен быть π/4");
        }

        @Test
        @DisplayName("arctg(-1) = -π/4")
        void testArctgNegativeOne()
        {
            double expected = -Math.PI / 4.0;
            double actual = Main.arctg(-1.0);
            assertEquals(expected, actual, DELTA, "arctg(-1) должен быть -π/4");
        }
    }

    @Nested
    @DisplayName("|x| > 1 - через формулу arctg(x) = π/2 - arctg(1/x)")
    class IdentityTests
    {
        @Test
        @DisplayName("arctg(2) - больше 1")
        void testArctgGreaterThanOne()
        {
            assertEquals(Math.atan(2.0), Main.arctg(2.0), DELTA);
        }

        @Test
        @DisplayName("arctg(-2) - меньше -1")
        void testArctgLessThanNegativeOne()
        {
            assertEquals(Math.atan(-2.0), Main.arctg(-2.0), DELTA);
        }

        @Test
        @DisplayName("arctg(10) - большое положительное")
        void testArctgLargePositive()
        {
            assertEquals(Math.atan(10.0), Main.arctg(10.0), DELTA);
        }

        @Test
        @DisplayName("arctg(-10) - большое отрицательное")
        void testArctgLargeNegative()
        {
            assertEquals(Math.atan(-10.0), Main.arctg(-10.0), DELTA);
        }

        @Test
        @DisplayName("arctg(100) - очень большое положительное")
        void testArctgVeryLargePositive()
        {
            assertEquals(Math.atan(100.0), Main.arctg(100.0), DELTA);
        }

        @Test
        @DisplayName("arctg(-100) - очень большое отрицательное")
        void testArctgVeryLargeNegative()
        {
            assertEquals(Math.atan(-100.0), Main.arctg(-100.0), DELTA);
        }
    }

    @Nested
    @DisplayName("значения рядом с границами")
    class NearBoundaryTests
    {
        @Test
        @DisplayName("arctg(0.99) - чуть меньше 1")
        void testArctgJustBelowOne()
        {
            assertEquals(Math.atan(0.99), Main.arctg(0.99), DELTA);
        }

        @Test
        @DisplayName("arctg(-0.99) - чуть больше -1")
        void testArctgJustAboveNegativeOne()
        {
            assertEquals(Math.atan(-0.99), Main.arctg(-0.99), DELTA);
        }

        @Test
        @DisplayName("arctg(1.01) - чуть больше 1")
        void testArctgJustAboveOne()
        {
            assertEquals(Math.atan(1.01), Main.arctg(1.01), DELTA);
        }

        @Test
        @DisplayName("arctg(-1.01) - чуть меньше -1")
        void testArctgJustBelowNegativeOne()
        {
            assertEquals(Math.atan(-1.01), Main.arctg(-1.01), DELTA);
        }
    }

    @Nested
    @DisplayName("свойства функции")
    class PropertyTests
    {
        @Test
        @DisplayName("нечетность: arctg(-x) = -arctg(x)")
        void testArctgOddFunction()
        {
            double x = 0.7;
            assertEquals(-Main.arctg(x), Main.arctg(-x), DELTA);
        }

        @Test
        @DisplayName("монотонность: x1 < x2 => arctg(x1) < arctg(x2)")
        void testArctgMonotonicity()
        {
            assertTrue(Main.arctg(0.2) < Main.arctg(0.8), 
                "функция должна возрастать");
        }

        @Test
        @DisplayName("диапазон: -π/2 < arctg(x) < π/2")
        void testArctgRange()
        {
            double[] values = {-1000, -100, -10, -1, 0, 1, 10, 100, 1000};
            for (double x : values)
            {
                double result = Main.arctg(x);
                assertAll("проверка диапазона",
                    () -> assertTrue(result > -Math.PI / 2.0, 
                        "arctg(" + x + ") должен быть > -π/2"),
                    () -> assertTrue(result < Math.PI / 2.0, 
                        "arctg(" + x + ") должен быть < π/2")
                );
            }
        }

        @Test
        @DisplayName("предел: arctg(x) → π/2 при x → +∞")
        void testArctgLimitPositive()
        {
            double result = Main.arctg(10000.0);
            assertEquals(Math.PI / 2.0, result, 0.0001);
        }

        @Test
        @DisplayName("предел: arctg(x) → -π/2 при x → -∞")
        void testArctgLimitNegative()
        {
            double result = Main.arctg(-10000.0);
            assertEquals(-Math.PI / 2.0, result, 0.0001);
        }
    }

    @Nested
    @DisplayName("регрессионные тесты")
    class RegressionTests
    {
        @Test
        @DisplayName("стандартные значения")
        void testStandardValues()
        {
            assertAll("стандартные значения",
                () -> assertEquals(0.0, Main.arctg(0.0), DELTA),
                () -> assertEquals(Math.PI / 4.0, Main.arctg(1.0), DELTA),
                () -> assertEquals(-Math.PI / 4.0, Main.arctg(-1.0), DELTA),
                () -> assertEquals(Math.atan(0.5), Main.arctg(0.5), DELTA),
                () -> assertEquals(Math.atan(2.0), Main.arctg(2.0), DELTA)
            );
        }
    }
}
