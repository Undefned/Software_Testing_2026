@echo off
chcp 65001 >nul
echo === Running Lab2 Integration Tests ===
echo.

cd /d "%~dp0"

echo [Step 1] Cleaning and compiling...
call mvn clean compile
if %errorlevel% neq 0 (
    echo ERROR: Compilation failed
    pause
    exit /b 1
)

echo.
echo [Step 2] Running unit tests...
call mvn test
if %errorlevel% neq 0 (
    echo ERROR: Unit tests failed
    pause
    exit /b 1
)

echo.
echo [Step 3] Running integration tests...
call mvn verify
if %errorlevel% neq 0 (
    echo ERROR: Integration tests failed
    pause
    exit /b 1
)

echo.
echo === All tests completed successfully ===
echo.
echo Reports:
echo   - Test reports: target/surefire-reports/
echo   - Integration reports: target/failsafe-reports/
echo   - Coverage report: target/site/jacoco/index.html
echo   - CSV export: target/sin-stub.csv
echo.
pause