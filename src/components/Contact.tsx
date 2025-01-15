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
        <div className="flex items-center">
          <span className="mr-2">Mumbai, India</span>
          <Flag code="IN" className="w-5 h-5" />
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
    <section
      id="contact"
      className="relative py-16 bg-neutral-900 text-neutral-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-cosmic">
            Contact Information
          </h2>

          <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex justify-between items-center mb-4 pb-4 border-b border-neutral-700 last:border-b-0"
              >
                <span className="text-neutral-400 flex items-center">
                  {detail.icon && (
                    <span className="mr-2 text-xl">{detail.icon}</span>
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
                    className="text-brand-300 hover:text-brand-200 transition duration-300 flex items-center"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="text-neutral-200">{detail.value}</span>
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
