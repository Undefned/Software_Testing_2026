import org.junit.jupiter.api.*;

import Enums.Direction;
import Enums.EngineState;
import Models.ControlPanel;
import Models.Engine;
import Models.Lever;
import Models.Rocket;
import Models.Spaceship;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

// тесты доменной модели: управление космическим кораблем
// предметная область: форд управляет кораблем, уклоняясь от ракет

@DisplayName("тесты доменной модели корабля")
public class MainTest
{
    private Main simulation;

    @BeforeEach
    void setUp()
    {
        simulation = new Main();
    }

    @Nested
    @DisplayName("тесты направления (Direction)")
    class DirectionTests
    {
        @Test
        @DisplayName("противоположное направление: forward <-> backward")
        void testOppositeForwardBackward()
        {
            assertEquals(Direction.BACKWARD, Direction.FORWARD.opposite());
            assertEquals(Direction.FORWARD, Direction.BACKWARD.opposite());
        }

        @Test
        @DisplayName("противоположное направление: left <-> right")
        void testOppositeLeftRight()
        {
            assertEquals(Direction.RIGHT, Direction.LEFT.opposite());
            assertEquals(Direction.LEFT, Direction.RIGHT.opposite());
        }

        @Test
        @DisplayName("противоположное направление: up <-> down")
        void testOppositeUpDown()
        {
            assertEquals(Direction.DOWN, Direction.UP.opposite());
            assertEquals(Direction.UP, Direction.DOWN.opposite());
        }

        @Test
        @DisplayName("противоположное направление: диагонали")
        void testOppositeDiagonals()
        {
            assertEquals(Direction.BACKWARD_RIGHT, Direction.FORWARD_LEFT.opposite());
            assertEquals(Direction.BACKWARD_LEFT, Direction.FORWARD_RIGHT.opposite());
        }
    }

    @Nested
    @DisplayName("тесты рукоятки (Lever)")
    class LeverTests
    {
        @Test
        @DisplayName("новая рукоятка не захвачена")
        void testNewLeverNotGrabbed()
        {
            Lever lever = simulation.getShip().getMainPanel().getLever(0);
            assertNotNull(lever);
            assertFalse(lever.isGrabbed());
        }

        @Test
        @DisplayName("захват рукоятки")
        void testGrabLever()
        {
            Lever lever = simulation.getShip().getMainPanel().getLever(0);
            lever.grab();
            assertTrue(lever.isGrabbed());
        }

        @Test
        @DisplayName("освобождение рукоятки")
        void testReleaseLever()
        {
            Lever lever = simulation.getShip().getMainPanel().getLever(0);
            lever.grab();
            lever.release();
            assertFalse(lever.isGrabbed());
        }

        @Test
        @DisplayName("рукоятка имеет направление")
        void testLeverDirection()
        {
            Lever lever = simulation.getShip().getMainPanel().getLever(0);
            assertEquals(Direction.FORWARD, lever.getDirection());
        }

        @Test
        @DisplayName("рукоятка имеет имя")
        void testLeverName()
        {
            Lever lever = simulation.getShip().getMainPanel().getLever(0);
            assertEquals("forward", lever.getName());
        }
    }

    @Nested
    @DisplayName("тесты пульта (ControlPanel)")
    class ControlPanelTests
    {
        @Test
        @DisplayName("количество рукояток на пульте")
        void testLeverCount()
        {
            ControlPanel panel = simulation.getShip().getMainPanel();
            assertEquals(6, panel.getLeverCount());
        }

        @Test
        @DisplayName("получение рукоятки по индексу")
        void testGetLeverByIndex()
        {
            ControlPanel panel = simulation.getShip().getMainPanel();
            assertNotNull(panel.getLever(0));
            assertNotNull(panel.getLever(5));
            assertNull(panel.getLever(10));  // несуществующий индекс
            assertNull(panel.getLever(-1));  // отрицательный индекс
        }

