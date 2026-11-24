import { education } from "../data/content";

function Education() {
  return (
    <section id="education" className="section">
      <div className="section-head">
        <span className="section-number">05</span>
        <h2>Образование</h2>
      </div>
      <div className="education-text">
        <p className="education-university">{education.university}</p>
        <p>{education.institute}</p>
        <p>{education.field}</p>
        <p>{education.year}</p>
      </div>
    </section>
  );
}

export default Education;
