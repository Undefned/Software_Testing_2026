package ru.itmo.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementClickInterceptedException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class TutuResultsPage extends Page {
    private static final Duration RESULTS_TIMEOUT = Duration.ofSeconds(40);
    private static final Duration OPTIONAL_TIMEOUT = Duration.ofSeconds(6);

    private static final By OFFER_CARD = By.xpath(
            "//div[@data-ti='offer-card' and @data-ti-product='train']");
    private static final By NO_TICKETS_TEXT = By.xpath(
            "//*[contains(normalize-space(.), 'Нет билетов на эту дату')]");
    private static final By PAST_DATE_TEXT = By.xpath(
            "//*[contains(normalize-space(.), 'Эта дата уже прошла')]");
    private static final By RESULTS_OR_CLEAR_STATE = By.xpath(
            "//div[@data-ti='offer-card' and @data-ti-product='train'] "
                    + "| //*[contains(normalize-space(.), 'Нет билетов на эту дату')] "
                    + "| //*[contains(normalize-space(.), 'Эта дата уже прошла')]");

    private static final By SORTING_BUTTON = By.xpath(
            "//div[@data-ti='sorting']");
    private static final By FILTER_SAPSAN = By.xpath(
            "//div[@data-ti='filter-sapsan']");
    private static final By FILTER_SWALLOW = By.xpath(
            "//div[@data-ti='filter-swallow']");
    private static final By FILTER_AVAILABLE = By.xpath(
            "//div[@data-ti='filter-orderAvailable']");
    private static final By FILTER_LOWER_SEATS = By.xpath(
            "//div[@data-ti='filter-lowerSeats']");
    private static final By FILTER_CAR_TYPE = By.xpath(
            "//div[@data-ti='filter-carType']");
    private static final By ACTIVE_FILTER_STATE = By.xpath(
            "//*[@aria-checked='true' or @aria-selected='true' or contains(@class, 'active') "
                    + "or contains(@class, 'checked') or contains(@class, 'selected')]");

    private static final By FIRST_OFFER_ROUTE_LINK = By.xpath(
            "(//div[@data-ti='offer-card' and @data-ti-product='train'])[1]"
                    + "//a[@data-ti='flex-button'][contains(normalize-space(.), 'Маршрут')]");
    private static final By FIRST_OFFER_SELECT_SEATS_BUTTON = By.xpath(
            "(//div[@data-ti='offer-card' and @data-ti-product='train'])[1]"
                    + "//button[@data-ti='main-tariff-content-default']");

    private boolean lastOptionalActionWasClicked;

    public TutuResultsPage(WebDriver driver) {
        super(driver);
    }

    public TutuResultsPage waitForResultsState() {
        new WebDriverWait(driver, RESULTS_TIMEOUT).until(driver -> hasVisibleElement(RESULTS_OR_CLEAR_STATE));
        return this;
    }

    public boolean assertResultsOrClearStateVisible() {
        waitForResultsState();
        return hasVisibleElement(RESULTS_OR_CLEAR_STATE);
    }

    public boolean isNoTicketsMessageVisible() {
        return hasVisibleElement(NO_TICKETS_TEXT);
    }

    public boolean isPastDateMessageVisible() {
        return hasVisibleElement(PAST_DATE_TEXT);
    }

    public int getOfferCardsCount() {
        return (int) driver.findElements(OFFER_CARD).stream().filter(this::isElementVisible).count();
    }

    public TutuResultsPage enableSapsanFilterIfAvailable() {
        clickOptional(FILTER_SAPSAN);
        return this;
    }

    public TutuResultsPage enableSwallowFilterIfAvailable() {
        clickOptional(FILTER_SWALLOW);
        return this;
    }

    public TutuResultsPage enableAvailableSeatsFilterIfAvailable() {
        clickOptional(FILTER_AVAILABLE);
        return this;
    }

    public TutuResultsPage enableLowerSeatsFilterIfAvailable() {
        clickOptional(FILTER_LOWER_SEATS);
        return this;
    }

    public TutuResultsPage openCarTypeFilter() {
        clickOptional(FILTER_CAR_TYPE);
        return this;
    }

    public TutuResultsPage selectCarType(CarType carType) {
        clickOptional(By.xpath("//input[@data-ti='" + carType.dataTi + "']"));
        return this;
    }

    public boolean assertFilterStateIsAppliedOrResultsStillVisible() {
        waitForResultsState();
        if (!lastOptionalActionWasClicked) {
            return assertResultsOrClearStateVisible();
        }
        return hasVisibleElement(ACTIVE_FILTER_STATE) || assertResultsOrClearStateVisible();
    }

    public TutuResultsPage openSorting() {
        clickOptional(SORTING_BUTTON);
        return this;
    }

    public TutuResultsPage selectSortOption(String label) {
        By option = By.xpath("//div[@data-ti='cell'][.//span[contains(normalize-space(.), '"
                + label + "')]]");
        clickOptional(option);
        return this;
    }

    public TutuResultsPage openRouteOfFirstOfferIfAvailable() {
        clickOptional(FIRST_OFFER_ROUTE_LINK);
        return this;
    }

    public TutuResultsPage clickSelectSeatsOnFirstOfferIfAvailable() {
        clickOptional(FIRST_OFFER_SELECT_SEATS_BUTTON);
        return this;
    }

    public String getCurrentUrl() {
        return driver.getCurrentUrl();
    }

    public enum CarType {
        SEDENTARY("option_sedentary"),
        RESERVED_SEAT("option_reservedSeat"),
        COMPARTMENT("option_compartment"),
        LUX("option_lux"),
        SOFT("option_soft");

        private final String dataTi;

        CarType(String dataTi) {
            this.dataTi = dataTi;
        }
    }

    private void clickOptional(By locator) {
        lastOptionalActionWasClicked = optionalClick(locator);
        waitForResultsState();
    }

    private boolean optionalClick(By locator) {
        try {
            return new WebDriverWait(driver, OPTIONAL_TIMEOUT)
                    .ignoring(StaleElementReferenceException.class)
                    .until(driver -> {
                        for (WebElement element : driver.findElements(locator)) {
                            if (isElementVisible(element) && element.isEnabled()) {
                                clickElement(element);
                                return true;
                            }
                        }
                        return false;
                    });
        } catch (TimeoutException exception) {
            return false;
        }
    }

    private void clickElement(WebElement element) {
        ((JavascriptExecutor) driver).executeScript(
                "arguments[0].scrollIntoView({block: 'center', inline: 'nearest'});", element);
        try {
            element.click();
        } catch (ElementClickInterceptedException exception) {
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
        } catch (RuntimeException exception) {
            ((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
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
            return element.isDisplayed();
        } catch (RuntimeException exception) {
            return false;
        }
    }
}