        @Test
        @DisplayName("получение захваченных рукояток")
        void testGetGrabbedLevers()
        {
            ControlPanel panel = simulation.getShip().getMainPanel();

            // сначала нет захваченных
            assertEquals(0, panel.getGrabbedLevers().size());

            // захватываем несколько
            panel.getLever(0).grab();
            panel.getLever(2).grab();

            assertEquals(2, panel.getGrabbedLevers().size());
        }

        @Test
        @DisplayName("освобождение всех рукояток")
        void testReleaseAllLevers()
        {
            ControlPanel panel = simulation.getShip().getMainPanel();

            // захватываем все
            for (int i = 0; i < panel.getLeverCount(); i++)
            {
                panel.getLever(i).grab();
            }

            // освобождаем все
            panel.releaseAll();

            assertEquals(0, panel.getGrabbedLevers().size());
        }
    }

    @Nested
    @DisplayName("тесты двигателя (Engine)")
    class EngineTests
    {
        @Test
        @DisplayName("новый двигатель выключен")
        void testNewEngineOff()
        {
            Engine engine = new Engine(Direction.FORWARD);
            assertEquals(EngineState.OFF, engine.getState());
            assertEquals(0, engine.getThrust());
        }

        @Test
        @DisplayName("запуск двигателя")
        void testStartEngine()
        {
            Engine engine = new Engine(Direction.FORWARD);
            engine.start();
            assertEquals(EngineState.IDLE, engine.getState());
        }

        @Test
        @DisplayName("работа двигателя с тягой")
        void testEngineRun()
        {
            Engine engine = new Engine(Direction.FORWARD);
            engine.start();
            engine.run(50);
            assertEquals(EngineState.RUNNING, engine.getState());
            assertEquals(50, engine.getThrust());
        }

        @Test
        @DisplayName("перегрузка двигателя при тяге > 100")
        void testEngineOverload()
        {
            Engine engine = new Engine(Direction.FORWARD);
            engine.start();
            engine.run(150);
            assertEquals(EngineState.OVERLOAD, engine.getState());
            assertEquals(100, engine.getThrust());  // ограничено до 100
        }

        @Test
        @DisplayName("остановка двигателя")
        void testStopEngine()
        {
            Engine engine = new Engine(Direction.FORWARD);
            engine.start();
            engine.run(50);
            engine.stop();
            assertEquals(EngineState.OFF, engine.getState());
            assertEquals(0, engine.getThrust());
        }

        @Test
        @DisplayName("двигатель активен только в состоянии RUNNING или OVERLOAD")
        void testEngineIsActive()
        {
            Engine engine = new Engine(Direction.FORWARD);

            assertFalse(engine.isActive());  // OFF

            engine.start();
            assertFalse(engine.isActive());  // IDLE

            engine.run(50);
            assertTrue(engine.isActive());   // RUNNING

            engine.run(150);
            assertTrue(engine.isActive());   // OVERLOAD
        }
    }

    @Nested
    @DisplayName("тесты ракеты (Rocket)")
    class RocketTests
    {
        @Test
        @DisplayName("новая ракета не уничтожена")
        void testNewRocketNotDestroyed()
        {
            Rocket rocket = new Rocket(0, 0, 0, 10);
            assertFalse(rocket.isDestroyed());
        }

        @Test
        @DisplayName("уничтожение ракеты")
        void testDestroyRocket()
        {
            Rocket rocket = new Rocket(0, 0, 0, 10);
            rocket.destroy();
            assertTrue(rocket.isDestroyed());
        }

        @Test
        @DisplayName("расчет расстояния до точки")
        void testDistanceCalculation()
        {
            Rocket rocket = new Rocket(3, 4, 0, 10);
            double distance = rocket.getDistanceTo(0, 0, 0);
            assertEquals(5.0, distance, 0.001);  // теорема пифагора
        }

        @Test
        @DisplayName("движение ракеты")
        void testRocketMove()
        {
            Rocket rocket = new Rocket(0, 0, 0, 10);
            double distBefore = rocket.getDistanceTo(10, 0, 0);

            rocket.move();
            double distAfter = rocket.getDistanceTo(10, 0, 0);

            // ракета должна была переместиться (расстояние изменилось)
            assertNotEquals(distBefore, distAfter, 0.001);
        }

