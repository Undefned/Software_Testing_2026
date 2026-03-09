// Сформировать доменную модель для заданного текста.  
// Разработать тестовое покрытие для данной доменной модели

// Форд подскочил к пультам; он смог догадаться о назначении 
// некоторых рукояток и схватился за них. Корабль затрясло оттого, 
// что его двигатели с визгом начали толкать его одновременно во всех направлениях. 
// Форд отпустил половину рукояток и корабль, описав крутую дугу, 
// развернулся кругом и направился навстречу ракетам.

import java.util.*;

public class Main
{
    // ==================== доменные классы ====================

    // направление движения
    public enum Direction
    {
        FORWARD, BACKWARD, LEFT, RIGHT, UP, DOWN,
        FORWARD_LEFT, FORWARD_RIGHT, BACKWARD_LEFT, BACKWARD_RIGHT;

        // получить противоположное направление
        public Direction opposite()
        {
            return switch (this)
            {
                case FORWARD -> BACKWARD;
                case BACKWARD -> FORWARD;
                case LEFT -> RIGHT;
                case RIGHT -> LEFT;
                case UP -> DOWN;
                case DOWN -> UP;
                case FORWARD_LEFT -> BACKWARD_RIGHT;
                case FORWARD_RIGHT -> BACKWARD_LEFT;
                case BACKWARD_LEFT -> FORWARD_RIGHT;
                case BACKWARD_RIGHT -> FORWARD_LEFT;
            };
        }
    }

    // состояние двигателя
    public enum EngineState
    {
        OFF, IDLE, RUNNING, OVERLOAD
    }

    // рукоятка управления
    public static class Lever
    {
        private String name;
        private boolean isGrabbed;
        private Direction controlledDirection;

        public Lever(String name, Direction direction)
        {
            this.name = name;
            this.isGrabbed = false;
            this.controlledDirection = direction;
        }

        public void grab()
        {
            isGrabbed = true;
        }

        public void release()
        {
            isGrabbed = false;
        }

        public boolean isGrabbed()
        {
            return isGrabbed;
        }

        public Direction getDirection()
        {
            return controlledDirection;
        }

        public String getName()
        {
            return name;
        }
    }

    // пульт управления
    public static class ControlPanel
    {
        private List<Lever> levers;
        private boolean isActive;

        public ControlPanel()
        {
            this.levers = new ArrayList<>();
            this.isActive = true;
        }

        public void addLever(Lever lever)
        {
            levers.add(lever);
        }

        public List<Lever> getLevers()
        {
            return levers;
        }

        public Lever getLever(int index)
        {
            if (index >= 0 && index < levers.size())
            {
                return levers.get(index);
            }
            return null;
        }

        public int getLeverCount()
        {
            return levers.size();
        }

        public List<Lever> getGrabbedLevers()
        {
            List<Lever> grabbed = new ArrayList<>();
            for (Lever lever : levers)
            {
                if (lever.isGrabbed())
                {
                    grabbed.add(lever);
                }
            }
            return grabbed;
        }

        public void releaseAll()
        {
            for (Lever lever : levers)
            {
                lever.release();
            }
        }
    }

    // двигатель
    public static class Engine
    {
        private EngineState state;
        private int thrust;
        private Direction direction;

        public Engine(Direction direction)
        {
            this.state = EngineState.OFF;
            this.thrust = 0;
            this.direction = direction;
        }

        public void start()
        {
            if (state == EngineState.OFF)
            {
                state = EngineState.IDLE;
            }
        }

        public void run(int thrust)
        {
            if (thrust > 100)
            {
                state = EngineState.OVERLOAD;
                this.thrust = 100;
            }
            else if (thrust > 0)
            {
                state = EngineState.RUNNING;
                this.thrust = thrust;
            }
            else
            {
                state = EngineState.IDLE;
                this.thrust = 0;
            }
        }

        public void stop()
        {
            state = EngineState.OFF;
            thrust = 0;
        }

        public EngineState getState()
        {
            return state;
        }

        public int getThrust()
        {
            return thrust;
        }

        public Direction getDirection()
        {
            return direction;
        }

        public boolean isActive()
        {
            return state == EngineState.RUNNING || state == EngineState.OVERLOAD;
        }
    }

