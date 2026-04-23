// 3. Сформировать доменную модель для заданного текста.  
// Разработать тестовое покрытие для данной доменной модели

// Форд подскочил к пультам; он смог догадаться о назначении 
// некоторых рукояток и схватился за них. Корабль затрясло оттого, 
// что его двигатели с визгом начали толкать его одновременно во всех направлениях. 
// Форд отпустил половину рукояток и корабль, описав крутую дугу, 
// развернулся кругом и направился навстречу ракетам.

import java.util.*;

import Enums.Direction;
import Models.ControlPanel;
import Models.Engine;
import Models.Lever;
import Models.Pilot;
import Models.Rocket;
import Models.Spaceship;

public class Main
{
    private Spaceship ship;
    private Pilot pilot;
    private List<Rocket> rockets;

    // public static void main(String[] args)
    // {
    //     Main sim = new Main();
    //     System.out.println("=== сценарий управления кораблем ===\n");
    //     System.out.println(sim.executeScenario());
    // }

    
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

    // геттеры
    public Spaceship getShip() { return ship; }
    public Pilot getPilot() { return pilot; }
    public List<Rocket> getRockets() { return rockets; }
}
