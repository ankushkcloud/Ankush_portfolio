import Reveal from "./Reveal";
import { skillGroups } from "../data/resume";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <span className="eyebrow">02 / Skills</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-heading">The stack behind the deployments</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-sub">
            Tools I reach for daily to provision, ship and keep infrastructure healthy.
          </p>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal delay={0.04 * i} key={group.label}>
              <div className="skill-card">
                <div className="skill-card__head">
                  <span className="skill-card__index">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{group.label}</h3>
                </div>
                <div className="skill-card__tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
