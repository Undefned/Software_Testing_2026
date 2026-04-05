package Models;
import java.util.*;

// пилот форд
public class Pilot
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