#!/usr/bin/env python3
import os, sys, re, shutil

ver_code = int(sys.argv[1]) if len(sys.argv) > 1 else 100
ver_name = sys.argv[2] if len(sys.argv) > 2 else "1.0.0"

gradle_path = os.path.join("android", "app", "build.gradle")
if not os.path.exists(gradle_path):
    print(f"Error: {gradle_path} not found!")
    sys.exit(1)

with open(gradle_path, "r", encoding="utf-8") as f:
    g = f.read()

g = re.sub(r"versionCode\s+\d+", f"versionCode {ver_code}", g)
g = re.sub(r'versionName\s+"[^"]+"', f'versionName "{ver_name}"', g)

signing_block = """    signingConfigs {
        release {
            storeFile file("../../signing/minesweeper-odyssey-release.keystore")
            storePassword "MinesweeperOdyssey2026!"
            keyAlias "minesweeper_odyssey_key"
            keyPassword "MinesweeperOdyssey2026!"
            v1SigningEnabled true
            v2SigningEnabled true
        }
    }
"""

if "signingConfigs" not in g:
    g = g.replace("    buildTypes {", signing_block + "    buildTypes {")
    g = re.sub(
        r"(buildTypes\s*\{\s*release\s*\{)",
        r"\1\n            signingConfig signingConfigs.release",
        g
    )

with open(gradle_path, "w", encoding="utf-8") as f:
    f.write(g)

# Copy custom 512x512 app icon into all mipmap folders
icon_src = os.path.join("frontend", "assets", "icons", "icon-512.png")
res_dir = os.path.join("android", "app", "src", "main", "res")
if os.path.exists(icon_src) and os.path.exists(res_dir):
    for name in os.listdir(res_dir):
        if name.startswith("mipmap-"):
            mdir = os.path.join(res_dir, name)
            if os.path.isdir(mdir):
                for target in ["ic_launcher.png", "ic_launcher_round.png", "ic_launcher_foreground.png"]:
                    shutil.copyfile(icon_src, os.path.join(mdir, target))

print(f"✅ Configured Android Release APK: versionCode={ver_code}, versionName={ver_name}, signed with permanent keystore!")
