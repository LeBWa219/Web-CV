import { roles } from "../data/content";

const typeIcons = {
  figma: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M14 8.5L9.5 14.5L8.5 15.5" />
      <circle cx="15.5" cy="15.5" r="1.5" />
    </svg>
  ),
  site: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2C9.5 5 9.5 19 12 22C14.5 19 14.5 5 12 2Z" />
    </svg>
  ),
  doc: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" />
      <path d="M14 2V8H20" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  github: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1845 8.96681 17.6581 9 18.13V22" />
    </svg>
  ),
};

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
                <div className="portfolio-card-left">
                  <span className="card-type">
                    {typeIcons[project.type]}
                    <span className="card-type-text">{project.type}</span>
                  </span>
                  <h3>{project.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
