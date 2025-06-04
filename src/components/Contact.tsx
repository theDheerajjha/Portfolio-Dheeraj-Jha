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
    },
    {
      label: "Phone",
      value: "+91 8210107686",
      link: "tel:+918210107686",
      icon: <FaPhoneAlt />,
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
    },
    {
      label: "LinkedIn",
      value: "Dheeraj Jha",
      link: "https://linkedin.com/in/dheeraj-jha-65b2231b7",
      icon: <FaLinkedin />,
    },
    {
      label: "GitHub",
      value: "theDheerajjha",
      link: "https://github.com/theDheerajjha",
      icon: <FaGithub />,
    },
    {
      label: "X (Twitter)",
      value: "write4dheeraj",
      link: "https://x.com/write4dheeraj/",
      icon: <FaTwitter />,
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact__title">Contact Information</h2>

          <div className="contact__card">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="contact__detail">
                <span className="contact__label">
                  {detail.icon && (
                    <span className="contact__icon">{detail.icon}</span>
                  )}
                  {detail.label}
                </span>
                {detail.link ? (
                  <a
                    href={detail.link}
                    target={
                      detail.label !== "Email" && detail.label !== "Phone"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      detail.label !== "Email" && detail.label !== "Phone"
                        ? "noopener noreferrer"
                        : undefined
                    }
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
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
