import java.util.*;

// внутренний узел
public class InternalNode extends Node
{
    List<Node> children = new ArrayList<>();

    InternalNode()
    {
        super(false);
    }
}