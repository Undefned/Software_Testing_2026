package Enums;
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