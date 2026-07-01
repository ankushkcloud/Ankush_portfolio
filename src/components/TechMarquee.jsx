import { trustedTechnologies } from "../data/resume";
import "./TechMarquee.css";

const iconLabel = (name) =>
  name
    .split(/[\s.-]+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

export default function TechMarquee() {
  const technologies = [...trustedTechnologies, ...trustedTechnologies];

  return (
    <section className="tech-marquee" aria-label="Trusted technologies">
      <div className="container">
        <div className="tech-marquee__header">
          <span className="eyebrow">Trusted Technologies</span>
          <p>Platforms and tools used across cloud operations, automation and delivery.</p>
        </div>
      </div>
      <div className="tech-marquee__rail">
        <div className="tech-marquee__track">
          {technologies.map((tech, index) => (
            <span className="tech-pill" key={`${tech}-${index}`}>
              <span className="tech-pill__icon">{iconLabel(tech)}</span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
