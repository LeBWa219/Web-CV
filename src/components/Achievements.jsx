import { achievements } from "../data/content";

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-head">
        <span className="section-number">04</span>
        <h2>Достижения</h2>
        <p className="section-note">
          Дипломы и сертификаты с хакатонов и других событий — клик по карточке
          открывает оригинал в PDF.
        </p>
      </div>
      <div className="achievements-list">
        {achievements.map((item) => (
          <article key={item.id} className="achievement">
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="achievement-shot"
              tabIndex={-1}
            >
              <img
                src={item.image}
                alt={`Диплом: ${item.title}`}
                width={item.imageWidth}
                height={item.imageHeight}
              />
            </a>
            <div className="achievement-body">
              <div className="achievement-head">
                <h3>{item.title}</h3>
                {item.date && (
                  <span className="achievement-date">{item.date}</span>
                )}
              </div>
              {item.subtitle && (
                <p className="achievement-subtitle">{item.subtitle}</p>
              )}
              <p className="achievement-desc">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <ul className="achievement-tags">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
              <div className="achievement-links">
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Открыть диплом ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
