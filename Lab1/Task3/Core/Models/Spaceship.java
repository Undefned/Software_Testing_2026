package Models;
import java.util.*;

import Enums.Direction;

// корабль
public class Spaceship
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