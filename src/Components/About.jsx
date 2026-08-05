import { personalInfo } from "../data/content";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-left">
        <span className="section-label">Обо мне</span>
        <h2>Кто я</h2>
      </div>
      <div className="section-right">
        <div className="about-badge">{personalInfo.about}</div>
      </div>
    </section>
  );
}

export default About;
