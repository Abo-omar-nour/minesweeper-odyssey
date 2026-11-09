#!/usr/bin/env bash
set -e
VER_CODE=${1:-100}
VER_NAME=${2:-"1.0.0"}

echo "📦 Syncing frontend into Android Capacitor project..."
npm install
[ ! -d "android" ] && npx cap add android
npx cap sync android

echo "🔐 Applying permanent signing keystore & VersionCode $VER_CODE ($VER_NAME)..."
python3 signing/configure_android_release.py "$VER_CODE" "$VER_NAME"

echo "🚀 Building Signed Updateable Release APK..."
cd android
chmod +x gradlew
./gradlew assembleRelease --no-daemon
cd ..
cp android/app/build/outputs/apk/release/app-release.apk ./Minesweeper-Odyssey-Signed-Updateable.apk
echo "✅ Done! Your updateable APK is ready: ./Minesweeper-Odyssey-Signed-Updateable.apk"
