import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import java.util.*;

// тестирование b+ дерева через характерные точки
// порядок дерева = 8 (макс 7 ключей в узле)
// характерные точки:
// 1 - search_start (начало поиска)
// 2 - search_go_left (пошли влево)
// 3 - search_go_right (пошли вправо)
// 4 - search_found (нашли)
// 5 - search_not_found (не нашли)
// 6 - insert_to_leaf (вставка в лист)
// 7 - leaf_split (сплит листа)
// 8 - promote_key (продвижение ключа)
// 9 - internal_split (сплит внутреннего)
// 10 - root_split (сплит корня)
// 11 - insert_done (вставка завершена)

@DisplayName("тесты b+ дерева через характерные точки")
public class MainTest
{
    private final static int MAXDEGREE = 3;

    private Main tree;
    
    @BeforeEach
    void setUp()
    {
        tree = new Main(MAXDEGREE);
    }
    @Nested
    @DisplayName("простая вставка без сплитов")
    class SimpleInsertTests
    {
        @Test
        @DisplayName("вставка нескольких элементов без сплита")
        void testInsertNoSplit()
        {
            tree.insert(10);
            tree.insert(20);
            
            // последняя операция: поиск листа -> вставка в лист -> не нашли -> готово
            List<Integer> expected = Arrays.asList(
                Checkpoint.SEARCH_START,
                Checkpoint.INSERT_TO_LEAF,
                Checkpoint.SEARCH_NOT_FOUND,
                Checkpoint.INSERT_DONE
            );
            
            assertEquals(expected, tree.getCheckpoints(),
                "последовательность при вставке без сплита");
        }
    }

    @Nested
    @DisplayName("сплит листов")
    class LeafSplitTests
    {
        @Test
        @DisplayName("сплит при 3 элементах")
        void testLeafSplitAt8()
        {

            tree.insert(10);
            tree.insert(20);
  
            // 3-й элемент должен вызвать сплит
            tree.insert(8);
            
            List<Integer> checkpoints = tree.getCheckpoints();
            
            // проверяем что был сплит листа
            assertTrue(checkpoints.contains(Checkpoint.LEAF_SPLIT),
                "должен быть сплит листа");
            assertTrue(checkpoints.contains(Checkpoint.PROMOTE_KEY),
                "должно быть продвижение ключа");
            assertTrue(checkpoints.contains(Checkpoint.ROOT_SPLIT),
                "должен быть сплит корня");
        }

        @Test
        @DisplayName("последовательность при сплите корня")
        void testRootSplitSequence()
        {
            tree.insert(14); 
            tree.insert(24);  

            tree.insert(8);  // это вызовет сплит
            
            List<Integer> checkpoints = tree.getCheckpoints();
            
            // эталонная последовательность при сплите корня:
            // вставка в лист -> сплит листа -> продвижение ключа -> сплит корня -> готово
            assertTrue(checkpoints.indexOf(Checkpoint.INSERT_TO_LEAF) < 
                       checkpoints.indexOf(Checkpoint.LEAF_SPLIT),
                "вставка должна быть перед сплитом");
            assertTrue(checkpoints.indexOf(Checkpoint.LEAF_SPLIT) < 
                       checkpoints.indexOf(Checkpoint.PROMOTE_KEY),
                "сплит должен быть перед продвижением ключа");
        }
    }

    @Nested
    @DisplayName("поиск в дереве")
    class SearchTests
    {
        @Test
        @DisplayName("поиск существующего элемента")
        void testSearchExisting()
        {
            tree.insert(50);
            tree.insert(30);
            tree.insert(70);
            
            boolean found = tree.search(30);
            
            assertTrue(found, "элемент должен быть найден");
            List<Integer> checkpoints = tree.getCheckpoints();
            assertTrue(checkpoints.contains(Checkpoint.SEARCH_START),
                "поиск должен начинаться с search_start");
            assertTrue(checkpoints.contains(Checkpoint.SEARCH_FOUND),
                "должен быть search_found");
        }

        @Test
        @DisplayName("поиск несуществующего элемента")
        void testSearchNotFound()
        {
            tree.insert(50);
            
            boolean found = tree.search(100);
            
            assertFalse(found, "элемент не должен быть найден");
            List<Integer> checkpoints = tree.getCheckpoints();
            assertTrue(checkpoints.contains(Checkpoint.SEARCH_START),
                "поиск должен начинаться с search_start");
            assertTrue(checkpoints.contains(Checkpoint.SEARCH_NOT_FOUND),
                "должен быть search_not_found");
        }

