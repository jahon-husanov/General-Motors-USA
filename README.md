# General Motors — Vite + React Site

## Запуск проекта

### 1. Установить зависимости
```bash
npm install
```

### 2. Запустить dev-сервер
```bash
npm run dev
```
Откроется на `http://localhost:5173`

### 3. Собрать production-сборку
```bash
npm run build
```

### 4. Предпросмотр production-сборки
```bash
npm run preview
```

---

## Структура проекта

```
gm-site/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx          # Точка входа
│   ├── App.jsx           # Роутер (состояние страниц)
│   ├── index.css         # Глобальные стили
│   ├── components/
│   │   ├── Nav.jsx       # Навигация
│   │   ├── Footer.jsx    # Подвал
│   │   └── BrandsStrip.jsx
│   └── pages/
│       ├── HomePage.jsx
│       ├── VehiclesPage.jsx
│       ├── ElectricPage.jsx
│       ├── InnovationPage.jsx
│       ├── CompanyPage.jsx
│       └── InvestorsPage.jsx
```

## Страницы

- **/** — Главная: hero, автомобили, статистика, EV-баннер
- **/vehicles** — Все модели с фильтрацией по категориям
- **/electric** — Платформа Ultium, все EV-модели, зарядная сеть
- **/innovation** — Super Cruise, Cruise AV, SDV, водород HYDROTEC
- **/company** — История, руководство, миссия, DEI
- **/investors** — Тикер NYSE:GM, финансы 2024, гайденс 2025

## Технологии

- **Vite** — сборщик
- **React 18** — UI
- **CSS Variables** — темизация
- **Google Fonts** — Bebas Neue + Barlow
- **Unsplash** — изображения (CDN)
