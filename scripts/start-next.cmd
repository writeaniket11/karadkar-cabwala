@echo off
setlocal
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0.."
"C:\Program Files\nodejs\node.exe" "node_modules\next\dist\bin\next" start -p 3000
