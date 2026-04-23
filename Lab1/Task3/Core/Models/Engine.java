package Models;
// двигатель

import Enums.Direction;
import Enums.EngineState;

public class Engine
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
        state = EngineState.IDLE;
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