    // ракета (угроза)
    public static class Rocket
    {
        private double x, y, z;
        private double speed;
        private boolean isDestroyed;

        public Rocket(double x, double y, double z, double speed)
        {
            this.x = x;
            this.y = y;
            this.z = z;
            this.speed = speed;
            this.isDestroyed = false;
        }

        public void move()
        {
            if (!isDestroyed)
            {
                // ракета движется к кораблю
                x += speed * 0.1;
            }
        }

        public void destroy()
        {
            isDestroyed = true;
        }

        public boolean isDestroyed()
        {
            return isDestroyed;
        }

        public double getDistanceTo(double shipX, double shipY, double shipZ)
        {
            double dx = x - shipX;
            double dy = y - shipY;
            double dz = z - shipZ;
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        }
    }

    // космический корабль
    public static class Spaceship
    {
        private double x, y, z;
        private Direction facingDirection;
        private List<Engine> engines;
        private List<ControlPanel> controlPanels;
        private double speed;

        public Spaceship(double x, double y, double z)
        {
            this.x = x;
            this.y = y;
            this.z = z;
            this.facingDirection = Direction.FORWARD;
            this.engines = new ArrayList<>();
            this.controlPanels = new ArrayList<>();
            this.speed = 0;
        }

        public void addEngine(Engine engine)
        {
            engines.add(engine);
        }

        public void addControlPanel(ControlPanel panel)
        {
            controlPanels.add(panel);
        }

        public List<Engine> getEngines()
        {
            return engines;
        }

        public List<ControlPanel> getControlPanels()
        {
            return controlPanels;
        }

        public ControlPanel getMainPanel()
        {
            if (!controlPanels.isEmpty())
            {
                return controlPanels.get(0);
            }
            return null;
        }

        // форд хватается за рукоятки
        public void grabLevers(List<Integer> leverIndices)
        {
            ControlPanel panel = getMainPanel();
            if (panel != null)
            {
                for (int index : leverIndices)
                {
                    Lever lever = panel.getLever(index);
                    if (lever != null)
                    {
                        lever.grab();
                    }
                }
            }
        }

        // форд отпускает половину рукояток
        public void releaseHalfLevers()
        {
            ControlPanel panel = getMainPanel();
            if (panel != null)
            {
                List<Lever> grabbed = panel.getGrabbedLevers();
                int toRelease = grabbed.size() / 2;

                for (int i = 0; i < toRelease && i < grabbed.size(); i++)
                {
                    grabbed.get(i).release();
                }
            }
        }

        // запуск двигателей на основе захваченных рукояток
        public void startEngines()
        {
            ControlPanel panel = getMainPanel();
            if (panel != null)
            {
                for (Lever lever : panel.getGrabbedLevers())
                {
                    for (Engine engine : engines)
                    {
                        if (engine.getDirection() == lever.getDirection())
                        {
                            engine.start();
                            engine.run(50 + (int)(Math.random() * 50));
                        }
                    }
                }
            }
        }

        // движение корабля
        public void move()
        {
            double totalThrust = 0;
            double dx = 0, dy = 0, dz = 0;

            for (Engine engine : engines)
            {
                if (engine.isActive())
                {
                    totalThrust += engine.getThrust();

                    // упрощенно: каждое направление влияет на координаты
                    switch (engine.getDirection())
                    {
                        case FORWARD -> dz += engine.getThrust();
                        case BACKWARD -> dz -= engine.getThrust();
                        case LEFT -> dx -= engine.getThrust();
                        case RIGHT -> dx += engine.getThrust();
                        case UP -> dy += engine.getThrust();
                        case DOWN -> dy -= engine.getThrust();
                    }
                }
            }

            if (totalThrust > 0)
            {
                x += dx * 0.01;
                y += dy * 0.01;
                z += dz * 0.01;
                speed = totalThrust * 0.1;
            }
        }

        // развернуть корабль (описать дугу)
        public void turnAround()
        {
            facingDirection = facingDirection.opposite();
        }

        // проверка столкновения с ракетой
        public boolean isCollidingWith(Rocket rocket)
        {
            double distance = rocket.getDistanceTo(x, y, z);
            return distance < 1.0;  // радиус столкновения
        }

