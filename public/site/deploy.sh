#!/usr/bin/env bash
# Заливка редизайна на GitHub Pages.
# Использование:
#   1) положите index.html (и файлы кейсов LumiCasa.html и т.д.) в пустую папку
#   2) chmod +x deploy.sh && ./deploy.sh "https://github.com/maksmatesha-gif/secondfirst.git"
set -euo pipefail

REPO="${1:-}"
BRANCH="${2:-main}"
if [ -z "$REPO" ]; then echo "Укажите URL репозитория: ./deploy.sh https://github.com/USER/REPO.git"; exit 1; fi

touch .nojekyll
git init -q 2>/dev/null || true
git add -A
git -c user.name="deploy" -c user.email="deploy@local" commit -qm "redesign: new landing" || echo "нет изменений"
git branch -M "$BRANCH"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO"
git push -f origin "$BRANCH"

echo "Готово. Включите Pages: Settings → Pages → Source: Deploy from branch → $BRANCH / root"
