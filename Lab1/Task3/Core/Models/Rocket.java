package Models;
// ракета (угроза)
public class Rocket
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