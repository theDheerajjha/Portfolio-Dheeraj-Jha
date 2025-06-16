import React from "react";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  const personalProjects = [
    {
      name: "Tindog",
      description:
        "A dating app for dogs, helping pet owners find the perfect match for their pets.",
      technologies: ["HTML", "CSS", "JavaScript"],
      role: "Built a responsive app with user-friendly UI and integrated pet matchmaking features.",
      link: "https://thedheerajjha.github.io/Tindog-site/"
    },
    {
      name: "MovieFlix",
      description:
        "A movie discovery platform for users to explore and rate movies.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      role: "Designed and built the platform for searching, rating, and sharing movies.",
      link: "https://github.com/theDheerajjha/Movieflix"
    },
    {
      name: "Workwise-US",
      description:
        "A platform to streamline employee experience, from recruitment to performance management.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      role: "Developed scalable features and integrated APIs for smoother user experience.",
      link: "https://github.com/theDheerajjha/workwise-us"
    },
  ];

  const organizationalProjects = [
    {
      name: "WebMD - PageBuilder CMS",
      description: "Built dynamic frontend components for an internal PageBuilder CMS tool enabling non-technical users to design and publish content easily. Enhanced deployment pipeline and ensured cross-browser compatibility for seamless UX. Leveraged AI tools (Asterix & Athena) to automate component creation, debugging, and test writing, boosting development speed by 40%.",
      technologies: ["React", "Vue 3", "TypeScript", "Vite", "Asterix AI", "Athena AI"],
      role: "SDE - Frontend",
      duration: "June 2024 – Present",
      location: "Mumbai, India",
      link: "https://webmd.com"
    },
    {
      name: "Axxess Home Care Platform",
      description: "Delivered core features like visit scheduling, care plans, and availability tracking, streamlining operations for 1000+ US-based agencies. Built responsive, pixel-perfect UI components for a cloud-based healthcare app used across devices. Improved data syncing and loading efficiency through optimized API integration and real-time updates.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Material UI", "REST APIs"],
      role: "Frontend Engineer 1",
      duration: "May 2022 – June 2024",
      location: "Remote (India)",
      link: "https://axxess.com"
    },
    {
      name: "Wolken's Desk - Service Management App",
      description: "Developed and enhanced features like ticket management, real-time notifications, and workflow automation for a SaaS-based service desk platform. Implemented server-side pagination and optimized performance for faster data rendering. Collaborated cross-functionally with backend and design teams to elevate overall UI/UX quality.",
      technologies: ["React", "TypeScript", "Axios", "Material UI", "SCSS"],
      role: "Associate Software Developer - UI",
      duration: "Aug 2021 – May 2022",
      location: "Bangalore, India",
      link: "https://wolken.com"
    },
  ];

  return (
    <section id="personal-projects" className="projects__section">
      <div className="projects__container">
        <h2 className="projects__title">Personal Projects</h2>
        
        <div className="projects__grid">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              className="projects__card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={project.link} className="projects__card-title" target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
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
              <a href={project.link} className="projects__card-title" target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
              <div className="projects__card-meta">
                <p className="projects__card-role">{project.role}</p>
                <p className="projects__card-duration">{project.duration}</p>
                <p className="projects__card-location">{project.location}</p>
              </div>
              <p className="projects__card-description">{project.description}</p>
              <div className="projects__tech-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="projects__tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
