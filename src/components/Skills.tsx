import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const frameworkSkills = [
    {
      name: "React",
      level: "Expert",
      description:
        "Advanced React development with hooks, context, and performance optimization",
      icon: "⚛️",
      variant: "react",
    },
    {
      name: "Vue",
      level: "Advanced",
      description:
        "Proficient in Vue 2 and Vue 3, with Composition API and Vuex",
      icon: "🟢",
      variant: "vue",
    },
    {
      name: "Angular",
      level: "Intermediate",
      description:
        "Solid understanding of Angular framework, RxJS, and TypeScript",
      icon: "🅰️",
      variant: "angular",
    },
  ];

  const additionalSkills = [
    "TypeScript",
    "NextJS",
    "GraphQL",
    "REST APIs",
    "Responsive Design",
    "Performance Optimization",
    "Webpack",
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills__title">
            Frontend Framework Expertise
          </h2>

          {/* Framework Skills */}
          <div className="skills__framework-grid">
            {frameworkSkills.map((framework) => (
              <motion.div
                key={framework.name}
                whileHover={{ scale: 1.05 }}
                className={`skills__framework-card skills__framework-card--${framework.variant}`}
              >
                <div className="skills__framework-header">
                  <span className="skills__framework-icon">{framework.icon}</span>
                  <div className="skills__framework-info">
                    <h3>{framework.name}</h3>
                    <p>{framework.level}</p>
                  </div>
                </div>
                <p className="skills__framework-description">
                  {framework.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="skills__additional">
            <h3 className="skills__additional-title">
              Complementary Skills
            </h3>
            <div className="skills__additional-list">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="skills__additional-item"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
