@echo off
echo 🚀 Initializing Git repository for Minesweeper Odyssey v1.0.0...
git init
git add .
git commit -m "release: Minesweeper Odyssey v1.0.0 Official Release"
git branch -M main
git tag -f -a v1.0.0 -m "Minesweeper Odyssey v1.0.0 - First Official Release"
echo ✅ Committed and tagged v1.0.0!
echo 👉 Next step: Run the following commands with your GitHub repository URL:
echo    git remote add origin https://github.com/YOUR_USERNAME/minesweeper-odyssey.git
echo    git push -u origin main --tags
pause
