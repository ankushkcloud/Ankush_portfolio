import Reveal from "./Reveal";
import { projects } from "../data/resume";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <span className="eyebrow">04 / Projects</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-heading">Things I've built and shipped</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-sub">
            Hands-on infrastructure and automation work, from bare EC2 to full deployment
            pipelines.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal delay={0.06 * i} key={p.title}>
              <article className="project-card">
                <div className="project-card__glow" />
                <span className="project-card__index mono-tag">P{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-card__stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
