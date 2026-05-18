package csv;

import common.MathModule;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

/**
 * Экспортирует значения математического модуля в CSV-файл.
 */
public class CsvExporter {
    /**
     * Записывает значения модуля на указанном диапазоне в CSV-файл.
     *
     * @param module модуль, который нужно вычислять
     * @param startX начальное значение диапазона
     * @param endX конечное значение диапазона
     * @param step шаг вычисления
     * @param outputPath путь к выходному CSV-файлу
     * @param headerName имя заголовка второго столбца
     * @throws IOException если файл не удалось записать
     */
    public void export(
            MathModule module,
            double startX,
            double endX,
            double step,
            String outputPath,
            String headerName
    ) throws IOException {
        if (module == null) {
            throw new IllegalArgumentException("module must not be null");
        }
        if (!Double.isFinite(startX) || !Double.isFinite(endX) || !Double.isFinite(step)) {
            throw new IllegalArgumentException("range arguments must be finite");
        }
        if (step <= 0.0) {
            throw new IllegalArgumentException("step must be positive");
        }
        if (endX < startX) {
            throw new IllegalArgumentException("endX must be greater than or equal to startX");
        }
        if (outputPath == null || outputPath.isBlank()) {
            throw new IllegalArgumentException("outputPath must not be blank");
        }
        if (headerName == null || headerName.isBlank()) {
            throw new IllegalArgumentException("headerName must not be blank");
        }

        Path path = Paths.get(outputPath);
        Path parent = path.getParent();
        if (parent != null) {
            Files.createDirectories(parent);
        }

        List<String> lines = new ArrayList<>();
        lines.add("X;" + headerName);

        double epsilon = Math.abs(step) * 0.5;
        for (double currentX = startX; currentX <= endX + epsilon; currentX += step) {
            lines.add(formatLine(module, currentX));
        }

        Files.write(path, lines, StandardCharsets.UTF_8);
    }

    private String formatLine(MathModule module, double x) {
        try {
            double value = module.calculate(x);
            if (!Double.isFinite(value)) {
                return Double.toString(x) + ";undefined";
            }
            return Double.toString(x) + ";" + Double.toString(value);
        } catch (IllegalArgumentException exception) {
            return Double.toString(x) + ";undefined";
        }
    }
}