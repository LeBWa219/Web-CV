import { roles } from "../data/content";

function Portfolio({ role }) {
  const projects = roles[role].portfolio;
  return (
    <section id="portfolio" className="section">
      <h2>Портфолио</h2>
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
    </section>
  );
}

export default Portfolio;
