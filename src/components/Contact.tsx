import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import Flag from "react-world-flags";

const Contact = () => {
  const contactDetails = [
    {
      label: "Email",
      value: "write4dheeraj@gmail.com",
      link: "mailto:write4dheeraj@gmail.com",
      icon: <FaEnvelope />,
      category: "direct",
    },
    {
      label: "Phone",
      value: "+91 8210107686",
      link: "tel:+918210107686",
      icon: <FaPhoneAlt />,
      category: "direct",
    },
    {
      label: "Location",
      value: (
        <div className="contact__location">
          <span>Mumbai, India</span>
          <Flag code="IN" className="contact__flag" />
        </div>
      ),
      icon: <FaLocationArrow />,
      category: "direct",
    },
    {
      label: "LinkedIn",
      value: "Dheeraj Jha",
      link: "https://linkedin.com/in/dheeraj-jha-65b2231b7",
      icon: <FaLinkedin />,
      category: "social",
    },
    {
      label: "GitHub",
      value: "theDheerajjha",
      link: "https://github.com/theDheerajjha",
      icon: <FaGithub />,
      category: "social",
    },
    {
      label: "X (Twitter)",
      value: "write4dheeraj",
      link: "https://x.com/write4dheeraj/",
      icon: <FaTwitter />,
      category: "social",
    },
  ];

  const directContact = contactDetails.filter(detail => detail.category === "direct");
  const socialLinks = contactDetails.filter(detail => detail.category === "social");

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact__content"
        >
          <h2 className="contact__title">Let's Connect</h2>
          <p className="contact__subtitle">Feel free to reach out through any of these channels</p>

          <div className="contact__grid">
            <motion.div 
              className="contact__card contact__card--direct"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="contact__card-title">Direct Contact</h3>
              {directContact.map((detail) => (
                <div key={detail.label} className="contact__detail">
                  <span className="contact__label">
                    <span className="contact__icon">{detail.icon}</span>
                    {detail.label}
                  </span>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      target={detail.label !== "Email" && detail.label !== "Phone" ? "_blank" : undefined}
                      rel={detail.label !== "Email" && detail.label !== "Phone" ? "noopener noreferrer" : undefined}
                      className="contact__link"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="contact__value">{detail.value}</span>
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div 
              className="contact__card contact__card--social"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="contact__card-title">Social Links</h3>
              {socialLinks.map((detail) => (
                <div key={detail.label} className="contact__detail">
                  <span className="contact__label">
                    <span className="contact__icon">{detail.icon}</span>
                    {detail.label}
                  </span>
                  <a
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                  >
                    {detail.value}
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
