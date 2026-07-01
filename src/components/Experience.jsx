import Reveal from "./Reveal";
import { experience } from "../data/resume";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <span className="eyebrow">03 / Experience</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-heading">Where I've kept things running</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="section-sub">
            A timeline of the teams and infrastructure I've been responsible for.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal delay={0.05 * i} key={job.company}>
              <div className={`timeline__item ${job.current ? "timeline__item--current" : ""}`}>
                <div className="timeline__marker">
                  <span className="timeline__dot" />
                  {i < experience.length - 1 && <span className="timeline__line" />}
                </div>
                <div className="timeline__content">
                  <div className="timeline__head">
                    <h3>{job.role}</h3>
                    {job.current && <span className="timeline__badge">Current</span>}
                  </div>
                  <p className="timeline__company">{job.company}</p>
                  <p className="timeline__period mono-tag">{job.period}</p>
                  <ul className="timeline__points">
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
