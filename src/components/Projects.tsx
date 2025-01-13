import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const personalProjects = [
    {
      name: 'MovieFlix',
      description: 'A movie discovery platform for users to explore and rate movies.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      role: 'Designed and built the platform for searching, rating, and sharing movies.'
    },
    {
      name: 'Tindog',
      description: 'A dating app for dogs, helping pet owners find the perfect match for their pets.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      role: 'Built a responsive app with user-friendly UI and integrated pet matchmaking features.'
    },
    {
      name: 'Workwise',
      description: 'A platform to streamline employee experience, from recruitment to performance management.',
      technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS'],
      role: 'Developed scalable features and integrated APIs for smoother user experience.'
    }
  ];

  const organizationalProjects = [
    {
      name: 'Axxess Home Care',
      description: 'Cloud-based software product for home care solutions used by over 1000 agencies in the United States.',
      technologies: ['React.js', 'NextJS', 'Tailwind CSS', 'MaterialUI'],
      role: 'Developed user-facing features and optimized web structures.'
    },
    {
      name: 'Wolken\'s Desk',
      description: 'Enterprise service management platform.',
      technologies: ['React', 'Redux', 'MaterialUI'],
      role: 'Implemented frontend features and improved user experience.'
    },
    {
      name: 'Medscape',
      description: 'A medical resource platform providing healthcare professionals with the latest medical news, drug information, and clinical guidelines.',
      technologies: ['React', 'GraphQL', 'Node.js'],
      role: 'Led the frontend team in building and optimizing key features for Medscape.'
    },

  ];

  return (
    <>
      <section id="personal-projects" className="relative py-16 bg-gradient-to-r from-neutral-800 via-neutral-900 to-black text-neutral-100 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-pink-600">
              Personal Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 * index }}
                  className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-brand-300">
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

      <section id="organizational-projects" className="relative py-16 bg-gradient-to-r from-neutral-800 via-neutral-900 to-black text-neutral-100 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-pink-600">
              Organizational Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {organizationalProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 * index }}
                  className="bg-neutral-800 p-6 rounded-lg hover:bg-neutral-700 transition duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-brand-300">
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
    </>
  );
};

export default Projects;
