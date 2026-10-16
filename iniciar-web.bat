@echo off
chcp 65001 >nul
title Psicologia con Acento - servidor local
cd /d "%~dp0"

if not exist node_modules (
  echo Instalando dependencias por primera vez...
  call npm install || goto :error
)

echo Arrancando la web en http://localhost:4321 ...
echo (Cierra esta ventana o pulsa Ctrl+C para pararla)
call npm run dev -- --open
goto :eof

:error
echo.
echo Algo ha fallado. Revisa que Node.js este instalado: https://nodejs.org
pause
