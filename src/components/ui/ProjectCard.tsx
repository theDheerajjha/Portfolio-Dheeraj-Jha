import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  challenge: string;
  approach: string;
  tools: string[];
  impact: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title, image, challenge, approach, tools, impact, link
}) => (
  <article className="projects__card flex flex-col md:flex-row overflow-hidden" tabIndex={0} aria-labelledby={`project-title-${title.replace(/\s+/g, '-')}`}> 
    <div className="projects__media">
      <img 
        src={image} 
        alt={`${title} screenshot`} 
        className="projects__media-img transition-transform duration-200 hover:scale-105" 
      />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 id={`project-title-${title.replace(/\s+/g, '-')}`} className="projects__card-title">{title}</h3>
      <ul className="mb-2 text-sm">
        <li><strong>Challenge:</strong> {challenge}</li>
        <li><strong>Approach:</strong> {approach}</li>
        <li><strong>Tools Used:</strong> {tools.join(", ")}</li>
        <li><strong>Impact:</strong> {impact}</li>
      </ul>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="projects__card-link mt-auto font-medium">
          Know More
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;