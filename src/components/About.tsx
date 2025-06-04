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
    <section id="about" className="about">
      {/* Background Shapes */}
      <div className="about__background"></div>
      <div className="about__background about__background--secondary"></div>

      <div className="about__container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Section */}
          <div className="about__profile">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="about__image-container"
            >
              <div className="about__image-wrapper">
                <div className={`about__image-placeholder ${imagesLoaded.profile ? 'hidden' : 'block'}`} />
                <img
                  src={profilePic}
                  alt="Dheeraj Jha"
                  loading="lazy"
                  onLoad={() => handleImageLoad('profile')}
                  className={`about__image ${imagesLoaded.profile ? 'opacity-70' : 'opacity-0'}`}
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about__content"
            >
              <h2 className="about__title">
                👨‍💻 Digital Craftsman 🛠️
              </h2>
              <p className="about__text">
                Turning ideas into stunning web applications. Whether it's
                debugging tricky code or mentoring the next generation, I'm
                driven by innovation and collaboration. 🚀
              </p>
              <p className="about__text">
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
            className="about__tea-section"
          >
            <div className="about__tea-content">
              <h3 className="about__tea-title">
                🍵 Tea & Coding <span className="animate-bounce ml-2">✨</span>
              </h3>
              <p className="about__tea-text">
                A steaming cup of tea has been my constant companion through
                late-night coding marathons. From debugging tricky bugs to
                building seamless applications, tea has provided that little
                boost of inspiration and focus. It's become a ritual — a moment
                of clarity that fuels my creative process. 🌱💡
              </p>
              <p className="about__tea-text">
                My coding journey began during my college years. I remember
                countless late-night sessions where a hot cup of chai kept me
                going through the grind of learning new languages and
                technologies. Those were the days when I built my first React
                app, and little did I know that it would spark a deep passion
                for web development. Fast forward to today, I'm using
                technologies like TypeScript, Vue.js, and GraphQL to build
                impactful applications that reach millions of users. 🚀
              </p>
              <p className="about__tea-text">
                Over the years, I've realized that every line of code tells a
                story, every bug teaches a lesson, and every project is an
                opportunity to innovate. And the best part? It's just the
                beginning. 🌟
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="about__tea-image-container"
            >
              <div className={`about__image-placeholder ${imagesLoaded.tea ? 'hidden' : 'block'}`} />
              <img
                src={teaImage}
                alt="Tea and Coding"
                loading="lazy"
                onLoad={() => handleImageLoad('tea')}
                className={`about__tea-image ${imagesLoaded.tea ? 'opacity-70' : 'opacity-0'}`}
              />
            </motion.div>
          </motion.div>

          {/* Fun Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="about__fun-section"
          >
            <h3 className="about__fun-title">
              🎉 Coding is Fun <span className="animate-bounce ml-2">🔥</span>
            </h3>
            <p className="about__fun-text">
              With a passion for learning and teaching, I aim to innovate,
              inspire, and build solutions that make a difference. 🌟
            </p>
            <p className="about__fun-text">
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
