#!/usr/bin/env bash
set -e
echo "🔄 Pushing Minesweeper Odyssey update to GitHub..."
git add .
git commit -m "update: UI typography, Arabic polish, collapsible guide & concise theme names"
git push origin main
echo "✅ Update pushed to GitHub! GitHub Pages and the Android APK Action will update automatically."
