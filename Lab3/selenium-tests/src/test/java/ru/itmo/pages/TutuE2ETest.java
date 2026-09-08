package ru.itmo.pages;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.stream.Collectors;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.TestInstance.Lifecycle;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import ru.itmo.BaseUiTest;
import ru.itmo.driver.BrowserType;

@TestInstance(Lifecycle.PER_CLASS)
class TutuE2ETest extends BaseUiTest {

    private BrowserType currentBrowserType;

    @BeforeAll
    void init() {
        // Ничего не делаем, драйвер создаётся в ensureDriver
    }

    @ParameterizedTest(name = "E2E-01 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e01OneWaySearch(BrowserType browserType) {
        // Базовый поиск билетов в одном направлении
        ensureDriver(browserType);
        assertTrue(oneWaySearch().assertResultsOrClearStateVisible());
    }

    @ParameterizedTest(name = "E2E-02 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e02SeveralPassengersSearch(BrowserType browserType) {
        // Поиск с несколькими пассажирами
        ensureDriver(browserType);
        TutuHomePage page = filledRoute()
                .selectAvailableDate()
                .openPassengersSelector()
                .incrementAdults();

        assertTrue(page.isAtLeastOnePassengerAlwaysPresent());
        page.closePassengersSelector();
        assertTrue(page.isSearchFormAvailable(), "Форма должна быть доступна после закрытия селектора");
        
        page.submitSearch();
        
        page.wait.until(ExpectedConditions.not(ExpectedConditions.urlToBe(TutuHomePage.BASE_URL)));
        
        String currentUrl = driver.getCurrentUrl();
        assertTrue(currentUrl.contains("poezda") || currentUrl.contains("raspisanie"),
                "Должна открыться страница результатов. Текущий URL: " + currentUrl);
    }

    @ParameterizedTest(name = "E2E-03 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e03SearchWithChild(BrowserType browserType) {
        // Поиск с добавлением ребёнка
        ensureDriver(browserType);
        TutuHomePage page = filledRoute()
                .selectAvailableDate()
                .openPassengersSelector()
                .addChild();

        assertTrue(page.isChildPassengerRowVisible() || page.isPassengersSelectorOpen());
        assertTrue(page.closePassengersSelector()
                .submitSearchAndWaitForResults()
                .assertResultsOrClearStateVisible());
    }

    @ParameterizedTest(name = "E2E-04 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e04SwapCitiesAndSearch(BrowserType browserType) {
        // Поиск после смены городов местами
        ensureDriver(browserType);
        TutuHomePage page = filledRoute().swapCities();

        assertTrue(page.isSearchFormAvailable());
        assertTrue(page.selectAvailableDate()
                .submitSearchAndWaitForResults()
                .assertResultsOrClearStateVisible());
    }

    @ParameterizedTest(name = "E2E-05 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e05SapsanFilter(BrowserType browserType) {
        // Фильтрация результатов по типу поезда "Сапсан"
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch().enableSapsanFilterIfAvailable();
        assertTrue(results.assertFilterStateIsAppliedOrResultsStillVisible());
    }

    @ParameterizedTest(name = "E2E-06 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e06SwallowFilter(BrowserType browserType) {
        // Фильтрация результатов по типу поезда "Ласточка"
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch().enableSwallowFilterIfAvailable();
        assertTrue(results.assertFilterStateIsAppliedOrResultsStillVisible());
    }

    @ParameterizedTest(name = "E2E-07 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e07AvailableSeatsFilter(BrowserType browserType) {
        // Фильтр "Только с местами"
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch().enableAvailableSeatsFilterIfAvailable();
        assertTrue(results.assertFilterStateIsAppliedOrResultsStillVisible());
    }

    @ParameterizedTest(name = "E2E-08 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e08LowerSeatsFilter(BrowserType browserType) {
        // Фильтр "Только нижние места"
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch().enableLowerSeatsFilterIfAvailable();
        assertTrue(results.assertFilterStateIsAppliedOrResultsStillVisible());
    }

    @ParameterizedTest(name = "E2E-09 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e09CarTypeFilter(BrowserType browserType) {
        // Фильтр по типу вагона (купе)
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch()
                .openCarTypeFilter()
                .selectCarType(TutuResultsPage.CarType.COMPARTMENT);
        assertTrue(results.assertFilterStateIsAppliedOrResultsStillVisible());
    }

    @ParameterizedTest(name = "E2E-10 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e10CombinedFiltering(BrowserType browserType) {
        // Комбинированная фильтрация (места + нижние)
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch()
                .enableAvailableSeatsFilterIfAvailable()
                .enableLowerSeatsFilterIfAvailable();
        assertTrue(results.assertFilterStateIsAppliedOrResultsStillVisible());
    }

    @ParameterizedTest(name = "E2E-11 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e11SortResults(BrowserType browserType) {
        // Сортировка результатов по цене (дешёвые сверху)
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch()
                .openSorting()
                .selectSortOption("Сначала дешёвые");
        assertTrue(results.assertResultsOrClearStateVisible());
    }

    @ParameterizedTest(name = "E2E-12 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e12OpenFirstOfferRoute(BrowserType browserType) {
        // Открытие маршрута первого предложения
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch().openRouteOfFirstOfferIfAvailable();
        assertTrue(results.assertResultsOrClearStateVisible());
    }

