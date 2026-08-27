# Сайт mmweb.by — статический HTML

Весь сайт — чистый HTML/CSS/JS без сборки и зависимостей.

Файлы:
- `index.html` — главная (лендинг)
- `LumiCasa.html`, `FerroCore.html`, `SmileClinic.html`, `PrimeDetail.html` — страницы кейсов
- `deploy.sh` — заливка на GitHub Pages

## Заливка на GitHub Pages

1. Скопируйте все `.html` файлы (и `deploy.sh`) в пустую папку.
2. `chmod +x deploy.sh`
3. `./deploy.sh https://github.com/maksmatesha-gif/secondfirst.git`
4. Settings → Pages → Source: Deploy from branch → `main` / root

Скрипт сам создаёт `.nojekyll`, коммит и force-push в ветку `main`.
