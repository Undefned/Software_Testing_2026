// листовой узел
public class LeafNode extends Node
{
    LeafNode next;  // ссылка на следующий лист

    LeafNode()
    {
        super(true);
    }
}