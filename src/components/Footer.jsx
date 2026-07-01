import { profile } from "../data/resume";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="mono-tag">Copyright {new Date().getFullYear()} {profile.name}</span>
        <span className="mono-tag">Built with React</span>
      </div>
    </footer>
  );
}
