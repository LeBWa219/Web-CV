import f1Shot from "../assets/projects/f1-tickets.jpg";
import vseSvoiShot from "../assets/projects/vse-svoi.jpg";
import ecoTeploShot from "../assets/projects/eco-teplo.jpg";
import purpleStudioShot from "../assets/projects/purple-studio.jpg";
import timetableShot from "../assets/projects/timetable.jpg";
import hackAndChangeShot from "../assets/certificates/hack-and-change.jpg";
import maxHackathonShot from "../assets/certificates/max-hackathon.jpg";

export const personal = {
  name: "Иван Братчиков",
  role: "Фронтенд-разработчик",
  intro:
    "Мне 20 лет, студент 3 курса СГТУ им. Гагарина. Полтора года работал в IT: начинал с ручного тестирования сайтов, потом перешёл к веб-дизайну и разработке на React. Сейчас ищу стажировку или первую позицию во фронтенде.",
};

export const about = {
  paragraphs: [
    "Полтора года я работал в «EasyDigital» — начинал с ручного тестирования сайтов, ботов и промоакций. Самые крупные проекты там — сайт выставки HR EXPO 2025 и сайт для «Детского мира». Параллельно увлёкся веб-дизайном: сделал несколько макетов в Figma и сверстал по ним сайты.",
    "Опыт тестирования сильно помогает в разработке: я заранее вижу, где интерфейс может сломаться, пишу понятные баг-репорты и проверяю свою работу до сдачи, а не после.",
  ],
};

export const projects = [
  {
    id: "f1-tickets",
    title: "Race Hub — магазин билетов Формулы-1",
    image: f1Shot,
    description:
      "Сайт покупки билетов на гонки: расписание этапов, слайдер новостей, корзина и админ-панель. Написан на TypeScript с роутером react-router-dom, стили на CSS Modules, данные берёт из API.",
    tags: ["TypeScript", "react-router-dom", "CSS Modules", "API"],
    links: [
      { label: "Сайт", url: "https://lebwa219.github.io/f1-tickets-cite/" },
      {
        label: "Макет в Figma",
        url: "https://www.figma.com/site/VJErXd4xtg8YCPy0cvpci9/f1_tickets?node-id=75-40&t=fehBV3AmlIcgbsf4-0",
      },
      { label: "GitHub", url: "https://github.com/LeBWa219/f1-tickets-cite" },
    ],
  },
  {
    id: "vse-svoi",
    title: "«Все свои» — сервис аутсорсинга персонала",
    image: vseSvoiShot,
    description:
      "Лендинг с переключением «заказчик/исполнитель» через Context API, формами заявки, модалками и cookie-баннером. Собран на Tailwind со статической генерацией страниц.",
    tags: ["React", "Context API", "Хуки", "Tailwind CSS"],
    links: [
      { label: "Сайт", url: "https://lebwa219.github.io/vse-svoi/" },
      { label: "GitHub", url: "https://github.com/LeBWa219/vse-svoi" },
    ],
  },
  {
    id: "eco-teplo",
    title: "БиоГорелка — производитель котлов на биотопливе",
    image: ecoTeploShot,
    description:
      "Корпоративный сайт: заявка на звонок уходит в Telegram, телефон форматируется на лету, есть FAQ-аккордеоны и каталог продукции.",
    tags: ["React 19", "Telegram API", "Формы"],
    links: [
      { label: "Сайт", url: "https://lebwa219.github.io/eco-teplo/" },
      { label: "GitHub", url: "https://github.com/LeBWa219/eco-teplo" },
    ],
  },
  {
    id: "purple-studio",
    title: "Фиолетовая студия — сайт салона маникюра",
    image: purpleStudioShot,
    description:
      "Сайт студии с онлайн-записью: анимации на Motion (Framer Motion), бегущая строка услуг, галерея работ и форма записи.",
    tags: ["React", "Motion", "Анимации"],
    links: [
      { label: "Сайт", url: "https://lebwa219.github.io/purple_studio/" },
      { label: "GitHub", url: "https://github.com/LeBWa219/purple_studio" },
    ],
  },
  {
    id: "timetable",
    title: "Расписание — личный трекер дел",
    image: timetableShot,
    description:
      "Пет-проект: задачи на неделю, хранение в localStorage и синхронизация через GitHub API. Место, где по-настоящему разобрался с хуками: useState, useEffect, useMemo, useRef.",
    tags: ["React", "Хуки", "GitHub API"],
    links: [
      { label: "Сайт", url: "https://lebwa219.github.io/timetable/" },
      { label: "GitHub", url: "https://github.com/LeBWa219/timetable" },
    ],
  },
  {
    id: "autotests",
    title: "Playwright-автотесты",
    description:
      "E2E-набор из ~14 сценариев: авторизация, регистрация, личный кабинет, модалки, восстановление пароля, кроссбраузерные проверки. Написаны на JavaScript с общими хелперами и устойчивыми селекторами с fallback-вариантами.",
    tags: ["Playwright", "E2E", "Git"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/LeBWa219/autotests/tree/main/tests",
      },
    ],
  },
  {
    id: "test-report",
    title: "Отчёт о тестировании сайта",
    description:
      "Ручное тестирование одного из рабочих проектов: тест-кейсы, найденные баги и рекомендации — всё в одном документе. Тестирование — то, с чего начался мой путь в IT.",
    tags: ["Ручное тестирование", "Баг-репорты"],
    links: [
      {
        label: "Открыть документ",
        url: "https://docs.google.com/document/d/1fiXeEW5ZAx0FJUhqm77IXtv_WqFmAaQhirHsU3jHWEM/edit?usp=sharing",
      },
    ],
  },
];

