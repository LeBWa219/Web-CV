import { roles } from "../data/content";

function Skills({ role }) {
  const skills = roles[role].skills;
  return (
    <section id="skills" className="section">
      <h2>Навыки</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
