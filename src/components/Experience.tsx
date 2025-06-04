import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "WebMD",
      role: "Software Engineer",
      duration: "06/2024 - Present",
      highlights: [
        "Implemented frontend features using ReactJS, JavaScript, and MaterialUI",
        "Integrated RESTful APIs and refined web tools for enhanced user experiences",
      ],
    },
    {
      company: "Cavista Technology(Axxess)",
      role: "Frontend Engineer",
      duration: "05/2022 - 06/2024",
      highlights: [
        "Developed web apps using ReactJS, Vue 3, and MaterialUI",
        "Conducted code reviews and collaborated with backend developers",
      ],
    },
    {
      company: "Wolken Software",
      role: "Associate Software Developer",
      duration: "08/2021 - 05/2022",
      highlights: [
        "Developed user-facing features with React and Redux",
        "Supported existing integrations in an Agile environment",
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="experience__title">
            Professional Experience
          </h2>

          <div className="experience__list">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="experience__item"
              >
                <div className="experience__header">
                  <h3 className="experience__role">
                    {exp.role}
                  </h3>
                  <span className="experience__duration">
                    {exp.duration}
                  </span>
                </div>

                <p className="experience__company">{exp.company}</p>

                <ul className="experience__highlights">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
