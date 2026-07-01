import Reveal from "./Reveal";
import { certifications, education, languages } from "../data/resume";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal>
          <span className="eyebrow">05 / Education</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-heading">Credentials &amp; background</h2>
        </Reveal>

        <div className="edu__grid">
          <Reveal delay={0.08}>
            <div className="edu__block">
              <h3 className="edu__block-title">Education</h3>
              {education.map((e) => (
                <div className="edu-item" key={e.degree}>
                  <div className="edu-item__row">
                    <h4>{e.degree}</h4>
                    <span className="mono-tag">{e.year}</span>
                  </div>
                  {e.field && <p className="edu-item__field">{e.field}</p>}
                  <p className="edu-item__school">{e.school}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="edu__block">
              <h3 className="edu__block-title">Certifications</h3>
              {certifications.map((c) => (
                <div className="cert-item" key={c.name}>
                  <span className="cert-item__icon">OK</span>
                  <div>
                    <h4>{c.name}</h4>
                    <p className="mono-tag">{c.issuer}</p>
                  </div>
                </div>
              ))}

              <h3 className="edu__block-title edu__block-title--spaced">Languages</h3>
              <div className="lang-row">
                {languages.map((l) => (
                  <span className="lang-pill" key={l}>
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
