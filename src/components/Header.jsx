import { personal } from "../data/content";

const nav = [
  { id: "projects", label: "Работы" },
  { id: "about", label: "Обо мне" },
  { id: "skills", label: "Навыки" },
  { id: "achievements", label: "Достижения" },
  { id: "contacts", label: "Контакты" },
];

function Header() {
  return (
    <header className="header">
      <a href="#top" className="header-name">
        {personal.name}
      </a>
      <nav className="header-nav">
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