export const skillGroups = [
  {
    name: "Фронтенд",
    items: [
      "HTML и CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Работа с хуками (useState, useEffect, useContext, useRef)",
      "react-router-dom",
      "CSS Modules",
      "Tailwind CSS",
      "Адаптивная вёрстка",
    ],
  },
  {
    name: "Дизайн",
    items: ["Figma", "Макеты сайтов", "Прототипирование", "Дизайн-системы"],
  },
  {
    name: "Тестирование",
    items: [
      "Автотесты на Playwright",
      "Ручное тестирование",
      "Тест-кейсы и баг-репорты",
      "DevTools",
      "Postman",
    ],
  },
  {
    name: "Инструменты",
    items: ["Git", "GitHub Pages", "WordPress", "MSSQL / PostgreSQL / MongoDB"],
  },
];

// ==== Достижения ====
// Как добавить новый сертификат / диплом:
//   1. Положи PDF-файл в public/certificates/ (например, my-hackathon.pdf).
//   2. Сделай превью-картинку (jpg) и положи её в src/assets/certificates/.
//   3. Импортируй картинку вверху этого файла и добавь объект в массив ниже.
// Поле date необязательно — если оставить пустым, дата просто не выведется.
export const achievements = [
  {
    id: "hack-and-change",
    title: "Hack & Change by Changellenge",
    subtitle: "Трек «AI от ПСБ: Юридический ассистент»",
    date: "Ноябрь 2026",
    description:
      "Недельный хакатон, где почти 4000 студентов и выпускников разрабатывали прототипы под задачи компаний-партнёров — ПСБ, Avito, Альфа-Банка и МТС. Представил прототип решения в треке AI от ПСБ — юридического ассистента.",
    tags: ["Хакатон", "AI", "Продуктовое мышление"],
    image: hackAndChangeShot,
    imageWidth: 848,
    imageHeight: 1200,
    pdf: "/certificates/hack-and-change.pdf",
  },
  {
    id: "max-hackathon",
    title: "Хакатон мессенджера MAX",
    subtitle: "Трек «Забота о людях»",
    date: "Октябрь 2026",
    description:
      "Студенческий хакатон по разработке сервисов для национального мессенджера MAX от Минобрнауки России, VK и МИРЭА. Трек «Забота о людях» — сервисы для быстрого доступа к госуслугам, записи к врачу и оформления льгот.",
    tags: ["Хакатон", "MAX", "Сервисы"],
    image: maxHackathonShot,
    imageWidth: 1200,
    imageHeight: 849,
    pdf: "/certificates/max-hackathon.pdf",
  },
];

export const education = {
  university: "СГТУ им. Ю.А. Гагарина",
  institute: "Институт прикладных информационных технологий и коммуникаций",
  field: "Направление: «Информационные системы и технологии»",
  year: "3 курс",
};

export const contacts = {
  email: "idbratchikov@gmail.com",
  phone: "+7 (937) 140 18 98",
  telegram: "@LeBWaaaa",
  github: "https://github.com/LeBWa219",
};
