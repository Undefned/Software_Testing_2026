package ru.itmo.driver;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import org.openqa.selenium.Dimension;
import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

public final class DriverFactory {
    private static final Dimension DEFAULT_WINDOW_SIZE = new Dimension(1440, 1000);
    private static final String CHROME_BINARY_PROPERTY = "chrome.binary";
    private static final String FIREFOX_BINARY_PROPERTY = "firefox.binary";
    private static final String FIREFOX_BINARY_ENV = "FIREFOX_BINARY";
    private static final Path DEFAULT_CHROME_BINARY = Path.of("/usr/bin/google-chrome-stable");
    private static final List<Path> WINDOWS_FIREFOX_DEVELOPER_BINARIES = List.of(
            Path.of("C:\\Program Files\\Mozilla Firefox\\firefox.exe"),
            Path.of("C:\\Program Files (x86)\\Firefox Developer Edition\\firefox.exe"));
    private static final List<Path> LINUX_FIREFOX_DEVELOPER_BINARIES = List.of(
            Path.of("/usr/bin/firefox-developer-edition"),
            Path.of("/usr/bin/firefox-developer"),
            Path.of("/opt/firefox-developer-edition/firefox"),
            Path.of("/opt/firefox/firefox"));

    private DriverFactory() {
    }

    public static WebDriver createDriver(BrowserType browserType) {
        WebDriver driver = switch (browserType) {
            case CHROME -> new ChromeDriver(chromeOptions());
            case FIREFOX -> new FirefoxDriver(firefoxOptions());
        };
        driver.manage().window().setSize(DEFAULT_WINDOW_SIZE);
        return driver;
    }

    private static ChromeOptions chromeOptions() {
        ChromeOptions options = new ChromeOptions();
        options.setPageLoadStrategy(PageLoadStrategy.EAGER);
        String chromeBinary = System.getProperty(CHROME_BINARY_PROPERTY);
        if (chromeBinary != null && !chromeBinary.isBlank()) {
            options.setBinary(chromeBinary);
        } else if (Files.isExecutable(DEFAULT_CHROME_BINARY)) {
            options.setBinary(DEFAULT_CHROME_BINARY.toString());
        }
        options.addArguments("--disable-notifications");
        if (Boolean.getBoolean("headless")) {
            options.addArguments("--headless=new");
        }
        return options;
    }

    private static FirefoxOptions firefoxOptions() {
        FirefoxOptions options = new FirefoxOptions();
        options.setPageLoadStrategy(PageLoadStrategy.EAGER);
        options.setBinary(resolveFirefoxDeveloperBinary().toString());
        if (Boolean.getBoolean("headless")) {
            options.addArguments("--headless");
        }
        return options;
    }

    private static Path resolveFirefoxDeveloperBinary() {
        List<String> checkedPaths = new ArrayList<>();

        Optional<Path> propertyPath = configuredBinary(System.getProperty(FIREFOX_BINARY_PROPERTY), checkedPaths);
        if (propertyPath.isPresent()) {
            return propertyPath.get();
        }

        Optional<Path> environmentPath = configuredBinary(System.getenv(FIREFOX_BINARY_ENV), checkedPaths);
        if (environmentPath.isPresent()) {
            return environmentPath.get();
        }

        for (Path binary : standardFirefoxDeveloperBinaries()) {
            checkedPaths.add(binary.toString());
            if (isExecutableFile(binary)) {
                return binary;
            }
        }

        throw new IllegalStateException("Firefox binary was not found. "
                + "Checked paths: " + String.join(", ", checkedPaths) + ". "
                + "Pass the binary explicitly, for example: "
                + "mvn test -Dfirefox.binary=/usr/bin/firefox");
    }

    private static Optional<Path> configuredBinary(String value, List<String> checkedPaths) {
        if (value == null || value.isBlank()) {
            return Optional.empty();
        }

        Path binary = Path.of(value);
        checkedPaths.add(binary.toString());
        if (isExecutableFile(binary)) {
            return Optional.of(binary);
        }
        return Optional.empty();
    }

    private static List<Path> standardFirefoxDeveloperBinaries() {
        String osName = System.getProperty("os.name", "").toLowerCase(Locale.ROOT);
        if (osName.contains("win")) {
            return WINDOWS_FIREFOX_DEVELOPER_BINARIES;
        }
        if (osName.contains("linux")) {
            return LINUX_FIREFOX_DEVELOPER_BINARIES;
        }
        return List.of();
    }

    private static boolean isExecutableFile(Path binary) {
        return Files.isRegularFile(binary) && Files.isExecutable(binary);
    }
}
