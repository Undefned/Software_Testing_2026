package ru.itmo;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.extension.ExtensionContext;
import org.junit.jupiter.api.extension.RegisterExtension;
import org.junit.jupiter.api.extension.TestExecutionExceptionHandler;
import org.junit.jupiter.api.extension.TestWatcher;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import ru.itmo.driver.BrowserType;
import ru.itmo.driver.DriverFactory;

public abstract class BaseUiTest {

    private static final Path SCREENSHOTS_DIR = Path.of("target", "screenshots");
    private static final DateTimeFormatter SCREENSHOT_TIMESTAMP =
            DateTimeFormatter.ofPattern("yyyyMMdd-HHmmss-SSS");

    protected WebDriver driver;
    protected BrowserType currentBrowser;

    @RegisterExtension
    TestExecutionExceptionHandler screenshotOnException = (context, throwable) -> {
        saveScreenshot(context);
        throw throwable;
    };

    @RegisterExtension
    TestWatcher screenshotOnFailure = new TestWatcher() {
        @Override
        public void testFailed(ExtensionContext context, Throwable cause) {
            saveScreenshot(context);
        }
    };

    protected void createDriver(BrowserType browserType) {
        currentBrowser = browserType;
        driver = DriverFactory.createDriver(browserType);
    }

    // @AfterEach убран — теперь драйвер закрывается в @AfterAll дочернего класса

    private void saveScreenshot(ExtensionContext context) {
        if (!(driver instanceof TakesScreenshot screenshotDriver)) {
            return;
        }

        try {
            Files.createDirectories(SCREENSHOTS_DIR);
            Path screenshot = SCREENSHOTS_DIR.resolve(screenshotFileName(context));
            Files.copy(screenshotDriver.getScreenshotAs(OutputType.FILE).toPath(), screenshot);
        } catch (IOException | RuntimeException ignored) {
            // Скриншот — вспомогательная диагностика, её сбой не должен маскировать исходный фейл.
        }
    }

    private String screenshotFileName(ExtensionContext context) {
        String className = context.getRequiredTestClass().getSimpleName();
        String methodName = context.getRequiredTestMethod().getName();
        String browser = currentBrowser != null
                ? currentBrowser.name().toLowerCase(Locale.ROOT)
                : System.getProperty("browser", BrowserType.CHROME.name()).toLowerCase(Locale.ROOT);
        String timestamp = LocalDateTime.now().format(SCREENSHOT_TIMESTAMP);
        return sanitize(className + "-" + methodName + "-" + browser + "-" + timestamp) + ".png";
    }

    private String sanitize(String value) {
        return value.replaceAll("[^a-zA-Z0-9._-]", "_");
    }
}