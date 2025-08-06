import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ui/ProjectCard";

const Projects: React.FC = () => (
  <section id="projects" className="py-12 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
    <div>
      {projects.map((project, idx) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