        @Test
        @DisplayName("уничтоженная ракета не движется")
        void testDestroyedRocketDontMove()
        {
            Rocket rocket = new Rocket(0, 0, 0, 10);
            rocket.destroy();

            double distBefore = rocket.getDistanceTo(0, 0, 0);
            rocket.move();
            double distAfter = rocket.getDistanceTo(0, 0, 0);

            assertEquals(distBefore, distAfter, 0.001);
        }
    }

    @Nested
    @DisplayName("тесты корабля (Spaceship)")
    class SpaceshipTests
    {
        @Test
        @DisplayName("начальные координаты корабля")
        void testInitialPosition()
        {
            Spaceship ship = simulation.getShip();
            assertEquals(0, ship.getX(), 0.001);
            assertEquals(0, ship.getY(), 0.001);
            assertEquals(0, ship.getZ(), 0.001);
        }

        @Test
        @DisplayName("начальное направление корабля")
        void testInitialDirection()
        {
            Spaceship ship = simulation.getShip();
            assertEquals(Direction.FORWARD, ship.getFacingDirection());
        }

        @Test
        @DisplayName("начальная скорость корабля")
        void testInitialSpeed()
        {
            Spaceship ship = simulation.getShip();
            assertEquals(0, ship.getSpeed(), 0.001);
        }

        @Test
        @DisplayName("количество двигателей")
        void testEngineCount()
        {
            Spaceship ship = simulation.getShip();
            // должно быть по одному на каждое направление
            assertEquals(Direction.values().length, ship.getEngines().size());
        }

        @Test
        @DisplayName("разворот корабля")
        void testTurnAround()
        {
            Spaceship ship = simulation.getShip();
            assertEquals(Direction.FORWARD, ship.getFacingDirection());

            ship.turnAround();
            assertEquals(Direction.BACKWARD, ship.getFacingDirection());
        }

        @Test
        @DisplayName("захват рукояток пилотом")
        void testGrabLevers()
        {
            Spaceship ship = simulation.getShip();
            ship.grabLevers(java.util.Arrays.asList(0, 1, 2));

            assertEquals(3, ship.getMainPanel().getGrabbedLevers().size());
        }

        @Test
        @DisplayName("освобождение половины рукояток")
        void testReleaseHalfLevers()
        {
            Spaceship ship = simulation.getShip();

            // захватываем 6 рукояток
            ship.grabLevers(java.util.Arrays.asList(0, 1, 2, 3, 4, 5));
            assertEquals(6, ship.getMainPanel().getGrabbedLevers().size());

            // освобождаем половину
            ship.releaseHalfLevers();
            assertEquals(3, ship.getMainPanel().getGrabbedLevers().size());
        }

        @Test
        @DisplayName("движение корабля при работающих двигателях")
        void testShipMovement()
        {
            Spaceship ship = simulation.getShip();

            // захватываем рукоятку forward
            ship.grabLevers(java.util.Arrays.asList(0));

            // запускаем двигатели
            ship.startEngines();

            // движемся
            ship.move();

            // корабль должен был переместиться
            assertTrue(ship.getSpeed() > 0);
        }
    }

    @Nested
    @DisplayName("тесты пилота (Pilot)")
    class PilotTests
    {
        @Test
        @DisplayName("имя пилота")
        void testPilotName()
        {
            assertEquals("Ford", simulation.getPilot().getName());
        }

        @Test
        @DisplayName("пилот на корабле")
        void testPilotOnShip()
        {
            assertNotNull(simulation.getPilot().getCurrentShip());
            assertEquals(simulation.getShip(), simulation.getPilot().getCurrentShip());
        }

        @Test
        @DisplayName("пилот захватывает рукоятки")
        void testPilotGrabLevers()
        {
            simulation.getPilot().grabLevers(java.util.Arrays.asList(0, 1));
            assertEquals(2, simulation.getShip().getMainPanel().getGrabbedLevers().size());
        }