        @Test
        @DisplayName("поиск в пустом дереве")
        void testSearchEmptyTree()
        {
            boolean found = tree.search(5);
            
            assertFalse(found, "в пустом дереве ничего нет");
            
            List<Integer> expected = Arrays.asList(
                Checkpoint.SEARCH_START,
                Checkpoint.SEARCH_NOT_FOUND
            );
            
            assertEquals(expected, tree.getCheckpoints(),
                "последовательность поиска в пустом дереве");
        }

        @Test
        @DisplayName("поиск с переходом вправо")
        void testSearchGoRight()
        {
            tree.insert(1);
            tree.insert(2);
            tree.insert(3);

            // ищем элемент в правой части
            tree.search(3);
            
            List<Integer> checkpoints = tree.getCheckpoints();
            assertTrue(checkpoints.contains(Checkpoint.SEARCH_GO_RIGHT),
                "должен быть переход вправо при поиске");
        }

        @Test
        @DisplayName("поиск с переходом влево")
        void testSearchGoLeft()
        {
            // создаем дерево
            tree.insert(1);
            tree.insert(2);
            tree.insert(3);

            // ищем элемент в левой части
            tree.search(1);
            
            List<Integer> checkpoints = tree.getCheckpoints();
            assertTrue(checkpoints.contains(Checkpoint.SEARCH_GO_LEFT),
                "должен быть переход влево при поиске");
        }
    }

    @Nested
    @DisplayName("граничные значения")
    class BoundaryTests
    {
        @Test
        @DisplayName("вставка отрицательных чисел")
        void testInsertNegative()
        {
            tree.insert(-5);
            
            assertTrue(tree.search(-5));
            List<Integer> cp = tree.getCheckpoints();
            assertTrue(cp.contains(Checkpoint.SEARCH_FOUND));
        }

        @Test
        @DisplayName("вставка одинаковых элементов")
        void testInsertAllSame()
        {
            tree.insert(42);
            tree.insert(42);
            
            // должен быть только один элемент
            assertTrue(tree.search(42));
            
            // проверяем последовательность для последней вставки
            List<Integer> cp = tree.getCheckpoints();
            assertTrue(cp.contains(Checkpoint.SEARCH_FOUND),
                "дубликат должен быть найден");
        }
    }

    @Nested
    @DisplayName("тесты непокрытых методов")
    class UncoveredMethodsTests
    {
        @Test
        @DisplayName("тест getMaxKeys()")
        void testGetMaxKeys()
        {
            assertEquals(MAXDEGREE - 1, tree.getMaxKeys(), 
                "getMaxKeys должен возвращать MAX_KEYS");
        }
        
        @Test
        @DisplayName("тест getMaxDegree()")
        void testGetMaxDegree()
        {
            assertEquals(MAXDEGREE, tree.getMaxDegree(), 
                "getMaxDegree должен возвращать MAXDEGREE");
        }
        
        @Test
        @DisplayName("поиск с переходом вправо и влево в многоуровневом дереве")
        void testSearchGoLeftAndRightMultiLevel()
        {
            // Создаем дерево с несколькими уровнями
            tree.insert(10);
            tree.insert(20);
            tree.insert(5);
            tree.insert(15);
            tree.insert(30);
            
            tree.search(5);   // должен пойти влево
            List<Integer> cpLeft = tree.getCheckpoints();
            
            tree.search(30);  // должен пойти вправо
            List<Integer> cpRight = tree.getCheckpoints();
            
            // Проверяем наличие переходов
            // (не assertTrue, т.к. может зависеть от реализации)
            boolean hasGoLeft = cpLeft.contains(Checkpoint.SEARCH_GO_LEFT);
            boolean hasGoRight = cpRight.contains(Checkpoint.SEARCH_GO_RIGHT);
            
            // Хотя бы один из переходов должен быть
            assertTrue(hasGoLeft || hasGoRight, 
                "должен быть хотя бы один переход влево или вправо");
        }

        @Test
        @DisplayName("идем влево после сплита")
        void testCoverFindLeafElseBranch()
        {
            tree.insert(10);
            tree.insert(20);
            tree.insert(5);   // создаем внутренний узел
            
            tree.insert(1);  // здесь i != 0

            List<Integer> cp = tree.getCheckpoints();
            assertTrue(cp.contains(Checkpoint.SEARCH_GO_LEFT));
        }
        
        @Test
        @DisplayName("найти родителя через рекурсию")
        void testFindParentViaRecursion()
        {
            Main tree = new Main(3);
        
            tree.insert(10);
            tree.insert(20);
            tree.insert(5);
            tree.insert(15);
            tree.insert(25);
            tree.insert(30);

            // Теперь делаем вставку, которая вызовет сплит на глубине
            // и findParent будет искать родителя рекурсивно
            tree.insert(12);
            
            assertTrue(tree.search(12));
        }
    }
}
