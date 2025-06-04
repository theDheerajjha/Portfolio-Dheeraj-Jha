import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const personalProjects = [
    {
      name: "MovieFlix",
      description:
        "A movie discovery platform for users to explore and rate movies.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      role: "Designed and built the platform for searching, rating, and sharing movies.",
    },
    {
      name: "Tindog",
      description:
        "A dating app for dogs, helping pet owners find the perfect match for their pets.",
      technologies: ["HTML", "CSS", "JavaScript"],
      role: "Built a responsive app with user-friendly UI and integrated pet matchmaking features.",
    },
    {
      name: "Workwise-US",
      description:
        "A platform to streamline employee experience, from recruitment to performance management.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      role: "Developed scalable features and integrated APIs for smoother user experience.",
    },
  ];

  const organizationalProjects = [
    {
      name: "Axxess Home Care",
      description:
        "Cloud-based software product for home care solutions used by over 1000 agencies in the United States.",
      technologies: ["React.js", "NextJS", "Tailwind CSS", "MaterialUI"],
      role: "Developed user-facing features and optimized web structures.",
    },
    {
      name: "Wolken's Desk",
      description: "Enterprise service management platform.",
      technologies: ["React", "Redux", "MaterialUI"],
      role: "Implemented frontend features and improved user experience.",
    },
    {
      name: "Medscape",
      description:
        "A medical resource platform providing healthcare professionals with the latest medical news, drug information, and clinical guidelines.",
      technologies: ["React", "GraphQL", "Node.js"],
      role: "Led the frontend team in building and optimizing key features for Medscape.",
    },
  ];

  return (
    <section className="projects__section">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>
        
        <div className="projects__grid">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="projects__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="projects__card-title">{project.name}</h3>
              <p className="projects__card-description">{project.description}</p>
              <div className="projects__tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="projects__tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="projects__card-role">Role: {project.role}</p>
            </motion.div>
          ))}
        </div>

        <h2 className="projects__title" style={{ marginTop: '4rem' }}>Organizational Projects</h2>
        
        <div className="projects__grid">
          {organizationalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="projects__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="projects__card-title">{project.name}</h3>
              <p className="projects__card-description">{project.description}</p>
              <div className="projects__tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="projects__tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="projects__card-role">Role: {project.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
