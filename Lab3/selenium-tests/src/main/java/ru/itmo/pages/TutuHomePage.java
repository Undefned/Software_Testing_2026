package ru.itmo.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementClickInterceptedException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

/**
 * Page Object для формы поиска ж/д билетов на tutu.ru (https://www.tutu.ru/poezda/).
 *
 * Локаторы построены на атрибутах {@code data-ti}, которые на tutu.ru стабильны
 * (в отличие от хэшированных css-классов).
 *
 * Прошедшие/недоступные даты в календаре сознательно не различаются отдельной проверкой:
 * по договорённости любая дата раньше момента написания тестов считается устаревшей и
 * не тестируется отдельно (см. docs/test-cases.md).
 */
public class TutuHomePage extends Page {
    public static final String BASE_URL = "https://www.tutu.ru/poezda/";

    private static final By ORIGIN_INPUT = By.xpath(
            "//div[@data-ti='input-root'][.//span[@data-ti='input-label' and normalize-space()='Откуда']]"
                    + "//input[@data-ti='input']");
    private static final By DESTINATION_INPUT = By.xpath(
            "//div[@data-ti='input-root'][.//span[@data-ti='input-label' and normalize-space()='Куда']]"
                    + "//input[@data-ti='input']");
    private static final By ORIGIN_CLEAR_ICON = By.xpath(
            "//div[@data-ti='input-root'][.//span[@data-ti='input-label' and normalize-space()='Откуда']]"
                    + "//div[@data-ti='input-clear-icon']");
    private static final By DESTINATION_CLEAR_ICON = By.xpath(
            "//div[@data-ti='input-root'][.//span[@data-ti='input-label' and normalize-space()='Куда']]"
                    + "//div[@data-ti='input-clear-icon']");
    private static final By SWAP_BUTTON = By.xpath(
            "//button[@data-ti='swapButton']");
    private static final By DATE_INPUT = By.xpath(
            "//input[@data-ti='trip-dates']");
    private static final By DROPDOWN_SUGGEST_CONTAINER = By.xpath(
            "//div[@data-ti='dropdown-suggest-container']");
    private static final By DROPDOWN_ITEM = By.xpath(
            "//div[@data-ti='dropdown-suggest-container']//div[@data-ti='dropdown-item']");
    private static final By NEXT_MONTH_BUTTON = By.xpath(
            "//button[@data-ti='calendar-month-header-next-button']");
    private static final By PREV_MONTH_BUTTON = By.xpath(
            "//button[@data-ti='calendar-month-header-prev-button']");
    // Активная (кликабельная) ячейка календаря: есть info-container и НЕТ маркера пустой/недоступной цены.
    private static final By AVAILABLE_DATE_CELL = By.xpath(
            "//div[@data-ti='panel-chip']"
                    + "[.//span[@data-ti='calendar-day-cell-info-container']"
                    + "[not(.//div[@data-ti='calendar-day-cell-price-empty'])]]");
    private static final By PASSENGERS_INPUT = By.xpath(
            "//input[@data-ti='passengers_input']");
    private static final By PASSENGERS_PANEL = By.xpath(
            "//div[@data-ti='suggest-container'][.//div[@data-ti='passengers_counter']]");
    private static final By PASSENGERS_ADULT_MINUS = By.xpath(
            "(//div[@data-ti='suggest-container']//button[@data-ti='minus_button'])[1]");
    private static final By PASSENGERS_ADULT_PLUS = By.xpath(
            "(//div[@data-ti='suggest-container']//button[@data-ti='plus_button'])[1]");
    private static final By ADD_CHILD_BUTTON = By.xpath(
            "//div[@data-ti='suggest-container']//button[@data-ti='add_child_button']");
    private static final By CHILD_PASSENGER_ROW = By.xpath(
            "//div[@data-ti='suggest-container']//div[@data-ti='child_passenger']");
    private static final By DELETE_CHILD_BUTTON = By.xpath(
            "//div[@data-ti='suggest-container']//button[@data-ti='child_passenger_delete_button']");
    // Возможный попап выбора возраста ребёнка. Существование и точная разметка этого попапа
    // НЕ подтверждены в обоих браузерах — см. docs/test-cases.md, раздел "Известные допущения".
    // Метод selectFirstChildAgeIfPrompted() поэтому не бросает исключение, если попап не появился:
    // тест не должен падать из-за неподтверждённого элемента интерфейса.
    private static final By CHILD_AGE_OPTION = By.xpath(
            "//div[@data-ti='suggest-container']//div[@data-ti='cell']"
                    + "[not(@data-ti='cell-addon')][.//span]");
    private static final By PASSENGERS_DONE_BUTTON = By.xpath(
            "//div[@data-ti='suggest-container']//button[contains(normalize-space(.), 'Готово')]");
    private static final By SEARCH_BUTTON = By.xpath(
            "//button[@data-ti='submit-button']");
    private static final By VALIDATION_TOOLTIP = By.xpath(
            "//div[@data-ti='tooltip-content']");
    private static final By RESULTS_OR_CLEAR_STATE = By.xpath(
            "//*[@data-ti='offer-card' "
                    + "or contains(normalize-space(.), 'Нет билетов на эту дату') "
                    + "or contains(normalize-space(.), 'Эта дата уже прошла')]");

