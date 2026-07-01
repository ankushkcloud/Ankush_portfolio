import Reveal from "./Reveal";
import { profile } from "../data/resume";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact__card">
          <div className="contact__glow" />
          <Reveal>
            <span className="eyebrow">06 / Contact</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="contact__heading">
              Have infrastructure to build,
              <br /> or a system to keep alive?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="contact__sub">
              I'm open to Cloud, DevOps and Linux administration roles. Reach out directly and
              I'll get back to you.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="contact__actions">
              <a href={`mailto:${profile.email}`} className="btn btn--primary">
                {profile.email}
                <span className="btn__arrow">-&gt;</span>
              </a>
              <a href={`tel:${profile.phone}`} className="btn btn--ghost">
                {profile.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="contact__links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>{profile.location}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
