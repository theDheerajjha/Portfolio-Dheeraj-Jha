import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/dk-dp-cas.jpg";
import teaImage from "../assets/work.jpg"; // Replace with the actual tea image path

const About: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    profile: false,
    tea: false
  });

  const handleImageLoad = (imageType: 'profile' | 'tea') => {
    setImagesLoaded(prev => ({
      ...prev,
      [imageType]: true
    }));
  };

  return (
    <section
      id="about"
      className="relative py-16 bg-neutral-800 text-neutral-100 overflow-hidden"
    >
      {/* Background Shapes */}
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
          <div className="flex flex-col items-center space-y-8 mb-12">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="w-32 h-32 rounded-full relative"
            >
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-lg">
                <div className={`absolute inset-0 bg-neutral-700 animate-pulse ${imagesLoaded.profile ? 'hidden' : 'block'}`} />
                <img
                  src={profilePic}
                  alt="Dheeraj Jha"
                  loading="lazy"
                  onLoad={() => handleImageLoad('profile')}
                  className={`w-full h-full object-cover object-center bg-neutral-900 rounded-full opacity-70 transition-opacity duration-300 ${imagesLoaded.profile ? 'opacity-70' : 'opacity-0'}`}
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400">
                👨‍💻 Digital Craftsman 🛠️
              </h2>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-6">
                Turning ideas into stunning web applications. Whether it's
                debugging tricky code or mentoring the next generation, I'm
                driven by innovation and collaboration. 🚀
              </p>
              <p className="text-neutral-300 mb-6">
                As a Software Engineer at WebMD, I've had the opportunity to
                work on impactful web solutions that reach millions. The journey
                has been a constant evolution of learning, from my college days
                building simple web apps to solving complex problems in
                real-world applications. My passion lies in the intersection of
                technology and user experience, and I'm always looking for ways
                to improve and innovate in the digital space. 💻💡
              </p>
            </motion.div>
          </div>

          {/* Tea & Coding Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-neutral-700 rounded-lg p-8 shadow-lg mb-12 flex flex-col md:flex-row items-center gap-8 hover:shadow-xl hover:scale-[1.02] transition-transform"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-brand-300 flex items-center">
                🍵 Tea & Coding <span className="animate-bounce ml-2">✨</span>
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                A steaming cup of tea has been my constant companion through
                late-night coding marathons. From debugging tricky bugs to
                building seamless applications, tea has provided that little
                boost of inspiration and focus. It's become a ritual — a moment
                of clarity that fuels my creative process. 🌱💡
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                My coding journey began during my college years. I remember
                countless late-night sessions where a hot cup of chai kept me
                going through the grind of learning new languages and
                technologies. Those were the days when I built my first React
                app, and little did I know that it would spark a deep passion
                for web development. Fast forward to today, I'm using
                technologies like TypeScript, Vue.js, and GraphQL to build
                impactful applications that reach millions of users. 🚀
              </p>
              <p className="text-neutral-300 leading-relaxed mt-4">
                Over the years, I've realized that every line of code tells a
                story, every bug teaches a lesson, and every project is an
                opportunity to innovate. And the best part? It's just the
                beginning. 🌟
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 overflow-hidden rounded-lg shadow-md w-full md:w-64 transition-transform mb-8 md:mb-0 relative"
            >
              <div className={`absolute inset-0 bg-neutral-700 animate-pulse ${imagesLoaded.tea ? 'hidden' : 'block'}`} />
              <img
                src={teaImage}
                alt="Tea and Coding"
                loading="lazy"
                onLoad={() => handleImageLoad('tea')}
                className={`w-full h-full object-cover transition-opacity duration-300 ${imagesLoaded.tea ? 'opacity-70' : 'opacity-0'}`}
              />
            </motion.div>
          </motion.div>

          {/* Fun Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-accent-300 flex justify-center items-center">
              🎉 Coding is Fun <span className="animate-bounce ml-2">🔥</span>
            </h3>
            <p className="text-neutral-300 mt-4 text-lg">
              With a passion for learning and teaching, I aim to innovate,
              inspire, and build solutions that make a difference. 🌟
            </p>
            <p className="text-neutral-300 mt-4 text-lg">
              As a mentor, I enjoy guiding the next generation of developers,
              sharing my knowledge, and fostering a culture of continuous
              learning. The journey of building something impactful is always
              more fun when shared with others. 🎓👨‍💻
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
