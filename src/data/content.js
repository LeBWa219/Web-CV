export const personalInfo = {
  name: "Иван Братчиков",
  age: 20,
  location: "Россия",
  education:
    "СГТУ им. Ю.А. Гагарина, Институт прикладных информационных технологий и коммуникаций, по профилю Информационные системы и технологии, 3 курс",
  about: `Студент с реальным опытом в тестировании (1.5 года проектной работы в компании) 
  и насмотренностью в веб-дизайне. Создаю макеты в Figma, верстаю простые сайты, 
  умею писать тест-кейсы, баг-репорты и работать с инструментами тестировщика. 
  Ищу удалённую работу, чтобы развиваться в одной из ролей.`,
};

export const roles = {
  designer: {
    label: "Дизайнер",
    heroTitle: "Привет, я Иван — веб-дизайнер",
    heroSub:
      "Создаю чистые и удобные интерфейсы, которым доверяют пользователи",
    skills: [
      "Figma",
      "Adobe Photoshop",
      "Прототипирование",
      "UI/UX дизайн",
      "HTML и CSS",
      "Адаптивная вёрстка",
      "Создание дизайн-систем",
    ],
    portfolio: [
      {
        title: "Макет интернет-магазина",
        link: "https://figma.com/your-link",
        type: "figma",
      },
      {
        title: "Лендинг для стартапа",
        link: "https://github.com/your-repo",
        type: "site",
      },
    ],
  },
  tester: {
    label: "Тестировщик",
    heroTitle: "Привет, я Иван — тестировщик",
    heroSub: "Нахожу баги раньше, чем пользователи. Делаю продукт стабильным",
    skills: [
      "Ручное тестирование",
      "Написание тест-кейсов",
      "Баг-репорты (Jira, YouTrack)",
      "DevTools",
      "Postman",
      "SQL на уровне SELECT",
      "Понимание SDLC и Agile",
    ],
    portfolio: [
      {
        title: "Отчёт о тестировании API",
        link: "https://docs.google.com/...",
        type: "doc",
      },
      {
        title: "Баг-репорты для веб-приложения",
        link: "https://github.com/...",
        type: "github",
      },
    ],
  },
};

export const contacts = {
  email: "ivan@example.com",
  phone: "+7 (999) 123-45-67",
  telegram: "@your_telegram",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourgithub",
};
