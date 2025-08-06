import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const introText = "Hi, I'm Dheeraj! 👋";
  const subtitleTexts = [
    "Crafting Digital Experiences 🚀",
    "Turning Code into Magic ✨",
    "Web Wizard at Your Service 🧙‍♂️",
  ];
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const typeWriter = setInterval(() => {
      if (index < introText.length) {
        currentText += introText.charAt(index);
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(typeWriter);

        // Smooth scroll to the about section after typing is done
        setTimeout(() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          } else {
            // fallback: set hash if element not found
            window.location.hash = "#about";
          }
        }, 500); // slight delay for UX
        const subtitleCycle = setInterval(() => {
          setSubtitleIndex((prev) => (prev + 1) % subtitleTexts.length);
        }, 3000);

        return () => clearInterval(subtitleCycle);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, []);

  const technologies = [
    "ReactJS",
    "VueJS",
    "TypeScript",
    "NextJS",
    "NodeJS",
    "Tailwind CSS",
  ];

  return (
    <div id="home" className="header">
      <Navbar />

      {/* Background Geometric Shapes */}
      <div className="header__background"></div>
      <div className="header__background header__background--secondary"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="header__content"
      >
        <div>
          <h1 className="header__title">
            {displayText}
            <span className="animate-blink">|</span>
          </h1>

          <motion.p
            key={subtitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="header__subtitle"
          >
            {subtitleTexts[subtitleIndex]}
          </motion.p>

          <div className="header__tech-stack">
            {technologies.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="header__tech-item"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="header__cta">
            <motion.a
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="header__button header__button--primary"
            >
              Explore My Journey
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="header__button header__button--secondary"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="header__social">
            <motion.a
              href="https://linkedin.com/in/dheeraj-jha-65b2231b7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="header__social-link"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://github.com/theDheerajjha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="header__social-link"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="mailto:write4dheeraj@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="header__social-link"
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
