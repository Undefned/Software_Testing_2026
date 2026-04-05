@echo off
chcp 65001 >nul
echo === running all tests ===
echo.

cd /d "%~dp0Task1"
if %errorlevel% neq 0 (
    echo error: failed to change to Task1 directory
    pause
    exit /b 1
)
echo [Task1] running tests...
call mvn clean test
if %errorlevel% neq 0 (
    echo error: Task1 tests failed
    pause
    exit /b 1
)

cd /d "%~dp0Task2"
echo [Task2] running tests...
call mvn clean test
if %errorlevel% neq 0 (
    echo error: Task2 tests failed
    pause
    exit /b 1
)

cd /d "%~dp0Task3"
echo [Task3] running tests...
call mvn clean test
if %errorlevel% neq 0 (
    echo error: Task3 tests failed
    pause
    exit /b 1
)

echo.
echo === all tests completed successfully ===
pause