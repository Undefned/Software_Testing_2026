import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

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
            assertEquals(Main.Direction.BACKWARD, Main.Direction.FORWARD.opposite());
            assertEquals(Main.Direction.FORWARD, Main.Direction.BACKWARD.opposite());
        }

        @Test
        @DisplayName("противоположное направление: left <-> right")
        void testOppositeLeftRight()
        {
            assertEquals(Main.Direction.RIGHT, Main.Direction.LEFT.opposite());
            assertEquals(Main.Direction.LEFT, Main.Direction.RIGHT.opposite());
        }

        @Test
        @DisplayName("противоположное направление: up <-> down")
        void testOppositeUpDown()
        {
            assertEquals(Main.Direction.DOWN, Main.Direction.UP.opposite());
            assertEquals(Main.Direction.UP, Main.Direction.DOWN.opposite());
        }

        @Test
        @DisplayName("противоположное направление: диагонали")
        void testOppositeDiagonals()
        {
            assertEquals(Main.Direction.BACKWARD_RIGHT, Main.Direction.FORWARD_LEFT.opposite());
            assertEquals(Main.Direction.BACKWARD_LEFT, Main.Direction.FORWARD_RIGHT.opposite());
        }

        @Test
        @DisplayName("двойное применение opposite возвращает исходное")
        void testDoubleOpposite()
        {
            for (Main.Direction dir : Main.Direction.values())
            {
                assertEquals(dir, dir.opposite().opposite(),
                    "двойное opposite должно вернуть исходное направление");
            }
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
            Main.Lever lever = simulation.getShip().getMainPanel().getLever(0);
            assertNotNull(lever);
            assertFalse(lever.isGrabbed());
        }

        @Test
        @DisplayName("захват рукоятки")
        void testGrabLever()
        {
            Main.Lever lever = simulation.getShip().getMainPanel().getLever(0);
            lever.grab();
            assertTrue(lever.isGrabbed());
        }

        @Test
        @DisplayName("освобождение рукоятки")
        void testReleaseLever()
        {
            Main.Lever lever = simulation.getShip().getMainPanel().getLever(0);
            lever.grab();
            lever.release();
            assertFalse(lever.isGrabbed());
        }

        @Test
        @DisplayName("рукоятка имеет направление")
        void testLeverDirection()
        {
            Main.Lever lever = simulation.getShip().getMainPanel().getLever(0);
            assertEquals(Main.Direction.FORWARD, lever.getDirection());
        }

        @Test
        @DisplayName("рукоятка имеет имя")
        void testLeverName()
        {
            Main.Lever lever = simulation.getShip().getMainPanel().getLever(0);
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
            Main.ControlPanel panel = simulation.getShip().getMainPanel();
            assertEquals(6, panel.getLeverCount());
        }

        @Test
        @DisplayName("получение рукоятки по индексу")
        void testGetLeverByIndex()
        {
            Main.ControlPanel panel = simulation.getShip().getMainPanel();
            assertNotNull(panel.getLever(0));
            assertNotNull(panel.getLever(5));
            assertNull(panel.getLever(10));  // несуществующий индекс
            assertNull(panel.getLever(-1));  // отрицательный индекс
        }

        @Test
        @DisplayName("получение захваченных рукояток")
        void testGetGrabbedLevers()
        {
            Main.ControlPanel panel = simulation.getShip().getMainPanel();

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
            Main.ControlPanel panel = simulation.getShip().getMainPanel();

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
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);
            assertEquals(Main.EngineState.OFF, engine.getState());
            assertEquals(0, engine.getThrust());
        }

        @Test
        @DisplayName("запуск двигателя")
        void testStartEngine()
        {
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);
            engine.start();
            assertEquals(Main.EngineState.IDLE, engine.getState());
        }

        @Test
        @DisplayName("работа двигателя с тягой")
        void testEngineRun()
        {
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);
            engine.start();
            engine.run(50);
            assertEquals(Main.EngineState.RUNNING, engine.getState());
            assertEquals(50, engine.getThrust());
        }

        @Test
        @DisplayName("перегрузка двигателя при тяге > 100")
        void testEngineOverload()
        {
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);
            engine.start();
            engine.run(150);
            assertEquals(Main.EngineState.OVERLOAD, engine.getState());
            assertEquals(100, engine.getThrust());  // ограничено до 100
        }

        @Test
        @DisplayName("остановка двигателя")
        void testStopEngine()
        {
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);
            engine.start();
            engine.run(50);
            engine.stop();
            assertEquals(Main.EngineState.OFF, engine.getState());
            assertEquals(0, engine.getThrust());
        }

        @Test
        @DisplayName("двигатель активен только в состоянии RUNNING или OVERLOAD")
        void testEngineIsActive()
        {
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);

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
            Main.Rocket rocket = new Main.Rocket(0, 0, 0, 10);
            assertFalse(rocket.isDestroyed());
        }

        @Test
        @DisplayName("уничтожение ракеты")
        void testDestroyRocket()
        {
            Main.Rocket rocket = new Main.Rocket(0, 0, 0, 10);
            rocket.destroy();
            assertTrue(rocket.isDestroyed());
        }

        @Test
        @DisplayName("расчет расстояния до точки")
        void testDistanceCalculation()
        {
            Main.Rocket rocket = new Main.Rocket(3, 4, 0, 10);
            double distance = rocket.getDistanceTo(0, 0, 0);
            assertEquals(5.0, distance, 0.001);  // теорема пифагора
        }

        @Test
        @DisplayName("движение ракеты")
        void testRocketMove()
        {
            Main.Rocket rocket = new Main.Rocket(0, 0, 0, 10);
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
            Main.Rocket rocket = new Main.Rocket(0, 0, 0, 10);
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
            Main.Spaceship ship = simulation.getShip();
            assertEquals(0, ship.getX(), 0.001);
            assertEquals(0, ship.getY(), 0.001);
            assertEquals(0, ship.getZ(), 0.001);
        }

        @Test
        @DisplayName("начальное направление корабля")
        void testInitialDirection()
        {
            Main.Spaceship ship = simulation.getShip();
            assertEquals(Main.Direction.FORWARD, ship.getFacingDirection());
        }

        @Test
        @DisplayName("начальная скорость корабля")
        void testInitialSpeed()
        {
            Main.Spaceship ship = simulation.getShip();
            assertEquals(0, ship.getSpeed(), 0.001);
        }

        @Test
        @DisplayName("количество двигателей")
        void testEngineCount()
        {
            Main.Spaceship ship = simulation.getShip();
            // должно быть по одному на каждое направление
            assertEquals(Main.Direction.values().length, ship.getEngines().size());
        }

        @Test
        @DisplayName("разворот корабля")
        void testTurnAround()
        {
            Main.Spaceship ship = simulation.getShip();
            assertEquals(Main.Direction.FORWARD, ship.getFacingDirection());

            ship.turnAround();
            assertEquals(Main.Direction.BACKWARD, ship.getFacingDirection());
        }

        @Test
        @DisplayName("захват рукояток пилотом")
        void testGrabLevers()
        {
            Main.Spaceship ship = simulation.getShip();
            ship.grabLevers(java.util.Arrays.asList(0, 1, 2));

            assertEquals(3, ship.getMainPanel().getGrabbedLevers().size());
        }

        @Test
        @DisplayName("освобождение половины рукояток")
        void testReleaseHalfLevers()
        {
            Main.Spaceship ship = simulation.getShip();

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
            Main.Spaceship ship = simulation.getShip();

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
            for (Main.Engine e : simulation.getShip().getEngines())
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
        @DisplayName("полный сценарий из текста")
        void testFullScenario()
        {
            String log = simulation.executeScenario();

            // проверяем что сценарий выполнился
            assertTrue(log.contains("форд подскочил к пультам"));
            assertTrue(log.contains("схватился за"));
            assertTrue(log.contains("двигатели работают"));
            assertTrue(log.contains("корабль движется"));
            assertTrue(log.contains("осталось рукояток"));
            assertTrue(log.contains("корабль развернут"));
            assertTrue(log.contains("направляется навстречу ракетам"));
        }

        @Test
        @DisplayName("после сценария корабль развернут")
        void testShipTurnedAfterScenario()
        {
            simulation.executeScenario();

            assertEquals(Main.Direction.BACKWARD,
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
            Main.Spaceship ship = simulation.getShip();
            Main.Rocket rocket = new Main.Rocket(0.5, 0, 0, 10);  // близко к кораблю

            assertTrue(ship.isCollidingWith(rocket));
        }

        @Test
        @DisplayName("нет столкновения с далекой ракетой")
        void testNoCollisionWithFarRocket()
        {
            Main.Spaceship ship = simulation.getShip();
            Main.Rocket rocket = new Main.Rocket(100, 100, 100, 10);  // далеко

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
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);
            engine.start();
            engine.run(0);
            assertEquals(Main.EngineState.IDLE, engine.getState());
        }

        @Test
        @DisplayName("тяга двигателя = 100 (граница)")
        void testMaxThrust()
        {
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);
            engine.start();
            engine.run(100);
            assertEquals(Main.EngineState.RUNNING, engine.getState());
            assertEquals(100, engine.getThrust());
        }

        @Test
        @DisplayName("тяга двигателя = 101 (перегрузка)")
        void testOverloadThrust()
        {
            Main.Engine engine = new Main.Engine(Main.Direction.FORWARD);
            engine.start();
            engine.run(101);
            assertEquals(Main.EngineState.OVERLOAD, engine.getState());
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
            Main.Engine engine1 = new Main.Engine(Main.Direction.FORWARD);
            assertEquals(Main.EngineState.OFF, engine1.getState());

            // IDLE
            Main.Engine engine2 = new Main.Engine(Main.Direction.FORWARD);
            engine2.start();
            assertEquals(Main.EngineState.IDLE, engine2.getState());

            // RUNNING
            Main.Engine engine3 = new Main.Engine(Main.Direction.FORWARD);
            engine3.start();
            engine3.run(50);
            assertEquals(Main.EngineState.RUNNING, engine3.getState());

            // OVERLOAD
            Main.Engine engine4 = new Main.Engine(Main.Direction.FORWARD);
            engine4.start();
            engine4.run(200);
            assertEquals(Main.EngineState.OVERLOAD, engine4.getState());
        }

        @Test
        @DisplayName("все направления протестированы")
        void testAllDirections()
        {
            for (Main.Direction dir : Main.Direction.values())
            {
                assertNotNull(dir);
                assertNotNull(dir.opposite());
            }
        }
    }
}
