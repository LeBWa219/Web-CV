# Сайт-резюме

Личный сайт-портфолио: React 19 + Vite, деплой на GitHub Pages (`npm run deploy`).

## Как добавить новый сертификат или диплом в блок «Достижения»

1. Положи PDF с оригиналом в `public/certificates/` — например,
   `public/certificates/my-hackathon.pdf`. Имя файла — латиницей, без пробелов.
2. Сделай превью-картинку (jpg или png) из первой страницы PDF и положи её в
   `src/assets/certificates/` — например, `my-hackathon.jpg`. PDF можно
   сконвертировать так: `pdftoppm -jpeg -scale-to 1200 -singlefile файл.pdf my-hackathon`.
3. Открой `src/data/content.js`:
   - добавь импорт картинки вверху файла:
     `import myHackathonShot from "../assets/certificates/my-hackathon.jpg";`
   - добавь объект в массив `achievements` по образцу существующих:

```js
{
  id: "my-hackathon",              // уникальный id, латиницей
  title: "Название хакатона",
  subtitle: "Трек или номинация",  // необязательно
  date: "Ноябрь 2026",             // необязательно
  description: "Пара предложений о том, что это было и что ты делал.",
  tags: ["Хакатон", "AI"],         // необязательно
  image: myHackathonShot,          // превью
  imageWidth: 848,                 // ширина превью в px (чтобы карточка
  imageHeight: 1200,               // не прыгала до загрузки картинки)
  pdf: "/certificates/my-hackathon.pdf", // путь к PDF в public/
}
```

Новые записи появляются в блоке автоматически — компонент рисует карточку
сам, порядок в массиве = порядок на странице (свежие сверху).

## Структура

- `src/data/content.js` — весь текст сайта: о себе, проекты, навыки, достижения, контакты.
- `src/components/` — секции страницы (по одной на блок).
- `src/assets/certificates/` — превью дипломов, `public/certificates/` — PDF-оригиналы.
