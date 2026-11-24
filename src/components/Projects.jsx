import { projects } from "../data/content";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <span className="section-number">01</span>
        <h2>Работы</h2>
        <p className="section-note">
          Сайты на React, пет-проект и артефакты тестирования — всё можно
          открыть и посмотреть.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project${project.image ? "" : " project--text"}`}
          >
            {project.image && (
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-shot"
                tabIndex={-1}
              >
                <img
                  src={project.image}
                  alt={`Скриншот: ${project.title}`}
                  loading="lazy"
                />
              </a>
            )}
            <div className="project-body">
              <div className="project-head">
                <h3>{project.title}</h3>
                <ul className="project-tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <p className="project-desc">{project.description}</p>
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
