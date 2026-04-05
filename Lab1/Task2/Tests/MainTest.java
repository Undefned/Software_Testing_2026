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
    @Nested
    @DisplayName("простая вставка без сплитов")
    class SimpleInsertTests
    {
        @Test
        @DisplayName("вставка первого элемента")
        void testInsertFirstElement()
        {
            Main tree = new Main();
            tree.insert(5);
            
            // эталон: вставка в лист -> готово
            List<Integer> expected = Arrays.asList(
                Checkpoint.INSERT_TO_LEAF,
                Checkpoint.INSERT_DONE
            );
            
            assertEquals(expected, tree.getCheckpoints(),
                "последовательность при вставке первого элемента");
        }

        @Test
        @DisplayName("вставка нескольких элементов без сплита")
        void testInsertNoSplit()
        {
            Main tree = new Main();
            tree.insert(10);
            tree.insert(20);
            tree.insert(30);
            
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

        @Test
        @DisplayName("вставка дубликата")
        void testInsertDuplicate()
        {
            Main tree = new Main();
            tree.insert(5);
            tree.insert(5);  // дубликат
            
            // эталон: поиск -> нашли дубликат -> готово
            List<Integer> expected = Arrays.asList(
                Checkpoint.SEARCH_START,
                Checkpoint.SEARCH_FOUND,
                Checkpoint.INSERT_DONE
            );
            
            assertEquals(expected, tree.getCheckpoints(),
                "последовательность при вставке дубликата");
        }
    }

    @Nested
    @DisplayName("сплит листов")
    class LeafSplitTests
    {
        @Test
        @DisplayName("сплит при 8 элементах")
        void testLeafSplitAt8()
        {
            Main tree = new Main();
            
            // вставляем 7 элементов (без сплита)
            for (int i = 1; i <= 7; i++)
            {
                tree.insert(i);
            }
            
            // 8-й элемент должен вызвать сплит
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
            Main tree = new Main();
            
            // заполняем лист (7 элементов)
            for (int i = 1; i <= 7; i++)
            {
                tree.insert(i);
            }
            
            // clearing checkpoints before the split operation
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
            Main tree = new Main();
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
            Main tree = new Main();
            tree.insert(50);
            tree.insert(30);
            tree.insert(70);
            
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
            Main tree = new Main();
            
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
            Main tree = new Main();
            
            // создаем дерево с несколькими уровнями
            for (int i = 1; i <= 15; i++)
            {
                tree.insert(i);
            }
            
            // ищем элемент в правой части
            tree.search(12);
            
            List<Integer> checkpoints = tree.getCheckpoints();
            assertTrue(checkpoints.contains(Checkpoint.SEARCH_GO_RIGHT),
                "должен быть переход вправо при поиске 12");
        }

        @Test
        @DisplayName("поиск с переходом влево")
        void testSearchGoLeft()
        {
            Main tree = new Main();
            
            // создаем дерево
            for (int i = 1; i <= 15; i++)
            {
                tree.insert(i);
            }
            
            // ищем элемент в левой части
            tree.search(3);
            
            List<Integer> checkpoints = tree.getCheckpoints();
            assertTrue(checkpoints.contains(Checkpoint.SEARCH_GO_LEFT),
                "должен быть переход влево при поиске 3");
        }
    }

    @Nested
    @DisplayName("сплит внутренних узлов")
    class InternalSplitTests
    {
        @Test
        @DisplayName("сплит внутреннего узла")
        void testInternalNodeSplit()
        {
            Main tree = new Main();
            
            // вставляем много элементов для создания нескольких уровней
            // order = 8, max_keys = 7
            for (int i = 1; i <= 100; i++)
            {
                tree.insert(i);
            }
            
            // проверяем что дерево работает корректно
            assertTrue(tree.search(50), "элемент 50 должен быть найден");
            assertTrue(tree.search(1), "элемент 1 должен быть найден");
            assertTrue(tree.search(100), "элемент 100 должен быть найден");
        }

        @Test
        @DisplayName("порядок характерных точек при сплите")
        void testCheckpointOrderOnSplit()
        {
            Main tree = new Main();
            
            // вызываем сплит внутреннего узла
            for (int i = 1; i <= 30; i++)
            {
                tree.insert(i);
            }
            
            List<Integer> checkpoints = tree.getCheckpoints();
            
            // проверяем логический порядок
            int lastInternalSplit = -1;
            int lastPromote = -1;
            
            for (int i = 0; i < checkpoints.size(); i++)
            {
                if (checkpoints.get(i) == Checkpoint.INTERNAL_SPLIT)
                {
                    lastInternalSplit = i;
                }
                if (checkpoints.get(i) == Checkpoint.PROMOTE_KEY)
                {
                    lastPromote = i;
                }
            }
            
            // после сплита должно быть продвижение ключа
            if (lastInternalSplit != -1)
            {
                assertTrue(lastPromote > lastInternalSplit || 
                           checkpoints.contains(Checkpoint.ROOT_SPLIT),
                    "после сплита должно быть продвижение или сплит корня");
            }
        }
    }

    @Nested
    @DisplayName("комплексные тесты")
    class ComplexTests
    {
        @Test
        @DisplayName("полная последовательность вставок")
        void testFullInsertionSequence()
        {
            Main tree = new Main();
            
            // эталонные последовательности для разных этапов
            // этап 1: первый элемент
            tree.insert(5);
            List<Integer> expected1 = Arrays.asList(
                Checkpoint.INSERT_TO_LEAF,
                Checkpoint.INSERT_DONE
            );
            assertEquals(expected1, tree.getCheckpoints());
            
            // этап 2: еще элементы без сплита
            tree.insert(3);
            List<Integer> cp2 = tree.getCheckpoints();
            assertTrue(cp2.contains(Checkpoint.INSERT_TO_LEAF));
            assertTrue(cp2.contains(Checkpoint.INSERT_DONE));
            
            // этап 3: много элементов до сплита
            for (int i = 0; i < 5; i++)
            {
                tree.insert(i);
            }
            
            // этап 4: вставка вызывающая сплит
            tree.insert(100);
            List<Integer> cp4 = tree.getCheckpoints();
            assertTrue(cp4.contains(Checkpoint.INSERT_DONE),
                "вставка должна завершиться");
        }

        @Test
        @DisplayName("поиск после множественных вставок")
        void testSearchAfterMultipleInserts()
        {
            Main tree = new Main();
            
            // вставляем 20 элементов
            int[] values = {50, 25, 75, 10, 30, 60, 80, 5, 15, 27,
                           35, 40, 45, 55, 65, 70, 77, 85, 90, 95};
            
            for (int v : values)
            {
                tree.insert(v);
            }
            
            // проверяем поиск разных элементов
            assertTrue(tree.search(50));
            List<Integer> cp1 = tree.getCheckpoints();
            assertTrue(cp1.contains(Checkpoint.SEARCH_FOUND));
            
            assertFalse(tree.search(1000));
            List<Integer> cp2 = tree.getCheckpoints();
            assertTrue(cp2.contains(Checkpoint.SEARCH_NOT_FOUND));
            
            assertTrue(tree.search(5));
            List<Integer> cp3 = tree.getCheckpoints();
            assertTrue(cp3.contains(Checkpoint.SEARCH_FOUND));
        }

        @Test
        @DisplayName("проверка что checkpoints очищается")
        void testCheckpointsCleared()
        {
            Main tree = new Main();
            
            tree.insert(1);
            List<Integer> cp1 = tree.getCheckpoints();
            int size1 = cp1.size();
            
            tree.insert(2);
            List<Integer> cp2 = tree.getCheckpoints();
            int size2 = cp2.size();
            
            // checkpoints должны быть независимы для каждой операции
            assertNotEquals(size1, cp2.size(),
                "разные операции могут иметь разное число характерных точек");
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
            Main tree = new Main();
            tree.insert(-5);
            tree.insert(-10);
            tree.insert(-1);
            
            assertTrue(tree.search(-5));
            List<Integer> cp = tree.getCheckpoints();
            assertTrue(cp.contains(Checkpoint.SEARCH_FOUND));
        }

        @Test
        @DisplayName("вставка в порядке убывания")
        void testInsertDescending()
        {
            Main tree = new Main();
            
            for (int i = 10; i >= 1; i--)
            {
                tree.insert(i);
            }
            
            // проверяем что все элементы нашлись
            for (int i = 1; i <= 10; i++)
            {
                assertTrue(tree.search(i), "элемент " + i + " должен быть найден");
            }
        }

        @Test
        @DisplayName("вставка одинаковых элементов")
        void testInsertAllSame()
        {
            Main tree = new Main();
            
            for (int i = 0; i < 5; i++)
            {
                tree.insert(42);
            }
            
            // должен быть только один элемент
            assertTrue(tree.search(42));
            
            // проверяем последовательность для последней вставки
            List<Integer> cp = tree.getCheckpoints();
            assertTrue(cp.contains(Checkpoint.SEARCH_FOUND),
                "дубликат должен быть найден");
        }
    }
}
