package Models;
import java.util.*;

// пульт управления
public class ControlPanel
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