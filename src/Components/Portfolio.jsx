import { roles } from "../data/content";

function Portfolio({ role }) {
  const projects = roles[role].portfolio;
  return (
    <section id="portfolio" className="section">
      <div className="section-left">
        <span className="section-label">Портфолио</span>
        <h2>Мои работы</h2>
      </div>
      <div className="section-right">
        <div className="portfolio-badge">
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card"
              >
                <span className="card-type">{project.type}</span>
                <h3>{project.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