        @Test
        @DisplayName("пилот отпускает половину рукояток")
        void testPilotReleaseHalfLevers()
        {
            simulation.getPilot().grabLevers(java.util.Arrays.asList(0, 1, 2, 3));
            simulation.getPilot().releaseHalfLevers();
            assertEquals(2, simulation.getShip().getMainPanel().getGrabbedLevers().size());
        }

        @Test
        @DisplayName("пилот запускает двигатели")
        void testPilotStartEngines()
        {
            simulation.getPilot().grabLevers(java.util.Arrays.asList(0));
            simulation.getPilot().startEngines();

            boolean hasActiveEngine = false;
            for (Engine e : simulation.getShip().getEngines())
            {
                if (e.isActive())
                {
                    hasActiveEngine = true;
                    break;
                }
            }
            assertTrue(hasActiveEngine);
        }
    }

    @Nested
    @DisplayName("интеграционные тесты сценария")
    class ScenarioTests
    {
        @Test
        @DisplayName("после сценария корабль развернут")
        void testShipTurnedAfterScenario()
        {
            simulation.executeScenario();

            assertEquals(Direction.BACKWARD,
                simulation.getShip().getFacingDirection());
        }

        @Test
        @DisplayName("после сценария половина рукояток освобождена")
        void testHalfLeversReleasedAfterScenario()
        {
            simulation.executeScenario();

            int grabbedCount = simulation.getShip().getMainPanel().getGrabbedLevers().size();
            assertTrue(grabbedCount < 6, "должно остаться меньше 6 рукояток");
        }

        @Test
        @DisplayName("ракеты существуют")
        void testRocketsExist()
        {
            assertEquals(3, simulation.getRockets().size());
        }

        @Test
        @DisplayName("столкновение с ракетой")
        void testCollisionDetection()
        {
            Spaceship ship = simulation.getShip();
            Rocket rocket = new Rocket(0.5, 0, 0, 10);  // близко к кораблю

            assertTrue(ship.isCollidingWith(rocket));
        }

        @Test
        @DisplayName("нет столкновения с далекой ракетой")
        void testNoCollisionWithFarRocket()
        {
            Spaceship ship = simulation.getShip();
            Rocket rocket = new Rocket(100, 100, 100, 10);  // далеко

            assertFalse(ship.isCollidingWith(rocket));
        }
    }

    @Nested
    @DisplayName("тесты граничных значений")
    class BoundaryTests
    {
        @Test
        @DisplayName("захват несуществующей рукоятки")
        void testGrabNonExistentLever()
        {
            // не должно вызывать исключений
            simulation.getShip().grabLevers(java.util.Arrays.asList(100, 200));
        }

        @Test
        @DisplayName("освобождение когда нет захваченных")
        void testReleaseWhenNoneGrabbed()
        {
            // не должно вызывать исключений
            simulation.getShip().releaseHalfLevers();
            assertEquals(0, simulation.getShip().getMainPanel().getGrabbedLevers().size());
        }

        @Test
        @DisplayName("освобождение нечетного количества рукояток")
        void testReleaseOddNumberOfLevers()
        {
            simulation.getShip().grabLevers(java.util.Arrays.asList(0, 1, 2, 3, 4));
            assertEquals(5, simulation.getShip().getMainPanel().getGrabbedLevers().size());

            simulation.getShip().releaseHalfLevers();
            // 5 / 2 = 2 освобождено, осталось 3
            assertEquals(3, simulation.getShip().getMainPanel().getGrabbedLevers().size());
        }

        @Test
        @DisplayName("тяга двигателя = 0")
        void testZeroThrust()
        {
            Engine engine = new Engine(Direction.FORWARD);
            engine.start();
            engine.run(0);
            assertEquals(EngineState.IDLE, engine.getState());
        }

        @Test
        @DisplayName("тяга двигателя = 100 (граница)")
        void testMaxThrust()
        {
            Engine engine = new Engine(Direction.FORWARD);
            engine.start();
            engine.run(100);
            assertEquals(EngineState.RUNNING, engine.getState());
            assertEquals(100, engine.getThrust());
        }

