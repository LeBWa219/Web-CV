import { contacts } from "../data/content";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-left">
        <span className="section-label">Контакты</span>
        <h2>Связаться со мной</h2>
      </div>
      <div className="section-right">
        <div className="contacts-badge">
          <ul className="contacts-list">
            <li>
              <a href={`mailto:${contacts.email}`} className="contact-link">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{contacts.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${contacts.phone}`} className="contact-link">
                <span className="contact-icon">📞</span>
                <span className="contact-text">
                  <span className="contact-label">Телефон</span>
                  <span className="contact-value">{contacts.phone}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`https://t.me/${contacts.telegram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">💬</span>
                <span className="contact-text">
                  <span className="contact-label">Telegram</span>
                  <span className="contact-value">{contacts.telegram}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">🔗</span>
                <span className="contact-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Профиль LinkedIn</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">🐙</span>
                <span className="contact-text">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">Профиль GitHub</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
