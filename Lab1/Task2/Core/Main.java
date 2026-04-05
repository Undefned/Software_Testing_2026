// 2. Провести модульное тестирование указанного алгоритма. 
// Для этого выбрать характерные точки внутри алгоритма, 
// и для предложенных самостоятельно наборов исходных данных 
// записать последовательность попадания в характерные точки. 
// Сравнить последовательность попадания с эталонной.

// Программный модуль для работы с B+ деревьями 
// (максимальное количество элементов в ключе - 7, 
// http://www.cs.usfca.edu/~galles/visualization/BPlusTree.html)

import java.util.*;

public class Main
{
    // список для записи последовательности характерных точек
    public List<Integer> checkpoints = new ArrayList<>();

    private static final int MAXDEGREE = 8;  // максимальное число потомков
    private static final int MAX_KEYS = MAXDEGREE - 1;  // ключей максимум

    private Node root;
    public static void main(String[] args)
    {
        Main tree = new Main();
        
        System.out.println("=== вставка 1, 2, 3 ===");
        tree.insert(1);
        System.out.println("checkpoints: " + tree.getCheckpoints());
        
        tree.insert(2);
        System.out.println("checkpoints: " + tree.getCheckpoints());
        
        tree.insert(3);
        System.out.println("checkpoints: " + tree.getCheckpoints());
        
        tree.print();
        
        System.out.println("\n=== поиск 2 ===");
        boolean found = tree.search(2);
        System.out.println("найдено: " + found);
        System.out.println("checkpoints: " + tree.getCheckpoints());
        
        System.out.println("\n=== поиск 100 ===");
        found = tree.search(100);
        System.out.println("найдено: " + found);
        System.out.println("checkpoints: " + tree.getCheckpoints());
    }

    public Main()
    {
        root = null;
    }

    // публичный метод вставки
    public void insert(int key)
    {
        checkpoints.clear();
        
        if (root == null)
        {
            // создаем первый лист
            LeafNode leaf = new LeafNode();
            leaf.keys.add(key);
            root = leaf;
            checkpoints.add(Checkpoint.INSERT_TO_LEAF);
            checkpoints.add(Checkpoint.INSERT_DONE);
            return;
        }

        // ищем лист для вставки
        LeafNode leaf = findLeaf(key);
        
        // вставляем ключ в лист
        insertIntoLeaf(leaf, key);
        
        checkpoints.add(Checkpoint.INSERT_DONE);
    }

    // поиск листового узла для ключа
    private LeafNode findLeaf(int key)
    {
        checkpoints.add(Checkpoint.SEARCH_START);
        
        Node current = root;
        
        while (!current.isLeaf)
        {
            InternalNode internal = (InternalNode) current;
            int i = 0;
            
            // ищем подходящий child
            while (i < internal.keys.size() && key >= internal.keys.get(i))
            {
                i++;
            }
            
            if (i == 0)
            {
                checkpoints.add(Checkpoint.SEARCH_GO_LEFT);
            }
            else
            {
                checkpoints.add(Checkpoint.SEARCH_GO_RIGHT);
            }
            
            current = internal.children.get(i);
        }
        
        return (LeafNode) current;
    }

    // вставка ключа в лист
    private void insertIntoLeaf(LeafNode leaf, int key)
    {
        // если ключ уже есть - не вставляем
        if (leaf.keys.contains(key))
        {
            checkpoints.add(Checkpoint.SEARCH_FOUND);
            return;
        }
        
        // находим позицию для вставки
        int pos = 0;
        while (pos < leaf.keys.size() && leaf.keys.get(pos) < key)
        {
            pos++;
        }
        
        leaf.keys.add(pos, key);
        checkpoints.add(Checkpoint.INSERT_TO_LEAF);
        
        // проверяем на переполнение
        if (leaf.keys.size() > MAX_KEYS)
        {
            splitLeaf(leaf);
        }
        else
        {
            checkpoints.add(Checkpoint.SEARCH_NOT_FOUND);
        }
    }

    // сплит листового узла
    private void splitLeaf(LeafNode leaf)
    {
        checkpoints.add(Checkpoint.LEAF_SPLIT);
        
        int mid = leaf.keys.size() / 2;
        
        // создаем новый лист
        LeafNode newLeaf = new LeafNode();
        
        // перемещаем половину ключей в новый лист
        for (int i = mid; i < leaf.keys.size(); i++)
        {
            newLeaf.keys.add(leaf.keys.get(i));
        }
        
        // удаляем перемещенные ключи из старого листа
        for (int i = leaf.keys.size() - 1; i >= mid; i--)
        {
            leaf.keys.remove(i);
        }
        
        // связываем листы
        newLeaf.next = leaf.next;
        leaf.next = newLeaf;
        
        // продвигаем ключ вверх
        int promoteKey = newLeaf.keys.get(0);
        checkpoints.add(Checkpoint.PROMOTE_KEY);
        
        if (root == leaf)
        {
            // сплит корня - создаем новый корень
            InternalNode newRoot = new InternalNode();
            newRoot.keys.add(promoteKey);
            newRoot.children.add(leaf);
            newRoot.children.add(newLeaf);
            root = newRoot;
            checkpoints.add(Checkpoint.ROOT_SPLIT);
        }
        else
        {
            // вставляем в родительский узел
            insertIntoParent(leaf, promoteKey, newLeaf);
        }
    }

