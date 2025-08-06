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

const ProjectSection: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "WebMD",
      image: "https://media.licdn.com/dms/image/v2/D562DAQFdoZldhld16g/profile-treasury-image-shrink_8192_8192/B56ZcNmxyqHEAo-/0/1748279959709?e=1755054000&v=beta&t=DX1xrat_BvIKaG36UJcs2PeA8IL9hhc8W7HorzIOWZc",
      challenge: "Migrating legacy components and optimizing performance.",
      approach: "Led the transition to Vue 3 Composition API with TypeScript, implemented lazy loading and improved Lighthouse scores.",
      tools: ["Vue 3", "TypeScript", "Pinia", "Jest"],
      impact: "Improved page load time by 55% and enhanced CMS flexibility for content teams."
    },
    {
      title: "Axxess (Cavista)",
      image: "https://media.licdn.com/dms/image/v2/D562DAQF-cse6K0bfBw/profile-treasury-image-shrink_8192_8192/B56ZcNpCh4HgAk-/0/1748280552672?e=1755054000&v=beta&t=Q61mOL9DtvxS8kuG5kKOPmxKTp5qNQpXtWQQjjZnx70",
      challenge: "Creating scalable UI components for a healthcare SaaS platform.",
      approach: "Developed reusable components and implemented role-based access control across modules.",
      tools: ["React", "Redux", "Jest", "SCSS"],
      impact: "Boosted UI consistency and reduced feature delivery time by 30%."
    },
    {
      title: "Wolken Software",
      image: "https://media.licdn.com/dms/image/v2/D562DAQH7ZqbbNK-OwQ/profile-treasury-image-shrink_800_800/B56ZcNrPl0HoAY-/0/1748281130772?e=1755054000&v=beta&t=3sFKd5kqwc_6lze8lxOybfpiluYOzzOWeJocefTLo8U",
      challenge: "Modernizing a monolithic customer service dashboard.",
      approach: "Rewrote parts of the dashboard using React, optimized API integrations, and improved UX responsiveness.",
      tools: ["React", "JavaScript", "Webpack", "REST API"],
      impact: "Enhanced agent productivity and contributed to a smoother ticket resolution experience."
    }
  ];

  return (
    <section className="project-section py-10 px-4">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Professional Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </section>
  );
};

export default ProjectSection;
