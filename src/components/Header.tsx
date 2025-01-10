import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const Header: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const introText = "Hi, I'm Dheeraj! 👋";
  const subtitleTexts = [
    "Crafting Digital Experiences 🚀",
    "Turning Code into Magic ✨",
    "Web Wizard at Your Service 🧙‍♂️"
  ];
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    let currentText = '';
    let index = 0;

    const typeWriter = setInterval(() => {
      if (index < introText.length) {
        currentText += introText.charAt(index);
        setDisplayText(currentText);
        index++;
      } else {
        clearInterval(typeWriter);
        
        // Cycle through subtitles
        const subtitleCycle = setInterval(() => {
          setSubtitleIndex((prev) => (prev + 1) % subtitleTexts.length);
        }, 3000);

        return () => clearInterval(subtitleCycle);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, []);

  const technologies = [
    'React', 'TypeScript', 'Vue', 
    'NextJS', 'MaterialUI', 'Tailwind CSS'
  ];

  return (
    <div 
      id="home" 
      className="relative min-h-screen flex flex-col bg-neutral-900 overflow-hidden"
    >
      <Navbar />
      
      {/* Background Geometric Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent-400/10 rounded-full blur-3xl animate-float"></div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="container mx-auto px-4 flex-grow flex items-center justify-center text-center relative z-10"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-cosmic">
            {displayText}
            <span className="animate-blink">|</span>
          </h1>
          
          <motion.p 
            key={subtitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto"
          >
            {subtitleTexts[subtitleIndex]}
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {technologies.map((tech) => (
              <motion.span 
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-neutral-700 text-brand-300 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 mt-8">
            <motion.a 
              href="#about"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 bg-brand-300 text-white rounded-lg hover:bg-brand-400 transition duration-300 shadow-cosmic"
            >
              Explore My Journey
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-3 border-2 border-neutral-300 text-neutral-300 rounded-lg hover:bg-neutral-700 transition duration-300"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mt-6">
            {[
              { 
                name: 'LinkedIn', 
                url: 'https://linkedin.com/in/dheeraj-jha-65b2231b7',
                icon: 'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z'
              },
              { 
                name: 'GitHub', 
                url: 'https://github.com/theDheerajjha',
                icon: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
              },
              { 
                name: 'X', 
                url: 'https://x.com/write4dheeraj/',
                icon: 'M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.788-28.1,179.798-3.476,18.617-10.372,24.816-17.051,25.455-14.524,1.338-25.613-9.596-39.775-18.801-22.056-14.464-34.584-23.456-56.087-37.623-24.806-16.342-8.711-25.336,5.415-40.044,3.711-3.869,68.176-62.524,69.399-67.924.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.525q-3.425.766-109.331,72.816-15.517,10.646-28.016,10.327c-9.255-.238-27.062-5.227-40.391-9.519-16.254-5.319-29.199-8.146-28.077-17.22q.911-7.336,18.045-14.923,108.446-47.248,144.628-62.99c68.833-28.645,83.254-33.79,92.509-33.937C361.362,166.578,364.172,170.491,362.952,176.66Z'
              }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-neutral-300 hover:text-brand-300 transition duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 496 512" 
                  className="w-6 h-6 fill-current"
                >
                  <path d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
