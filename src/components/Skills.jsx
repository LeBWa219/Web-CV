import { skillGroups } from "../data/content";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <span className="section-number">03</span>
        <h2>Навыки</h2>
      </div>
      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div key={group.name} className="skill-group">
            <h3>{group.name}</h3>
            <ul className="skill-chips">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
