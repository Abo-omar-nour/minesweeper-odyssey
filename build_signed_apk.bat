@echo off
set /p VER_CODE="Enter new integer VersionCode (e.g. 100 for v1.0, 101 for v1.1): "
set /p VER_NAME="Enter Version Name (e.g. 1.0.0, 1.1.0): "
if "%VER_CODE%"=="" set VER_CODE=100
if "%VER_NAME%"=="" set VER_NAME=1.0.0

echo 📦 Syncing frontend into Android Capacitor project...
call npm install
if not exist android call npx cap add android
call npx cap sync android

echo 🔐 Applying permanent signing keystore & VersionCode %VER_CODE% (%VER_NAME%)...
python signing/configure_android_release.py %VER_CODE% %VER_NAME%

echo 🚀 Building Signed Updateable Release APK...
cd android
call gradlew.bat assembleRelease --no-daemon
cd ..
copy /Y android\app\build\outputs\apk\release\app-release.apk Minesweeper-Odyssey-Signed-Updateable.apk
echo ✅ Done! Your updateable APK is ready: Minesweeper-Odyssey-Signed-Updateable.apk
pause
