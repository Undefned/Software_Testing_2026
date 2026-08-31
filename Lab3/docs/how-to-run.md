## 🚀 Базовые команды запуска

```bash
mvn test // Запуск всех тестов в Chrome + Firefox параллельно (headless)
```

```bash
mvn test -Dheadless=false // Запуск всех тестов в Chrome + Firefox параллельно (с видимыми окнами)
```

```bash
mvn test -Dbrowser=chrome // Запуск всех тестов только в Chrome (headless)
```

```bash
mvn test -Dbrowser=firefox // Запуск всех тестов только в Firefox (headless)
```

```bash
mvn test -Dtest=TutuE2ETest // Запуск всех тестов из класса TutuE2ETest (Chrome + Firefox)
```

```bash
mvn test -Dtest=TutuE2ETest#e2e01OneWaySearch // Запуск одного конкретного теста (Chrome + Firefox)
```

```bash
mvn clean test // Очистка и пересборка перед запуском всех тестов
```
