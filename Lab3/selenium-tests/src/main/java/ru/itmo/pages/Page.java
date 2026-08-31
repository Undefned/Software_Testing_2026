package ru.itmo.pages;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;

public abstract class Page {
    protected WebDriver driver;
    protected WebDriverWait wait;

    protected Page(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    }

    protected WebElement visible(By locator) {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
    }

    protected boolean isVisible(By locator) {
        try {
            return visible(locator) != null;
        } catch (RuntimeException exception) {
            return false;
        }
    }
}
