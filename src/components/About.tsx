import React from 'react';
import { motion } from 'framer-motion';
import DefaultProfileIcon from '../assets/react.svg';

const About: React.FC = () => {
  const technologies = [
    { name: 'React', color: 'text-cyan-400' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'GraphQL', color: 'text-pink-500' },
    { name: 'Docker', color: 'text-blue-600' },
    { name: 'AWS', color: 'text-orange-500' }
  ];

  const companyProjects = [
    {
      name: 'Axxess Home Care',
      description: 'Cloud-based software for home care solutions used by over 1000 agencies',
      technologies: ['React.js', 'NextJS', 'Tailwind CSS', 'MaterialUI']
    },
    {
      name: 'Wolken\'s Desk',
      description: 'Enterprise service management platform',
      technologies: ['React', 'Redux', 'MaterialUI']
    }
  ];

  const personalProjects = [
    {
      name: 'Performance Analytics Dashboard',
      description: 'Real-time web performance monitoring application',
      technologies: ['React', 'TypeScript', 'D3.js', 'GraphQL']
    },
    {
      name: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced state management',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-16 bg-neutral-800 text-neutral-100 overflow-hidden"
    >
      {/* Background Geometric Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-accent-400/10 rounded-full blur-3xl animate-float"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
            {/* Profile Image with Neon Effect */}
            <div className="w-64 h-64 rounded-full relative">
              <div className="absolute -inset-4 bg-gradient-cosmic rounded-full blur-xl opacity-50 group-hover:opacity-70 transition duration-300"></div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-brand-300 shadow-neon">
                <img 
                  src={DefaultProfileIcon} 
                  alt="Dheeraj Jha" 
                  className="w-full h-full object-cover object-center p-4 bg-neutral-900 animate-float"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-cosmic">
                Digital Craftsman
              </h2>
              
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-6">
                Transforming complex challenges into elegant digital solutions. 
                With a blend of creative design and technical expertise, 
                I architect web experiences that are both visually stunning and functionally robust.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
                {technologies.map((tech) => (
                  <span 
                    key={tech.name}
                    className={`px-4 py-1 bg-neutral-700 ${tech.color} rounded-full text-sm`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="mailto:write4dheeraj@gmail.com"
                  className="text-neutral-300 hover:text-brand-300 transition duration-300"
                >
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/dheeraj-jha-65b2231b7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-brand-300 transition duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/theDheerajjha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-brand-300 transition duration-300"
                >
                  GitHub
                </a>
                <a 
                  href="https://x.com/write4dheeraj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-brand-300 transition duration-300"
                >
                  X
                </a>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-brand-300">
                Company Projects
              </h3>
              <div className="space-y-4">
                {companyProjects.map((project) => (
                  <div 
                    key={project.name}
                    className="bg-neutral-700 p-5 rounded-lg hover:bg-neutral-600 transition duration-300"
                  >
                    <h4 className="text-lg font-medium mb-2 text-brand-300">
                      {project.name}
                    </h4>
                    <p className="text-sm text-neutral-300 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-brand-300">
                Personal Projects
              </h3>
              <div className="space-y-4">
                {personalProjects.map((project) => (
                  <div 
                    key={project.name}
                    className="bg-neutral-700 p-5 rounded-lg hover:bg-neutral-600 transition duration-300"
                  >
                    <h4 className="text-lg font-medium mb-2 text-brand-300">
                      {project.name}
                    </h4>
                    <p className="text-sm text-neutral-300 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
