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
    <section id="contact" className="contact py-12 px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <h2 className="contact__title text-3xl font-bold mb-2 text-center">Let’s Work Together</h2>
        <p className="contact__subtitle mb-8 text-center max-w-xl">Interested in collaborating or have a project in mind? Reach out below!</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center items-center">
          <a href="mailto:write4dheeraj@gmail.com" className="btn min-w-[180px] text-center" aria-label="Email Dheeraj">Let’s Work Together</a>
          <a href="/src/assets/Resume - Dheeraj Jha.pdf" download className="btn-secondary min-w-[180px] text-center" aria-label="Download Resume">Download Resume</a>
        </div>
        <div className="contact__grid w-full">
          <div className="contact__card contact__card--direct">
            <h3 className="contact__card-title">Direct Contact</h3>
            {directContact.map((detail) => (
              <div key={detail.label} className="contact__detail">
                <span className="contact__icon">{detail.icon}</span>
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
          </div>
          <div className="contact__card contact__card--social">
            <h3 className="contact__card-title">Social Links</h3>
            <div className="flex gap-4 md:gap-6 justify-center">
              {socialLinks.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__icon text-2xl transition-colors"
                  aria-label={detail.label}
                >
                  {detail.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
