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
        currentShip.grabLevers(leverIndices);
    }

    public void releaseHalfLevers()
    {
        currentShip.releaseHalfLevers();
    }

    public void startEngines()
    {
        currentShip.startEngines();
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