import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile, terminalLines } from "../data/resume";
import NetworkField from "./NetworkField";
import "./Hero.css";

function useTypewriter(lines, speed = 24, pause = 520) {
  const [display, setDisplay] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const current = lines[lineIdx].text;

    if (charIdx <= current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDisplay((d) => [...d, current]);
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, pause);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx, lines, speed, pause]);

  const inProgress = lineIdx < lines.length ? lines[lineIdx].text.slice(0, charIdx) : "";
  return { completed: display, inProgress, done: lineIdx >= lines.length, lineIdx };
}

export default function Hero() {
  const { completed, inProgress, done, lineIdx } = useTypewriter(terminalLines);
  const heroRef = useRef(null);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="hero" ref={heroRef}>
      <NetworkField />
      <div className="hero__ambient hero__ambient--one" />
      <div className="hero__ambient hero__ambient--two" />
      <div className="container hero__inner">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hero__copy"
        >
          <span className="hero__availability">
            <span />
            Available for Cloud & DevOps roles
          </span>
          <h1 className="hero__title">
            {profile.name}
            <span className="hero__title-cursor">.</span>
          </h1>
          <div className="hero__roles" aria-label="Professional titles">
            {profile.roles.map((role, i) => (
              <span className="hero__role-badge" style={{ "--i": i }} key={role}>
                {role}
              </span>
            ))}
          </div>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <a href={profile.resume} className="btn btn--primary">
              Download Resume
              <span className="btn__arrow">-&gt;</span>
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={(e) => scrollTo(e, "#contact")}>
              Contact Me
              <span className="btn__arrow">-&gt;</span>
            </a>
            <a href="#projects" className="btn btn--ghost" onClick={(e) => scrollTo(e, "#projects")}>
              View Projects
              <span className="btn__arrow">-&gt;</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn--quiet">
              GitHub
              <span className="btn__arrow">-&gt;</span>
            </a>
          </div>

          <div className="hero__meta">
            <span>{profile.location}</span>
            <span className="hero__meta-sep">/</span>
            <span>{profile.email}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="terminal"
        >
          <div className="terminal__bar">
            <span className="terminal__dot terminal__dot--red" />
            <span className="terminal__dot terminal__dot--yellow" />
            <span className="terminal__dot terminal__dot--green" />
            <span className="terminal__title">ankush@prod-control-plane:~</span>
            <span className="terminal__status">secure shell</span>
          </div>
          <div className="terminal__body">
            {completed.map((line, i) => (
              <div className={`terminal__line terminal__line--${terminalLines[i].type}`} key={i}>
                {terminalLines[i].type === "cmd" ? <span className="terminal__prompt">$</span> : null}
                <span className={terminalLines[i].type === "cmd" ? "terminal__cmd" : "terminal__out"}>
                  {line}
                </span>
              </div>
            ))}
            {!done && (
              <div className={`terminal__line terminal__line--${terminalLines[lineIdx].type}`}>
                {terminalLines[lineIdx].type === "cmd" ? <span className="terminal__prompt">$</span> : null}
                <span className={terminalLines[lineIdx].type === "cmd" ? "terminal__cmd" : "terminal__out"}>
                  {inProgress}
                </span>
                <span className="terminal__caret" />
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll">
        <span />
      </div>
    </section>
  );
}
