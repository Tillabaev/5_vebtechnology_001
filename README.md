# Adahan Portfolio — React + TypeScript

Готовый адаптивный сайт-портфолио на React, TypeScript и Vite. Подготовлен для публикации на GitHub Pages через GitHub Actions.

## 1. Запуск в VS Code

1. Распакуйте ZIP-архив.
2. Откройте папку `adahan-portfolio` в VS Code.
3. Откройте терминал: **Terminal → New Terminal**.
4. Убедитесь, что установлен Node.js (рекомендуется версия 22 или новее).
5. Выполните команды:

```bash
npm install
npm run dev
```

6. Откройте адрес, который появится в терминале (обычно `http://localhost:5173`).

> Python не нужен для запуска React-сайта. Он использовался для подготовки файлов проекта. React работает через Node.js и npm.

## 2. Публикация на GitHub Pages

1. Создайте на GitHub новый пустой репозиторий, например `adahan-portfolio`.
2. В VS Code откройте терминал в папке проекта и выполните:

```bash
git init
git add .
git commit -m "Create Adahan portfolio"
git branch -M main
git remote add origin https://github.com/ВАШ-ЛОГИН/adahan-portfolio.git
git push -u origin main
```

3. На GitHub откройте репозиторий → **Settings → Pages**.
4. В разделе **Build and deployment** выберите **Source: GitHub Actions**.
5. Откройте вкладку **Actions** и дождитесь успешного завершения workflow `Deploy React app to GitHub Pages`.
6. Сайт будет доступен по адресу:

`https://ВАШ-ЛОГИН.github.io/adahan-portfolio/`

## 3. Что нужно заменить перед публикацией

- В `src/App.tsx` при необходимости добавьте реальные ссылки GitHub и LinkedIn. В исходном резюме указаны только подписи-ссылки без самих адресов, поэтому они не выдуманы.
- Проверьте телефон, email, даты и описание проекта.
- Если хотите добавить фотографию, её можно будет вставить в блок hero.

## Стек

- React 18
- TypeScript
- Vite
- CSS
- GitHub Actions + GitHub Pages
