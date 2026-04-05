package Models;
// рукоятка

import Enums.Direction;

public class Lever
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