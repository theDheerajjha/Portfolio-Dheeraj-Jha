import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const frameworkSkills = [
    {
      name: 'React',
      level: 'Expert',
      description: 'Advanced React development with hooks, context, and performance optimization',
      icon: '⚛️',
      color: 'text-cyan-400 bg-cyan-900/30'
    },
    {
      name: 'Vue',
      level: 'Advanced',
      description: 'Proficient in Vue 2 and Vue 3, with Composition API and Vuex',
      icon: '🟢',
      color: 'text-green-400 bg-green-900/30'
    },
    {
      name: 'Angular',
      level: 'Intermediate',
      description: 'Solid understanding of Angular framework, RxJS, and TypeScript',
      icon: '🅰️',
      color: 'text-red-400 bg-red-900/30'
    }
  ];

  const additionalSkills = [
    'TypeScript', 'State Management', 'GraphQL', 
    'REST APIs', 'Responsive Design', 'Performance Optimization'
  ];

  return (
    <section 
      id="skills" 
      className="relative py-16 bg-neutral-800 text-neutral-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-cosmic">
            Frontend Framework Expertise
          </h2>

          {/* Framework Skills */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {frameworkSkills.map((framework) => (
              <motion.div
                key={framework.name}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg transition duration-300 ${framework.color}`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{framework.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{framework.name}</h3>
                    <p className="text-sm text-neutral-300">{framework.level}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-200">
                  {framework.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6 text-brand-300">
              Complementary Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-neutral-700 text-brand-300 rounded-full text-sm funky-hover"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
