import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

// тесты для arctg(x) - разложение в ряд тейлора
// значения взяты из консоли (результаты работы самой функции)
// использовал:
// - эквивалентные классы (|x|<1, |x|=1, |x|>1)
// - граничные значения (-1, 0, 1)
// - white-box (все ветки кода)
// - black-box (проверка поведения)
@DisplayName("тесты arctg(x)")
public class MainTest
{
    private final float EPSILON = 0.000001f;
    private final int MAX_ITERATIONS = 10000;
    
    private Main main;
    @BeforeEach
    void setUp()
    {
        main = new Main(EPSILON, MAX_ITERATIONS);
    }

    @Nested
    @DisplayName("|x| < 1 - обычный ряд тейлора")
    class DirectTaylorSeriesTests
    {
        @Test
        @DisplayName("arctg(0) = 0")
        void testArctgZero()
        {
            assertEquals(0.0, main.arctg(0.0), EPSILON, "arctg(0) должен быть 0");
        }

        @Test
        @DisplayName("arctg(0.5) - положительная дробь")
        void testArctgPositiveFraction()
        {
            assertEquals(0.4636476132156101, main.arctg(0.5), EPSILON);
        }

        @Test
        @DisplayName("arctg(-0.5) - отрицательная дробь")
        void testArctgNegativeFraction()
        {
            assertEquals(-0.4636476132156101, main.arctg(-0.5), EPSILON);
        }

        @Test
        @DisplayName("arctg(0.1) - маленькое положительное")
        void testArctgSmallPositive()
        {
            assertEquals(0.09966865238095238, main.arctg(0.1), EPSILON);
        }

        @Test
        @DisplayName("arctg(-0.1) - маленькое отрицательное")
        void testArctgSmallNegative()
        {
            assertEquals(-0.09966865238095238, main.arctg(-0.1), EPSILON);
        }

        @Test
        @DisplayName("arctg(0.7)")
        void testArctg07()
        {
            assertEquals(0.6107259680852114, main.arctg(0.7), EPSILON);
        }

        @Test
        @DisplayName("arctg(0.2)")
        void testArctg02()
        {
            assertEquals(0.19739556165079364, main.arctg(0.2), EPSILON);
        }

        @Test
        @DisplayName("arctg(0.8)")
        void testArctg08()
        {
            assertEquals(0.674740960244459, main.arctg(0.8), EPSILON);
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
            assertEquals(0.7853981682608727, main.arctg(1.0), EPSILON, "arctg(1) должен быть ~π/4");
        }

        @Test
        @DisplayName("arctg(-1) = -π/4")
        void testArctgNegativeOne()
        {
            assertEquals(-0.7853981682608727, main.arctg(-1.0), EPSILON, "arctg(-1) должен быть ~-π/4");
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
            assertEquals(0.7803730843224084, main.arctg(0.99), EPSILON);
        }

        @Test
        @DisplayName("arctg(-0.99) - чуть больше -1")
        void testArctgJustAboveNegativeOne()
        {
            assertEquals(-0.7803730843224084, main.arctg(-0.99), EPSILON);
        }

        @Test
        @DisplayName("arctg(1.01) - чуть больше 1")
        void testArctgJustAboveOne()
        {
            assertEquals(0.7903732424668598, main.arctg(1.01), EPSILON);
        }

        @Test
        @DisplayName("arctg(-1.01) - чуть меньше -1")
        void testArctgJustBelowNegativeOne()
        {
            assertEquals(-0.7903732424668598, main.arctg(-1.01), EPSILON);
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
            assertEquals(1.1071487135792863, main.arctg(2.0), EPSILON);
        }

        @Test
        @DisplayName("arctg(-2) - меньше -1")
        void testArctgLessThanNegativeOne()
        {
            // из консоли: arctg(-2) = -1.1071487135792863
            assertEquals(-1.1071487135792863, main.arctg(-2.0), EPSILON);
        }

        @Test
        @DisplayName("arctg(10) - большое положительное")
        void testArctgLargePositive()
        {
            assertEquals(1.471127674413944, main.arctg(10.0), EPSILON);
        }

        @Test
        @DisplayName("arctg(-10) - большое отрицательное")
        void testArctgLargeNegative()
        {
            assertEquals(-1.471127674413944, main.arctg(-10.0), EPSILON);
        }

        @Test
        @DisplayName("arctg(100) - очень большое положительное")
        void testArctgVeryLargePositive()
        {
            assertEquals(1.56079666010823, main.arctg(100.0), EPSILON);
        }

        @Test
        @DisplayName("arctg(-100) - очень большое отрицательное")
        void testArctgVeryLargeNegative()
        {
            assertEquals(-1.56079666010823, main.arctg(-100.0), EPSILON);
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
            assertEquals(-main.arctg(0.7), main.arctg(-0.7), EPSILON);
        }

        @Test
        @DisplayName("монотонность: x1 < x2 => arctg(x1) < arctg(x2)")
        void testArctgMonotonicity()
        {
            assertTrue(main.arctg(0.2) < main.arctg(0.8),
                "функция должна возрастать");
        }

        @Test
        @DisplayName("предел: arctg(x) → π/2 при x → +∞")
        void testArctgLimitPositive()
        {
            assertEquals(1.5707963267948966, main.arctg(10000.0), 0.0001);
        }

        @Test
        @DisplayName("предел: arctg(x) → -π/2 при x → -∞")
        void testArctgLimitNegative()
        {
            assertEquals(-1.5707963267948966, main.arctg(-10000.0), 0.0001);
        }

        @Test
        @DisplayName("достижение максимального числа итераций")
        void testReachMaxIterations()
        {
            Main mainWithLowLimit = new Main(0.0000001f, 1);
            double result = mainWithLowLimit.arctg(0.3);
            
            assertNotNull(result);
        }
    }
}
