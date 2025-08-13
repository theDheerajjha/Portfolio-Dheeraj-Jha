import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo">Dheeraj</span>
          <span className="footer__tag">Building reliable, elegant web apps.</span>
        </div>
        <nav aria-label="Social links" className="footer__social">
          <a
            href="https://github.com/theDheerajjha"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/dheeraj-jha-65b2231b7"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:write4dheeraj@gmail.com"
            className="footer__link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </nav>
        <div className="footer__meta">
          <span>© {new Date().getFullYear()} Dheeraj Jha</span>
          <span className="footer__dot" />
          <a href="#contact" className="btn-ghost">Work Together</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


