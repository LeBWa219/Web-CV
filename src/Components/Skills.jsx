import { roles } from "../data/content";

function Skills({ role }) {
  const skills = roles[role].skills;
  return (
    <section id="skills" className="section">
      <div className="section-left">
        <span className="section-label">Навыки</span>
        <h2>Что я знаю</h2>
      </div>
      <div className="section-right">
        <div className="skills-badge">
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
