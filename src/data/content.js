export const personalInfo = {
  name: "Иван Братчиков",
  age: 20,
  education: "СГТУ им. Ю.А. Гагарина, ИНПИТ ИФСТ, 3 курс",
  about:
    "Меня зовут Иван, мне 20 лет. Я студент 3 курса Саратовского государственного технического университета по направлению «Информационные системы и технологии». Уже полтора года работаю в IT: начинал в компании «EasyDigital», там я занимался тестированием различных ботов, промоакций и сайтов. Самыми крупными проектами стали сайты для «HR EXPO 2025» и сайт для компании «Детский мир». Позже увлёкся веб-дизайном. Сделал несколько макетов и после написал несколько сайтов.",
};

export const roles = {
  designer: {
    label: "Дизайнер",
    heroTitle: "Привет, я Иван — веб-дизайнер",
    heroSub: "Создаю чистые и удобные интерфейсы",
    skills: [
      "Создание макетов в Figma",
      "Вёрстка простых сайтов",
      "Верстка сайтов на React",
      "Верстка сайтов на Wordpress",
      "Прототипирование",
      "Работа с различнымы БД (MSSQL,MongoDB,Postgre)",
      "UI/UX дизайн",
      "Адаптивная вёрстка",
      "Создание дизайн-систем",
    ],
    achievements: [
      "Создал 4 полноценных макета в Figma",
      "Сверстал 4 сайта на React",
      "Доработка уже готовых сайтов по требованию заказчика",
      "Разработал дизайн-систему для учебного проекта",
    ],
    portfolio: [
      {
        title: "Макет интернет-магазина для покупки билетов",
        link: "https://www.figma.com/site/VJErXd4xtg8YCPy0cvpci9/f1_tickets?node-id=75-40&t=fehBV3AmlIcgbsf4-0",
        type: "figma",
      },
      {
        title: "Интернет магазин для покупки билетов",
        link: "https://github.com/your-repo",
        type: "site",
      },
    ],
  },
  tester: {
    label: "Тестировщик",
    heroTitle: "Привет, я Иван — тестировщик",
    heroSub: "Нахожу баги раньше, чем пользователи",
    skills: [
      "Написание тест-кейсов",
      "Написание баг-репортов",
      "Работа с инструментами тестировщика",
      "DevTools",
      "Postman",
      "Ручное тестирование",
      "Понимание SDLC и Agile",
    ],
    achievements: [
      "Написал около 5 баг-репортов",
      "Провёл около 10 тестирований",
      "Работал проектно в компании 1.5 года",
      "Тестировал API через Postman",
    ],

    portfolio: [
      {
        title: "Отчёт о тестировании сайта",
        link: "https://docs.google.com/document/d/1fiXeEW5ZAx0FJUhqm77IXtv_WqFmAaQhirHsU3jHWEM/edit?usp=sharing",
        type: "doc",
      },
      {
        title: "Примеры автотестов",
        link: "https://github.com/LeBWa219/autotests/tree/main/tests",
        type: "github",
      },
    ],
  },
};

export const contacts = {
  email: "idbratchikov@gmail.com",
  phone: "+7 (937) 140 18 98",
  telegram: "@LeBWaaaa",
  github: "https://github.com/LeBWa219",
};
