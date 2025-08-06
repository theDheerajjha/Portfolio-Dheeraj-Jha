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
  <article className="project-card bg-white rounded-lg shadow-md flex flex-col md:flex-row overflow-hidden mb-8" tabIndex={0} aria-labelledby={`project-title-${title.replace(/\s+/g, '-')}`}> 
    <div className="w-full md:w-1/3 aspect-video bg-gray-100 flex items-center justify-center">
      <img 
        src={image} 
        alt={`${title} screenshot`} 
        className="w-full h-full object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg transition-transform duration-200 hover:scale-105" 
        style={{ aspectRatio: '16/9' }}
      />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 id={`project-title-${title.replace(/\s+/g, '-')}`} className="text-xl font-bold mb-2">{title}</h3>
      <ul className="mb-2 text-sm text-gray-700">
        <li><strong>Challenge:</strong> {challenge}</li>
        <li><strong>Approach:</strong> {approach}</li>
        <li><strong>Tools Used:</strong> {tools.join(", ")}</li>
        <li><strong>Impact:</strong> {impact}</li>
      </ul>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-auto text-blue-600 hover:underline font-medium">
          View Site
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;