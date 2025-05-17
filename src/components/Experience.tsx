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
    <section
      id="experience"
      className="relative py-16 bg-neutral-900 text-neutral-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-cosmic">
            Professional Experience
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-brand-300">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-neutral-400">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-neutral-300 mb-3">{exp.company}</p>

                <ul className="list-disc list-inside text-neutral-300 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm">
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
