import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Axxess Home Care',
      description: 'Cloud-based software product for home care solutions used by over 1000 agencies in the United States',
      technologies: ['React.js', 'NextJS', 'Tailwind CSS', 'MaterialUI'],
      role: 'Developed user-facing features and optimized web structures'
    },
    {
      name: 'Wolken\'s Desk',
      description: 'Enterprise service management platform',
      technologies: ['React', 'Redux', 'MaterialUI'],
      role: 'Implemented frontend features and improved user experience'
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative py-16 bg-neutral-900 text-neutral-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-cosmic">
            Notable Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.name}
                whileHover={{ scale: 1.05 }}
                className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-brand-300">
                  {project.name}
                </h3>
                
                <p className="text-neutral-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-neutral-700 text-brand-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-neutral-400 text-sm italic">
                  {project.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
