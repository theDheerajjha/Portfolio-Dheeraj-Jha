import React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const core = ["React", "Vue", "TypeScript", "Next.js", "Node.js"];
  const tools = ["Vite", "Webpack", "Tailwind", "SCSS", "MUI"];
  const practices = ["Accessibility", "Performance", "Design Systems", "Testing", "DX/Tooling"];

  const highlights = [
    { label: "React", value: "4+ yrs" },
    { label: "Vue", value: "3+ yrs" },
    { label: "TypeScript", value: "4 yrs" },
    { label: "LCP", value: "< 2s" },
    { label: "A11y", value: "WCAG AA" },
    { label: "DX", value: "Design Systems" },
  ];

  const expertise = [
    { name: "React", level: 90 },
    { name: "Vue", level: 80 },
    { name: "TypeScript", level: 90 },
    { name: "Performance", level: 85 },
    { name: "Accessibility", level: 80 },
    { name: "Testing", level: 70 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills__title">Capabilities</h2>

          <div className="skills__highlights">
            {highlights.map((h) => (
              <span key={h.label} className="skills__highlight">
                <strong>{h.value}</strong> {h.label}
              </span>
            ))}
          </div>

          <div className="skills__matrix">
            <div className="skills__group">
              <h3 className="skills__group-title">Core</h3>
              <div className="skills__chips">
                {core.map((s) => (
                  <span key={s} className="skills__chip">{s}</span>
                ))}
              </div>
            </div>
            <div className="skills__group">
              <h3 className="skills__group-title">Tools</h3>
              <div className="skills__chips">
                {tools.map((s) => (
                  <span key={s} className="skills__chip">{s}</span>
                ))}
              </div>
            </div>
            <div className="skills__group">
              <h3 className="skills__group-title">Practices</h3>
              <div className="skills__chips">
                {practices.map((s) => (
                  <span key={s} className="skills__chip">{s}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="skills__expertise">
            {expertise.map((e) => (
              <div key={e.name} className="skills__bar">
                <div className="skills__bar-label">
                  <span>{e.name}</span>
                  <span>{e.level}%</span>
                </div>
                <div className="skills__bar-track">
                  <div className="skills__bar-fill" style={{ width: `${e.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
