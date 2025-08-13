import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ui/ProjectCard";

const Projects: React.FC = () => (
  <section id="projects" className="projects__section">
    <div className="projects__container" style={{maxWidth: '1200px'}}>
      <h2 className="projects__title">Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