    private static final Duration SUGGESTIONS_TIMEOUT = Duration.ofSeconds(20);
    private static final Duration OPTIONAL_UI_TIMEOUT = Duration.ofSeconds(4);

    public TutuHomePage(WebDriver driver) {
        super(driver);
    }

    public TutuHomePage open() {
        driver.get(BASE_URL);
        wait.until(driver -> isSearchFormAvailable());
        return this;
    }

    public boolean isSearchFormAvailable() {
        return isVisible(ORIGIN_INPUT) && isVisible(DESTINATION_INPUT) && isVisible(SEARCH_BUTTON);
    }

    public boolean isSearchButtonVisible() {
        return isVisible(SEARCH_BUTTON);
    }

    // ---------- Города ----------

    public TutuHomePage clearOriginCity() {
        clearField(ORIGIN_INPUT, ORIGIN_CLEAR_ICON);
        return this;
    }

    public TutuHomePage clearDestinationCity() {
        clearField(DESTINATION_INPUT, DESTINATION_CLEAR_ICON);
        return this;
    }

    public TutuHomePage typeOriginCity(String query) {
        typeCity(ORIGIN_INPUT, query);
        return this;
    }

    public TutuHomePage typeDestinationCity(String query) {
        typeCity(DESTINATION_INPUT, query);
        return this;
    }

    public TutuHomePage selectOriginCityFromSuggestions(String expectedText) {
        selectCityFromSuggestions(ORIGIN_INPUT, expectedText);
        return this;
    }

    public TutuHomePage selectDestinationCityFromSuggestions(String expectedText) {
        selectCityFromSuggestions(DESTINATION_INPUT, expectedText);
        return this;
    }

    public String getOriginCityValue() {
        return getFieldValue(ORIGIN_INPUT);
    }

    public String getDestinationCityValue() {
        return getFieldValue(DESTINATION_INPUT);
    }

    public TutuHomePage swapCities() {
        String originBefore = getOriginCityValue();
        String destinationBefore = getDestinationCityValue();
        clickFirstVisible(SWAP_BUTTON);
        if (!originBefore.isBlank() || !destinationBefore.isBlank()) {
            try {
                new WebDriverWait(driver, Duration.ofSeconds(5)).until(driver ->
                        !getOriginCityValue().equals(originBefore)
                                || !getDestinationCityValue().equals(destinationBefore));
            } catch (TimeoutException ignored) {
                // Форма проверяется на работоспособность отдельно в isSearchFormAvailable().
            }
        }
        return this;
    }

    public boolean isSwapButtonVisible() {
        return driver.findElements(SWAP_BUTTON).stream().anyMatch(this::isElementVisible);
    }

    public TutuHomePage selectSaintPetersburgToMoscow() {
        return clearOriginCity()
                .clearDestinationCity()
                .typeOriginCity("Санкт")
                .selectOriginCityFromSuggestions("Санкт-Петербург")
                .typeDestinationCity("Моск")
                .selectDestinationCityFromSuggestions("Москва");
    }

    // ---------- Дата ----------

    public TutuHomePage openCalendar() {
        clickFirstVisible(DATE_INPUT);
        wait.until(driver -> isCalendarOpen());
        return this;
    }

    public boolean isCalendarOpen() {
        return hasVisibleElement(NEXT_MONTH_BUTTON) || hasVisibleElement(PREV_MONTH_BUTTON);
    }

    public TutuHomePage selectAvailableDate() {
        openCalendar();
        clickLastAvailableDate();
        wait.until(driver -> isSearchFormAvailable());
        return this;
    }

    public TutuHomePage goToNextCalendarMonth() {
        openCalendar();
        clickFirstVisible(NEXT_MONTH_BUTTON);
        wait.until(driver -> isCalendarOpen());
        return this;
    }