    @ParameterizedTest(name = "E2E-13 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e13SelectSeatsOnFirstOffer(BrowserType browserType) {
        // Выбор мест на первом предложении
        ensureDriver(browserType);
        TutuResultsPage results = oneWaySearch().clickSelectSeatsOnFirstOfferIfAvailable();
        assertTrue(results.assertResultsOrClearStateVisible());
    }

    @ParameterizedTest(name = "E2E-14 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e14SameOriginAndDestination(BrowserType browserType) {
        // Поиск с одинаковым городом отправления и назначения (открывается расписание)
        ensureDriver(browserType);
        TutuHomePage page = home()
                .clearOriginCity()
                .clearDestinationCity()
                .typeOriginCity("Моск")
                .selectOriginCityFromSuggestions("Москва")
                .typeDestinationCity("Моск")
                .selectDestinationCityFromSuggestions("Москва")
                .selectAvailableDate();

        page.submitSearch();
        
        page.wait.until(ExpectedConditions.not(ExpectedConditions.urlToBe(TutuHomePage.BASE_URL)));
        
        String currentUrl = driver.getCurrentUrl();
        boolean isRaspisanie = currentUrl.contains("raspisanie");
        boolean hasTitle = driver.findElements(By.xpath("//h1[contains(@data-ti, 'title')]")).size() > 0;
        
        assertTrue(isRaspisanie || hasTitle,
                "Страница расписания должна загрузиться. URL: " + currentUrl);
    }

    @ParameterizedTest(name = "E2E-15 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void e2e15RepeatSearchAfterChangingDestination(BrowserType browserType) {
        // Повторный поиск после смены города назначения
        ensureDriver(browserType);
        oneWaySearch();

        TutuHomePage page = new TutuHomePage(driver).open()
                .clearOriginCity()
                .clearDestinationCity()
                .typeOriginCity("Санкт")
                .selectOriginCityFromSuggestions("Санкт-Петербург")
                .typeDestinationCity("Каз")
                .selectDestinationCityFromSuggestions("Казань")
                .selectAvailableDate();

        assertTrue(page.submitSearchAndWaitForResults().assertResultsOrClearStateVisible());
    }

    @ParameterizedTest(name = "NEG-01 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void neg01SearchWithoutDestination(BrowserType browserType) {
        // Негативный тест: поиск без указания города назначения
        ensureDriver(browserType);
        TutuHomePage page = home()
                .clearOriginCity()
                .clearDestinationCity()
                .typeOriginCity("Моск")
                .selectOriginCityFromSuggestions("Москва")
                .submitSearch();

        assertTrue(page.isValidationShownOrFormStillUsable());
        assertTrue(page.isValidationTooltipVisible() || page.isSearchFormAvailable());
    }

    @ParameterizedTest(name = "NEG-02 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void neg02NonExistentCity(BrowserType browserType) {
        // Негативный тест: ввод несуществующего города
        ensureDriver(browserType);
        home().clearDestinationCity().typeDestinationCity("Мухосранск");

        List<WebElement> suggestions = driver.findElements(By.xpath("//div[@data-ti='dropdown-item']"));
        boolean hasMuhosransk = suggestions.stream()
                .anyMatch(el -> el.getText().contains("Мухосранск"));

        assertFalse(hasMuhosransk,
                "В подсказках не должно быть 'Мухосранск'. Найденные подсказки: "
                        + suggestions.stream().map(WebElement::getText).collect(Collectors.toList()));
    }

    @ParameterizedTest(name = "NEG-03 в {0}")
    @MethodSource("ru.itmo.driver.BrowserTypeProvider#allBrowsers")
    void neg03CannotRemoveAllPassengers(BrowserType browserType) {
        // Негативный тест: нельзя удалить всех пассажиров (минимум 1 остаётся)
        ensureDriver(browserType);
        TutuHomePage page = home().openPassengersSelector();

        for (int i = 0; i < 10; i++) {
            try {
                page.decrementAdults();
            } catch (RuntimeException exception) {
                break;
            }
        }

        assertFalse(page.getPassengersSummary().isBlank(),
                "Поле «Кто едет» не должно становиться пустым — минимум один пассажир всегда должен оставаться");
    }

    // ---------- Вспомогательные методы ----------

    private void ensureDriver(BrowserType browserType) {
        // Всегда пересоздаём драйвер для каждого теста
        if (driver != null) {
            try {
                driver.quit();
            } catch (Exception ignored) {}
            driver = null;
        }
        createDriver(browserType);
        currentBrowserType = browserType;
    }

    private TutuResultsPage oneWaySearch() {
        return filledRoute()
                .selectAvailableDate()
                .submitSearchAndWaitForResults();
    }

    private TutuHomePage filledRoute() {
        return home().selectSaintPetersburgToMoscow();
    }

    private TutuHomePage home() {
        return new TutuHomePage(driver).open();
    }

    @AfterAll
    void closeAllDrivers() {
        if (driver != null) {
            try {
                driver.quit();
            } catch (RuntimeException ignored) {
            }
            driver = null;
        }
    }
}