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
                <span className="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13L2 4" />
                  </svg>
                </span>
                <span className="contact-text">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">{contacts.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${contacts.phone}`} className="contact-link">
                <span className="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18.01" />
                  </svg>
                </span>
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
                <span className="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 3L2 9L10 15L21 3Z" />
                    <path d="M21 3L14 21L10 15" />
                    <line x1="10" y1="15" x2="14" y2="21" />
                  </svg>
                </span>
                <span className="contact-text">
                  <span className="contact-label">Telegram</span>
                  <span className="contact-value">{contacts.telegram}</span>
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
                <span className="contact-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1845 8.96681 17.6581 9 18.13V22" />
                  </svg>
                </span>
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
