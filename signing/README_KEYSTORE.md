# 🔐 Permanent Android Signing Keystore (CRITICAL FOR IN-PLACE UPDATES)

- **File:** `minesweeper-odyssey-release.keystore`
- **Alias:** `minesweeper_odyssey_key`
- **Validity:** 10,000 Days (~27 Years)
- **Package ID (`applicationId`):** `com.minesweeper.odyssey`

## ⚠️ Why this file is critical:
Android ONLY allows a new APK (`v1.1.0`, `v1.2.0`, etc.) to install directly on top of an existing APK (`v1.0.0`) without deleting the old app or losing player progress if **both APKs are signed with this exact same `.keystore` file** and have an incremented `versionCode`.

**Never delete or replace `minesweeper-odyssey-release.keystore`** — our automated GitHub Actions builder (`.github/workflows/build-android-apk.yml`) and local build scripts (`build_signed_apk.bat` / `.sh`) use this key automatically for every release!
