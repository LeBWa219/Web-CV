import { about } from "../data/content";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <span className="section-number">02</span>
        <h2>Обо мне</h2>
      </div>
      <div className="about-text">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
