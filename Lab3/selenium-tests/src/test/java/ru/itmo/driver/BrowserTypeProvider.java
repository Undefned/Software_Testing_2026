package ru.itmo.driver;

import java.util.stream.Stream;

public final class BrowserTypeProvider {
    private static final String BROWSER_PROPERTY = "browser";

    private BrowserTypeProvider() {
    }

    /**
     * Без явного -Dbrowser=... отдаёт ОБА браузера — именно это заставляет
     * @ParameterizedTest прогонять каждый сценарий и в Chrome, и в Firefox.
     * С -Dbrowser=chrome или -Dbrowser=firefox отдаёт только один — для точечных прогонов.
     */
    public static Stream<BrowserType> allBrowsers() {
        String requestedBrowser = System.getProperty(BROWSER_PROPERTY);
        if (requestedBrowser == null || requestedBrowser.isBlank()) {
            return Stream.of(BrowserType.CHROME, BrowserType.FIREFOX);
        }
        return Stream.of(BrowserType.fromProperty(requestedBrowser));
    }
}
