import java.util.*;

public abstract class Node
{
    List<Integer> keys = new ArrayList<>();
    boolean isLeaf;

    Node(boolean isLeaf)
    {
        this.isLeaf = isLeaf;
    }
}