        public double getX() { return x; }
        public double getY() { return y; }
        public double getZ() { return z; }
        public Direction getFacingDirection() { return facingDirection; }
        public double getSpeed() { return speed; }
    }

    // пилот (форд)
    public static class Pilot
    {
        private String name;
        private Spaceship currentShip;

        public Pilot(String name)
        {
            this.name = name;
        }

        public void boardShip(Spaceship ship)
        {
            currentShip = ship;
        }

        public void grabLevers(List<Integer> leverIndices)
        {
            if (currentShip != null)
            {
                currentShip.grabLevers(leverIndices);
            }
        }

        public void releaseHalfLevers()
        {
            if (currentShip != null)
            {
                currentShip.releaseHalfLevers();
            }
        }

        public void startEngines()
        {
            if (currentShip != null)
            {
                currentShip.startEngines();
            }
        }

        public String getName()
        {
            return name;
        }

        public Spaceship getCurrentShip()
        {
            return currentShip;
        }
    }

    // ==================== основной класс ====================

    private Spaceship ship;
    private Pilot pilot;
    private List<Rocket> rockets;

    public Main()
    {
        rockets = new ArrayList<>();
        initScenario();
    }

    // инициализация сценария из текста
    private void initScenario()
    {
        // создаем корабль
        ship = new Spaceship(0, 0, 0);

        // добавляем двигатели для всех направлений
        for (Direction dir : Direction.values())
        {
            ship.addEngine(new Engine(dir));
        }

        // создаем пульт с рукоятками
        ControlPanel panel = new ControlPanel();

        // добавляем рукоятки (форд смог догадаться о назначении некоторых)
        panel.addLever(new Lever("forward", Direction.FORWARD));
        panel.addLever(new Lever("backward", Direction.BACKWARD));
        panel.addLever(new Lever("left", Direction.LEFT));
        panel.addLever(new Lever("right", Direction.RIGHT));
        panel.addLever(new Lever("up", Direction.UP));
        panel.addLever(new Lever("down", Direction.DOWN));

        ship.addControlPanel(panel);

        // создаем пилота (форд)
        pilot = new Pilot("Ford");
        pilot.boardShip(ship);

        // добавляем ракеты (угроза)
        rockets.add(new Rocket(100, 0, 50, 10));
        rockets.add(new Rocket(-80, 20, 40, 8));
        rockets.add(new Rocket(0, -60, 30, 12));
    }

    // сценарий из текста: форд управляет кораблем
    public String executeScenario()
    {
        StringBuilder log = new StringBuilder();

        // 1. форд подскочил к пультам
        log.append("форд подскочил к пультам\n");

        // 2. схватился за рукоятки
        List<Integer> leversToGrab = Arrays.asList(0, 1, 2, 3, 4, 5);
        pilot.grabLevers(leversToGrab);
        log.append("схватился за ").append(leversToGrab.size()).append(" рукояток\n");

        // 3. двигатели с визгом начали толкать во всех направлениях
        pilot.startEngines();
        int activeEngines = 0;
        for (Engine e : ship.getEngines())
        {
            if (e.isActive()) activeEngines++;
        }
        log.append("двигатели работают: ").append(activeEngines).append("\n");

        // 4. корабль затрясло
        ship.move();
        log.append("корабль движется со скоростью: ").append(ship.getSpeed()).append("\n");

        // 5. форд отпустил половину рукояток
        pilot.releaseHalfLevers();
        int remainingGrabbed = ship.getMainPanel().getGrabbedLevers().size();
        log.append("осталось рукояток: ").append(remainingGrabbed).append("\n");

        // 6. корабль развернулся
        ship.turnAround();
        log.append("корабль развернут, направление: ").append(ship.getFacingDirection()).append("\n");

        // 7. направился навстречу ракетам
        ship.move();
        log.append("корабль направляется навстречу ракетам\n");

        return log.toString();
    }

    // геттеры для тестов
    public Spaceship getShip() { return ship; }
    public Pilot getPilot() { return pilot; }
    public List<Rocket> getRockets() { return rockets; }

    public static void main(String[] args)
    {
        Main sim = new Main();
        System.out.println("=== сценарий управления кораблем ===\n");
        System.out.println(sim.executeScenario());
    }
}
