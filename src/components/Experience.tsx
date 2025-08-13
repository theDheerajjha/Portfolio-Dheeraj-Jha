import React from "react";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "WebMD",
      role: "Software Engineer - Frontend",
      duration: "Jun 2024 – Present • Mumbai",
      logo: "https://logo.clearbit.com/webmd.com",
      linkedin: "https://www.linkedin.com/company/webmd/",
      highlights: [
        "Built scalable UI for PageBuilder CMS in React and Vue 3 used by non‑technical teams to create/manage content.",
        "Implemented Module Federation to dynamically load independently deployed Vue 3 apps, cutting integration complexity ~30%.",
        "Configured in‑house AI tooling (Asterix, Athena) to automate scaffolding/tests, accelerating feature delivery ~30%.",
        "Migrated ~65% of legacy code to Vue Composition API and moved builds to Vite, reducing build times ~25%.",
        "Owned core modules, mentored juniors, and drove code review standards across teams.",
      ],
    },
    {
      company: "Cavista (Axxess)",
      role: "Frontend Engineer 1",
      duration: "May 2022 – Jun 2024 • Pune",
      logo: "https://logo.clearbit.com/axxess.com",
      linkedin: "https://www.linkedin.com/company/cavista",
      highlights: [
        "Delivered accessible, responsive UIs used by 1000+ U.S. healthcare agencies, improving operational efficiency and UX.",
        "Shipped key features: visit scheduling, care plans, availability tracking to streamline care team coordination.",
        "Introduced reusable component patterns and env‑based feature flags to standardize and speed client rollouts.",
        "Collaborated on API contracts and tightened performance budgets and UI quality gates.",
      ],
    },
    {
      company: "Wolken Software",
      role: "Associate Software Developer",
      duration: "Aug 2021 – May 2022 • Bangalore",
      logo: "https://logo.clearbit.com/wolkensoftware.com",
      linkedin: "https://www.linkedin.com/company/wolken-software/",
      highlights: [
        "Built modular, reusable React + Redux components for an internal Service Desk, speeding feature delivery.",
        "Optimized data‑heavy ticket views with lazy loading and server‑side pagination, reducing initial load ~35%.",
        "Improved usability and consistency via shared styles and SCSS utilities across the platform.",
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
                  {exp.logo ? (
                    <img src={exp.logo} alt={`${exp.company} logo`} className="experience__logo" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  ) : null}
                  <h3 className="experience__role">
                    {exp.role}
                  </h3>
                  <span className="experience__duration">
                    {exp.duration}
                  </span>
                </div>

                <p className="experience__company">
                  {exp.linkedin ? (
                    <a
                      href={exp.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${exp.company} LinkedIn page in a new tab`}
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </p>

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
