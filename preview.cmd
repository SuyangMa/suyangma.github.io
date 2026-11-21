@echo off
cd /d "%~dp0"
echo Open http://127.0.0.1:4321/ in your browser.
echo Press Ctrl+C to stop the preview.
python -m http.server 4321 --bind 127.0.0.1 --directory dist
pause