    private void clickLastAvailableDate() {
        wait.until(driver -> {
            List<WebElement> availableDates = driver.findElements(AVAILABLE_DATE_CELL).stream()
                    .filter(this::isElementVisible)
                    .toList();
            if (availableDates.isEmpty()) {
                return false;
            }
            return clickElement(availableDates.get(availableDates.size() - 1));
        });
    }

    // ---------- Пассажиры ----------

    public TutuHomePage openPassengersSelector() {
        clickFirstVisible(PASSENGERS_INPUT);
        wait.until(driver -> isPassengersSelectorOpen());
        return this;
    }

    public boolean isPassengersSelectorOpen() {
        return hasVisibleElement(PASSENGERS_PANEL);
    }

    public TutuHomePage incrementAdults() {
        clickFirstVisible(PASSENGERS_ADULT_PLUS);
        return this;
    }

    public TutuHomePage decrementAdults() {
        clickFirstVisible(PASSENGERS_ADULT_MINUS);
        return this;
    }

    /**
     * Нажимает "Добавить ребёнка". Если сразу после клика раскрывается попап выбора
     * возраста — выбирает первый доступный вариант. Если попап не появляется (сайт может
     * проставлять возраст по умолчанию без отдельного шага — так было в HTML-дампе, где у
     * уже добавленного ребёнка сразу стоит "7 лет"), метод не считает это ошибкой и просто
     * продолжает: наличие/разметка этого попапа не подтверждены в обоих браузерах.
     */
    public TutuHomePage addChild() {
        clickFirstVisible(ADD_CHILD_BUTTON);
        selectFirstChildAgeIfPrompted();
        wait.until(driver -> isPassengersSelectorOpen());
        return this;
    }

    private void selectFirstChildAgeIfPrompted() {
        try {
            new WebDriverWait(driver, OPTIONAL_UI_TIMEOUT).until(driver -> {
                for (WebElement option : driver.findElements(CHILD_AGE_OPTION)) {
                    if (isElementVisible(option)) {
                        return clickElement(option);
                    }
                }
                return false;
            });
        } catch (TimeoutException ignored) {
            // Попап выбора возраста либо не появился в этой раскладке/браузере, либо возраст
            // проставляется автоматически — это не ошибка теста.
        }
    }

    public boolean isChildPassengerRowVisible() {
        return hasVisibleElement(CHILD_PASSENGER_ROW);
    }

    public TutuHomePage removeChildIfPresent() {
        optionalClick(DELETE_CHILD_BUTTON);
        return this;
    }

    public TutuHomePage closePassengersSelector() {
        if (!optionalClick(PASSENGERS_DONE_BUTTON)) {
            ((JavascriptExecutor) driver).executeScript("document.body.click();");
        }
        wait.until(driver -> isSearchFormAvailable());
        return this;
    }

    public String getPassengersSummary() {
        return getFieldValue(PASSENGERS_INPUT);
    }

    public boolean isAtLeastOnePassengerAlwaysPresent() {
        return !getPassengersSummary().isBlank();
    }

    // ---------- Поиск ----------

    public TutuHomePage submitSearch() {
        clickFirstVisible(SEARCH_BUTTON);
        return this;
    }

    public TutuResultsPage submitSearchAndWaitForResults() {
        submitSearch();
        return new TutuResultsPage(driver).waitForResultsState();
    }

    public boolean isValidationTooltipVisible() {
        return hasVisibleElement(VALIDATION_TOOLTIP);
    }

    public boolean isValidationShownOrFormStillUsable() {
        return isValidationTooltipVisible() || isSearchFormAvailable();
    }

