import { personal, contacts } from "../data/content";

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-role">{personal.role}</p>
      <h1 className="hero-name">{personal.name}</h1>
      <p className="hero-intro">{personal.intro}</p>
      <div className="hero-links">
        <a
          href={`https://t.me/${contacts.telegram.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram ↗
        </a>
        <a href={contacts.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href={`mailto:${contacts.email}`}>Почта ↗</a>
      </div>
    </section>
  );
}

export default Hero;
