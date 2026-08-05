import { roles } from "../data/content";

function Hero({ role }) {
  const data = roles[role];
  return (
    <section id="hero" className="hero">
      <h1 className="hero-title">{data.heroTitle}</h1>
      <p className="hero-sub">{data.heroSub}</p>
    </section>
  );
}

export default Hero;
