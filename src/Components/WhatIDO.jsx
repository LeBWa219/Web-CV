import { roles } from "../data/content";

function WhatIDo({ role }) {
  const data = roles[role];

  return (
    <section id="whatido" className="section">
      <div className="section-left">
        <span className="section-label">Что я делаю</span>
        <h2>Мои навыки</h2>
      </div>
      <div className="section-right">
        <div className="whatido-badge">
          <h3 className="whatido-subtitle">Создаю:</h3>
          <ul className="whatido-list">
            {data.skills.slice(0, 3).map((skill, index) => (
              <li key={index} className="whatido-item">
                {skill}
              </li>
            ))}
          </ul>

          <h3 className="whatido-subtitle">Умею:</h3>
          <ul className="whatido-list">
            {data.skills.slice(3, 9).map((skill, index) => (
              <li key={index} className="whatido-item">
                {skill}
              </li>
            ))}
          </ul>

          <h3 className="whatido-subtitle">Сделал:</h3>
          <ul className="whatido-list">
            {data.achievements.map((item, index) => (
              <li key={index} className="whatido-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
