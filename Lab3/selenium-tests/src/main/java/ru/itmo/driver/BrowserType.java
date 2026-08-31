package ru.itmo.driver;

import java.util.Locale;

public enum BrowserType {
    CHROME,
    FIREFOX;

    public static BrowserType fromProperty(String value) {
        if (value == null || value.isBlank()) {
            return CHROME;
        }

        return switch (value.trim().toLowerCase(Locale.ROOT)) {
            case "chrome", "google-chrome", "chromium" -> CHROME;
            case "firefox", "firefox_developer", "firefox-developer", "firefox-developer-edition" -> FIREFOX;
            default -> BrowserType.valueOf(value.trim().toUpperCase(Locale.ROOT));
        };
    }
}