        @Test
        @DisplayName("тяга двигателя = 101 (перегрузка)")
        void testOverloadThrust()
        {
            Engine engine = new Engine(Direction.FORWARD);
            engine.start();
            engine.run(101);
            assertEquals(EngineState.OVERLOAD, engine.getState());
        }
    }

    @Nested
    @DisplayName("тесты покрытия состояний")
    class StateCoverageTests
    {
        @Test
        @DisplayName("все состояния двигателя протестированы")
        void testAllEngineStates()
        {
            // OFF
            Engine engine1 = new Engine(Direction.FORWARD);
            assertEquals(EngineState.OFF, engine1.getState());

            // IDLE
            Engine engine2 = new Engine(Direction.FORWARD);
            engine2.start();
            assertEquals(EngineState.IDLE, engine2.getState());

            // RUNNING
            Engine engine3 = new Engine(Direction.FORWARD);
            engine3.start();
            engine3.run(50);
            assertEquals(EngineState.RUNNING, engine3.getState());

            // OVERLOAD
            Engine engine4 = new Engine(Direction.FORWARD);
            engine4.start();
            engine4.run(200);
            assertEquals(EngineState.OVERLOAD, engine4.getState());
        }

        @Test
        @DisplayName("все направления протестированы")
        void testAllDirections()
        {
            for (Direction dir : Direction.values())
            {
                assertNotNull(dir);
                assertNotNull(dir.opposite());
            }
        }
    }

    @Nested
    @DisplayName("тесты покрытия состояний")
    class UncoveredMethodsTests
    {
        @Test
        @DisplayName("возврат пустой панели контроля")
        void ReurnEmptyControlPanel()
        {
            Spaceship ship = new Spaceship(0,0,0);

            ControlPanel emptyPanel = ship.getMainPanel();
            assertNull(emptyPanel);
        }

        @Test
        @DisplayName("проверка того что может вернуться null при хвате за рукоятки")
        void testNullControlPanel()
        {
            Spaceship ship = new Spaceship(0,0,0);
            List<Integer> leverIndices = java.util.Arrays.asList(0, 1, 2);

            ship.grabLevers(leverIndices);
            ControlPanel emptyPanel = ship.getMainPanel();
            assertNull(emptyPanel);
        }

        @Test
        @DisplayName("проверка того что может вернуться null при отпускании половины рукояток")
        void testNullControlPanelAfterReleasingHalf()
        {
            Spaceship ship = new Spaceship(0,0,0);

            ship.releaseHalfLevers();
            ControlPanel emptyPanel = ship.getMainPanel();
            assertNull(emptyPanel);
        }

        @Test
        @DisplayName("проверка того что может вернуться null при запуске двигателей на основе захваченных рукояток")
        void testNullControlPanelStartEngines()
        {
            Spaceship ship = new Spaceship(0,0,0);

            ship.startEngines();
            ControlPanel emptyPanel = ship.getMainPanel();
            assertNull(emptyPanel);
        }

        @Test
        @DisplayName("проверка количества толкающих двигателей мнеьше 0")
        void testNegativeThrust()
        {
            Spaceship ship = new Spaceship(0,0,0);

            ship.move();
            
            assertTrue(ship.getSpeed() >= 0, "скорость не может быть отрицательной");
        }

        @Test
        @DisplayName("default ветка - направления FORWARD_LEFT и др.")
        void testMoveDefaultBranch()
        {
            Spaceship ship = new Spaceship(0, 0, 0);
            
            Engine engine1 = new Engine(Direction.FORWARD_LEFT);
            engine1.start();
            engine1.run(50);
            
            ship.addEngine(engine1);
            
            ship.move();

            assertTrue(ship.getSpeed() > 0);
        }

        @Test
        @DisplayName("тест возвращение рукояток")
        void testGetLevers()
        {
            ControlPanel panel = new ControlPanel();
            panel.addLever(new Lever("forward", Direction.FORWARD));
            assertNotNull(panel.getLevers());
        }
    }
}