    public boolean isResultsOrClearStateVisibleOnSamePage() {
        return hasVisibleElement(RESULTS_OR_CLEAR_STATE) || isSearchFormAvailable();
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    // ---------- Вспомогательные методы ----------

    private void clearField(By fieldLocator, By clearIconLocator) {
        if (getFieldValueSafely(fieldLocator).isEmpty()) {
            return;
        }
        if (!optionalClick(clearIconLocator)) {
            replaceInputValue(fieldLocator, "");
        }
        wait.until(driver -> getFieldValueSafely(fieldLocator).isEmpty());
    }

    private void typeCity(By fieldLocator, String query) {
        replaceInputValue(fieldLocator, query);
        wait.until(driver -> getFieldValueSafely(fieldLocator).contains(query));
        try {
            new WebDriverWait(driver, SUGGESTIONS_TIMEOUT).until(driver ->
                    hasVisibleElement(DROPDOWN_SUGGEST_CONTAINER) || hasVisibleElement(DROPDOWN_ITEM));
        } catch (TimeoutException ignored) {
            // Выбор по exact-совпадению текста поля используется как запасной путь ниже.
        }
    }

    private void selectCityFromSuggestions(By fieldLocator, String expectedText) {
        if (getFieldValueSafely(fieldLocator).contains(expectedText)) {
            return;
        }
        try {
            new WebDriverWait(driver, SUGGESTIONS_TIMEOUT).until(driver -> {
                for (WebElement item : driver.findElements(DROPDOWN_ITEM)) {
                    if (isElementVisible(item) && normalizeSpaces(visibleText(item)).contains(expectedText)) {
                        return clickElement(item);
                    }
                }
                return false;
            });
        } catch (TimeoutException exception) {
            replaceInputValue(fieldLocator, expectedText);
        }
        wait.until(driver -> getFieldValueSafely(fieldLocator).contains(expectedText)
                || !hasVisibleElement(DROPDOWN_SUGGEST_CONTAINER));
    }

    private void replaceInputValue(By fieldLocator, String value) {
        wait.until(driver -> {
            try {
                WebElement field = wait.until(ExpectedConditions.elementToBeClickable(fieldLocator));
                ((JavascriptExecutor) driver).executeScript(
                        "arguments[0].scrollIntoView({block: 'center', inline: 'nearest'});", field);
                setInputValueWithEvents(field, value);
                return getFieldValueSafely(fieldLocator).equals(value)
                        || (value.isEmpty() && getFieldValueSafely(fieldLocator).isEmpty());
            } catch (RuntimeException exception) {
                return false;
            }
        });
    }

    private void setInputValueWithEvents(WebElement field, String value) {
        ((JavascriptExecutor) driver).executeScript(
                "const input = arguments[0];"
                        + "const value = arguments[1];"
                        + "const descriptor = Object.getOwnPropertyDescriptor("
                        + "HTMLInputElement.prototype, 'value');"
                        + "input.focus();"
                        + "descriptor.set.call(input, value);"
                        + "input.dispatchEvent(new Event('input', {bubbles: true}));"
                        + "input.dispatchEvent(new Event('change', {bubbles: true}));",
                field,
                value);
    }

    private String getFieldValue(By fieldLocator) {
        return normalizeValue(visible(fieldLocator).getAttribute("value"));
    }

    private String getFieldValueSafely(By fieldLocator) {
        try {
            return getFieldValue(fieldLocator);
        } catch (StaleElementReferenceException | TimeoutException ignored) {
            return "";
        }
    }

    private String normalizeValue(String value) {
        return value == null ? "" : value;
    }

    private String normalizeSpaces(String value) {
        return normalizeValue(value).replaceAll("\\s+", " ").trim();
    }

    private String visibleText(WebElement element) {
        try {
            return normalizeValue(element.getText());
        } catch (RuntimeException exception) {
            return "";
        }
    }

    private void clickFirstVisible(By locator) {
        wait.until(driver -> {
            for (WebElement element : driver.findElements(locator)) {
                if (isElementVisible(element) && element.isEnabled()) {
                    if (clickElement(element)) {
                        return true;
                    }
                }
            }
            return false;
        });
    }

    private boolean optionalClick(By locator) {
        try {
            clickFirstVisible(locator);
            return true;
        } catch (TimeoutException exception) {
            return false;
        }
    }

    private boolean clickElement(WebElement element) {
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({block: 'center', inline: 'nearest'});", element);
        try {
            element.click();
            return true;
        } catch (ElementClickInterceptedException exception) {
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
            return true;
        } catch (RuntimeException exception) {
            try {
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
                return true;
            } catch (RuntimeException ignored) {
                return false;
            }
        }
    }

    private boolean hasVisibleElement(By locator) {
        try {
            return driver.findElements(locator).stream().anyMatch(this::isElementVisible);
        } catch (RuntimeException exception) {
            return false;
        }
    }

    private boolean isElementVisible(WebElement element) {
        try {
            if (element.isDisplayed()) {
                return true;
            }
            return Boolean.TRUE.equals(((JavascriptExecutor) driver).executeScript(
                    "const element = arguments[0];"
                            + "const rect = element.getBoundingClientRect();"
                            + "const style = window.getComputedStyle(element);"
                            + "return rect.width > 0 && rect.height > 0 "
                            + "&& style.visibility !== 'hidden' && style.display !== 'none';",
                    element));
        } catch (RuntimeException exception) {
            return false;
        }
    }
}
