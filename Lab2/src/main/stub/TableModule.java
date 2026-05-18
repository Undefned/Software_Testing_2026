package lab2.stub;

import lab2.common.MathModule;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Табличная реализация модуля для поэтапной интеграции системы.
 */
public class TableModule implements MathModule {
    private static final double DEFAULT_LOOKUP_EPSILON = 1.0E-9;

    private final Map<Double, Double> table;
    private final double lookupEpsilon;

    /**
     * Создает табличный модуль с допуском поиска по умолчанию.
     *
     * @param table таблица известных пар аргумент-значение
     */
    public TableModule(Map<Double, Double> table) {
        this(table, DEFAULT_LOOKUP_EPSILON);
    }

    /**
     * Создает табличный модуль с пользовательским допуском поиска.
     *
     * @param table таблица известных пар аргумент-значение
     * @param lookupEpsilon максимально допустимое расстояние до сохраненного аргумента
     */
    public TableModule(Map<Double, Double> table, double lookupEpsilon) {
        if (table == null || table.isEmpty()) {
            throw new IllegalArgumentException("table must not be null or empty");
        }
        if (!Double.isFinite(lookupEpsilon) || lookupEpsilon <= 0.0) {
            throw new IllegalArgumentException("lookupEpsilon must be a positive finite number");
        }

        LinkedHashMap<Double, Double> copiedTable = new LinkedHashMap<>();
        for (Map.Entry<Double, Double> entry : table.entrySet()) {
            Double x = entry.getKey();
            Double y = entry.getValue();

            if (x == null || y == null || !Double.isFinite(x) || !Double.isFinite(y)) {
                throw new IllegalArgumentException("table entries must contain finite non-null numbers");
            }

            copiedTable.put(x, y);
        }

        this.table = Map.copyOf(copiedTable);
        this.lookupEpsilon = lookupEpsilon;
    }

    /**
     * Находит ближайшее табличное значение для заданного аргумента.
     *
     * @param x аргумент, который нужно найти в таблице
     * @return табличное значение для подходящей точки
     */
    @Override
    public double calculate(double x) {
        if (!Double.isFinite(x)) {
            throw new IllegalArgumentException("x must be finite");
        }

        Double bestValue = null;
        double bestDistance = Double.POSITIVE_INFINITY;

        for (Map.Entry<Double, Double> entry : table.entrySet()) {
            double distance = Math.abs(entry.getKey() - x);
            if (distance <= lookupEpsilon && distance < bestDistance) {
                bestDistance = distance;
                bestValue = entry.getValue();
            }
        }

        if (bestValue == null) {
            throw new IllegalArgumentException("No tabulated value found for x = " + x);
        }

        return bestValue;
    }
}
