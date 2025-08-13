import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  const headline = "Dheeraj Jha";
  const valueProp = "Frontend Engineer crafting fast, accessible, elegant web apps (React, Vue, TypeScript).";

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
          <h1 className="header__title">{headline}</h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="header__subtitle"
          >
            {valueProp}
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
