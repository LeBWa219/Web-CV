import { contacts } from "../data/content";

const items = [
  {
    label: "Почта",
    value: contacts.email,
    href: `mailto:${contacts.email}`,
  },
  {
    label: "Telegram",
    value: contacts.telegram,
    href: `https://t.me/${contacts.telegram.replace("@", "")}`,
  },
  {
    label: "GitHub",
    value: "github.com/LeBWa219",
    href: contacts.github,
  },
  {
    label: "Телефон",
    value: contacts.phone,
    href: `tel:${contacts.phone.replace(/[^+\d]/g, "")}`,
  },
];

function Contact() {
  return (
    <section id="contacts" className="section">
      <div className="section-head">
        <span className="section-number">06</span>
        <h2>Контакты</h2>
        <p className="section-note">
          Быстрее всего отвечаю в Telegram. Если удобнее почтой или телефоном —
          пишите, свяжусь.
        </p>
      </div>
      <div className="contacts-grid">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="contact-item"
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className="contact-label">{item.label}</span>
            <span className="contact-value">{item.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
