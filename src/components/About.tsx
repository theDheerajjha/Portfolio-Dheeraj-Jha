import React, { useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/dk-dp-cas.jpg";
import teaImage from "../assets/work.jpg";

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
      <div className="about__background"></div>
      <div className="about__background about__background--secondary"></div>
      <div className="about__container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about__profile">
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about__content"
            >
              <h2 className="about__title">
                🚀 Frontend Specialist & Digital Craftsman
              </h2>
              <p className="about__text">
                Hi, I’m Dheeraj Jha—a frontend engineer passionate about building web experiences that are fast, accessible, and delightful. With 4+ years of experience in React, Vue.js, and TypeScript, I thrive on solving complex UI challenges and making products shine for users and teams alike.
              </p>
              <p className="about__text">
                I love architecting scalable design systems, optimizing build pipelines, and mentoring fellow developers. At WebMD, I accelerated feature delivery by 30% using in-house AI tooling, and at Cavista, I improved operational efficiency for 1000+ healthcare agencies with reusable, accessible UI components. My work has reduced build times by 25% and enabled rapid rollout of new features across large teams.
              </p>
              <p className="about__text">
                Whether it’s introducing modern frameworks, automating workflows, or leading code quality initiatives, I’m driven by a desire to create impact and empower others. Let’s build something remarkable together.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="about__tea-section"
          >
            <div className="about__tea-content">
              <h3 className="about__tea-title">Principles</h3>
              <ul className="about__principles">
                <li>Design systems first: consistency, speed, and accessibility.</li>
                <li>Measure everything: performance budgets and error budgets.</li>
                <li>Ship in slices: incremental value, fast feedback loops.</li>
                <li>Mentor and document: raise the team’s bar, not just the code.</li>
              </ul>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="about__tea-image-container"
            >
              <div className={`about__image-placeholder ${imagesLoaded.tea ? 'hidden' : 'block'}`} />
              <img
                src={teaImage}
                alt="Working at a desk"
                loading="lazy"
                onLoad={() => handleImageLoad('tea')}
                className={`about__tea-image ${imagesLoaded.tea ? 'opacity-85' : 'opacity-0'}`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
