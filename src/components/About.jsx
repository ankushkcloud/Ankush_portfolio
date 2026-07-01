import Reveal from "./Reveal";
import "./About.css";

const STATS = [
  { value: "2+", label: "Years in Cloud & DevOps" },
  { value: "4", label: "Production teams supported" },
  { value: "99.9%", label: "Uptime target maintained" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">01 / About</span>
        </Reveal>
        <div className="about__grid">
          <Reveal delay={0.05}>
            <h2 className="section-heading">
              Infrastructure that runs quietly,
              <br /> because nothing broke.
            </h2>
            <p className="about__text">
              I'm a Cloud &amp; DevOps engineer based in Noida, working across AWS, Linux and
              Microsoft 365 environments. My day-to-day is deploying and hardening production
              servers, writing CI/CD pipelines that ship cleanly, and keeping systems observable
              enough that problems get caught before users notice.
            </p>
            <p className="about__text">
              I move comfortably between the terminal and the admin console - from configuring
              Nginx reverse proxies and SSL, to managing Active Directory and OneDrive for an
              organization. What I care about is reliability: fewer manual steps, faster recovery,
              and infrastructure that's documented well enough that someone else could run it.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="about__stats">
            {STATS.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-card__value">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
