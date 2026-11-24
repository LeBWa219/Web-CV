function Header({ role, setRole }) {
  return (
    <header className="header">
      <div className="header-name">Иван Братчиков</div>
      <nav className="role-switcher">
        <button
          className={`role-btn ${role === "designer" ? "active" : ""}`}
          onClick={() => setRole("designer")}
        >
          Дизайнер
        </button>
        <button
          className={`role-btn ${role === "tester" ? "active" : ""}`}
          onClick={() => setRole("tester")}
        >
          Тестировщик
        </button>
      </nav>
    </header>
  );
}

export default Header;
