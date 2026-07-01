import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/resume";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const ACTIONS = [
  { href: profile.resume, label: "Resume", external: true },
  { href: profile.github, label: "GitHub", external: true },
  { href: profile.linkedin, label: "LinkedIn", external: true },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderLink = (link) => (
    <a
      key={link.label}
      href={link.href}
      onClick={(e) => handleClick(e, link.href)}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noreferrer" : undefined}
    >
      {link.label}
    </a>
  );

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" onClick={(e) => handleClick(e, "#top")}>
          <span className="navbar__logo-mark">AK</span>
          <span className="navbar__logo-text">CloudOps</span>
        </a>

        <nav className="navbar__links">{LINKS.map(renderLink)}</nav>
        <nav className="navbar__actions">{ACTIONS.map(renderLink)}</nav>

        <button
          className={`navbar__burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {[...LINKS, ...ACTIONS].map(renderLink)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
