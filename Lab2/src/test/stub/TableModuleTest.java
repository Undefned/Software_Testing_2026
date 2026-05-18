package stub;

import org.junit.jupiter.api.Test;

import java.util.LinkedHashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class TableModuleTest {

    @Test
    void shouldUseDefaultLookupEpsilonConstructor() {
        TableModule tableModule = new TableModule(Map.of(1.0, 2.5));

        assertEquals(2.5, tableModule.calculate(1.0));
    }

    @Test
    void shouldReturnExactValueFromTable() {
        TableModule tableModule = new TableModule(Map.of(1.0, 2.5, 2.0, 5.0), 1.0E-6);

        assertEquals(2.5, tableModule.calculate(1.0));
        assertEquals(5.0, tableModule.calculate(2.0));
    }

    @Test
    void shouldFindNearestValueWithinLookupEpsilon() {
        TableModule tableModule = new TableModule(Map.of(1.0, 10.0, 1.0005, 20.0), 1.0E-3);

        assertEquals(10.0, tableModule.calculate(1.0001));
        assertEquals(20.0, tableModule.calculate(1.00049));
    }

    @Test
    void shouldChooseClosestEntryWhenMultipleValuesAreWithinEpsilon() {
        TableModule tableModule = new TableModule(Map.of(1.0, 10.0, 1.0004, 20.0), 1.0E-3);

        assertEquals(20.0, tableModule.calculate(1.00035));
    }

    @Test
    void shouldRejectUnknownPoints() {
        TableModule tableModule = new TableModule(Map.of(1.0, 2.0), 1.0E-6);

        assertThrows(IllegalArgumentException.class, () -> tableModule.calculate(1.1));
    }

    @Test
    void shouldRejectInvalidConstructorArguments() {
        assertThrows(IllegalArgumentException.class, () -> new TableModule(null, 1.0E-6));
        assertThrows(IllegalArgumentException.class, () -> new TableModule(Map.of(), 1.0E-6));
        assertThrows(IllegalArgumentException.class, () -> new TableModule(Map.of(1.0, 2.0), 0.0));
        assertThrows(IllegalArgumentException.class, () -> new TableModule(Map.of(1.0, 2.0), -1.0E-6));
        assertThrows(IllegalArgumentException.class, () -> new TableModule(Map.of(1.0, 2.0), Double.NaN));
        assertThrows(IllegalArgumentException.class, () -> new TableModule(Map.of(1.0, 2.0), Double.POSITIVE_INFINITY));
        assertThrows(IllegalArgumentException.class, () -> new TableModule(Map.of(Double.NaN, 2.0), 1.0E-6));
        assertThrows(IllegalArgumentException.class, () -> new TableModule(Map.of(1.0, Double.POSITIVE_INFINITY), 1.0E-6));

        LinkedHashMap<Double, Double> nullKey = new LinkedHashMap<>();
        nullKey.put(null, 1.0);
        assertThrows(IllegalArgumentException.class, () -> new TableModule(nullKey, 1.0E-6));

        LinkedHashMap<Double, Double> nullValue = new LinkedHashMap<>();
        nullValue.put(1.0, null);
        assertThrows(IllegalArgumentException.class, () -> new TableModule(nullValue, 1.0E-6));

        LinkedHashMap<Double, Double> infiniteKey = new LinkedHashMap<>();
        infiniteKey.put(Double.NEGATIVE_INFINITY, 1.0);
        assertThrows(IllegalArgumentException.class, () -> new TableModule(infiniteKey, 1.0E-6));

        LinkedHashMap<Double, Double> nanValue = new LinkedHashMap<>();
        nanValue.put(1.0, Double.NaN);
        assertThrows(IllegalArgumentException.class, () -> new TableModule(nanValue, 1.0E-6));
    }

    @Test
    void shouldRejectInvalidLookupArgument() {
        TableModule tableModule = new TableModule(Map.of(1.0, 2.0), 1.0E-6);

        assertThrows(IllegalArgumentException.class, () -> tableModule.calculate(Double.NaN));
        assertThrows(IllegalArgumentException.class, () -> tableModule.calculate(Double.NEGATIVE_INFINITY));
    }
}
