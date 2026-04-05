public class Checkpoint
{
    public static final int SEARCH_START = 1;      // начало поиска
    public static final int SEARCH_GO_LEFT = 2;    // пошли влево
    public static final int SEARCH_GO_RIGHT = 3;   // пошли вправо
    public static final int SEARCH_FOUND = 4;      // нашли в листе
    public static final int SEARCH_NOT_FOUND = 5;  // не нашли
    public static final int INSERT_TO_LEAF = 6;    // вставка в лист
    public static final int LEAF_SPLIT = 7;        // сплит листа
    public static final int PROMOTE_KEY = 8;       // продвижение ключа вверх
    public static final int INTERNAL_SPLIT = 9;    // сплит внутреннего узла
    public static final int ROOT_SPLIT = 10;       // сплит корня (рост дерева)
    public static final int INSERT_DONE = 11;      // вставка завершена
}