import { personalInfo } from "../data/content";

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-left">
        <span className="section-label">Образование</span>
        <h2>Где учусь</h2>
      </div>
      <div className="section-right">
        <div className="education-badge">
          <p>СГТУ им. Ю.А. Гагарина</p>
          <p>Институт прикладных информационных технологий и коммуникаций</p>
          <p>Профил: Информационные системы и технологии</p>
          <p>3 курс</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