    // вставка в родительский узел после сплита
    private void insertIntoParent(Node left, int key, Node right)
    {
        Node parent = findParent(root, left);
        
        if (parent == null)
        {
            return;
        }
        
        InternalNode internal = (InternalNode) parent;
        
        // находим позицию для вставки
        int pos = 0;
        while (pos < internal.keys.size() && internal.keys.get(pos) < key)
        {
            pos++;
        }
        
        internal.keys.add(pos, key);
        
        // находим позицию left и вставляем right после него
        int childPos = internal.children.indexOf(left);
        internal.children.add(childPos + 1, right);
        
        checkpoints.add(Checkpoint.PROMOTE_KEY);
        
        // проверяем на переполнение
        if (internal.keys.size() > MAX_KEYS)
        {
            splitInternal(internal);
        }
    }

    // поиск родителя узла
    private Node findParent(Node current, Node target)
    {
        if (current.isLeaf || current == target)
        {
            return null;
        }
        
        InternalNode internal = (InternalNode) current;
        
        for (Node child : internal.children)
        {
            if (child == target)
            {
                return current;
            }
            
            if (!child.isLeaf)
            {
                Node result = findParent(child, target);
                if (result != null)
                {
                    return result;
                }
            }
        }
        
        return null;
    }

    // сплит внутреннего узла
    private void splitInternal(InternalNode node)
    {
        checkpoints.add(Checkpoint.INTERNAL_SPLIT);
        
        int mid = node.keys.size() / 2;
        int promotePos = mid;
        
        // создаем новый узел
        InternalNode newNode = new InternalNode();
        
        // ключ для продвижения
        int promoteKey = node.keys.get(mid);
        
        // перемещаем ключи и детей в новый узел
        for (int i = mid + 1; i < node.keys.size(); i++)
        {
            newNode.keys.add(node.keys.get(i));
        }
        
        for (int i = mid + 1; i < node.children.size(); i++)
        {
            newNode.children.add(node.children.get(i));
        }
        
        // удаляем перемещенные из старого узла
        for (int i = node.keys.size() - 1; i > mid; i--)
        {
            node.keys.remove(i);
        }
        
        for (int i = node.children.size() - 1; i > mid; i--)
        {
            node.children.remove(i);
        }
        
        // удаляем продвигаемый ключ из старого узла
        node.keys.remove(promotePos);
        
        checkpoints.add(Checkpoint.PROMOTE_KEY);
        
        if (root == node)
        {
            // сплит корня
            InternalNode newRoot = new InternalNode();
            newRoot.keys.add(promoteKey);
            newRoot.children.add(node);
            newRoot.children.add(newNode);
            root = newRoot;
            checkpoints.add(Checkpoint.ROOT_SPLIT);
        }
        else
        {
            insertIntoParent(node, promoteKey, newNode);
        }
    }

    // поиск ключа
    public boolean search(int key)
    {
        checkpoints.clear();
        
        if (root == null)
        {
            checkpoints.add(Checkpoint.SEARCH_START);
            checkpoints.add(Checkpoint.SEARCH_NOT_FOUND);
            return false;
        }
        
        Node current = root;
        
        while (!current.isLeaf)
        {
            InternalNode internal = (InternalNode) current;
            int i = 0;
            
            while (i < internal.keys.size() && key >= internal.keys.get(i))
            {
                i++;
            }
            
            if (i == 0)
            {
                checkpoints.add(Checkpoint.SEARCH_GO_LEFT);
            }
            else
            {
                checkpoints.add(Checkpoint.SEARCH_GO_RIGHT);
            }
            
            current = internal.children.get(i);
        }
        
        // поиск в листе
        checkpoints.add(Checkpoint.SEARCH_START);
        
        for (int k : current.keys)
        {
            if (k == key)
            {
                checkpoints.add(Checkpoint.SEARCH_FOUND);
                return true;
            }
        }
        
        checkpoints.add(Checkpoint.SEARCH_NOT_FOUND);
        return false;
    }

    // вывод дерева
    public void print()
    {
        printNode(root, 0);
    }

    private void printNode(Node node, int level)
    {
        String indent = "  ".repeat(level);
        
        if (node.isLeaf)
        {
            System.out.println(indent + "Leaf: " + node.keys);
        }
        else
        {
            InternalNode internal = (InternalNode) node;
            System.out.println(indent + "Internal: " + internal.keys);
            
            for (Node child : internal.children)
            {
                printNode(child, level + 1);
            }
        }
    }

    // получение последовательности характерных точек
    public List<Integer> getCheckpoints()
    {
        return new ArrayList<>(checkpoints);
    }
}
