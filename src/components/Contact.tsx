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
        <p className="contact__subtitle mb-8 text-gray-700 text-center max-w-xl">Interested in collaborating or have a project in mind? Reach out below!</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full justify-center items-center">
          <a href="mailto:write4dheeraj@gmail.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center min-w-[180px]" aria-label="Email Dheeraj">Let’s Work Together</a>
          <a href="/src/assets/Resume - Dheeraj Jha.pdf" download className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold shadow hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-center min-w-[180px]" aria-label="Download Resume">Download Resume</a>
        </div>
        <div className="w-full bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-1 w-full">
            <h3 className="contact__card-title font-semibold mb-3 text-lg text-blue-700">Direct Contact</h3>
            {directContact.map((detail) => (
              <div key={detail.label} className="contact__detail flex items-center gap-2 mb-2 text-gray-800">
                <span className="contact__icon text-blue-600 text-xl">{detail.icon}</span>
                {detail.link ? (
                  <a
                    href={detail.link}
                    target={detail.label !== "Email" && detail.label !== "Phone" ? "_blank" : undefined}
                    rel={detail.label !== "Email" && detail.label !== "Phone" ? "noopener noreferrer" : undefined}
                    className="contact__link hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="contact__value">{detail.value}</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 w-full mt-6 md:mt-0">
            <h3 className="contact__card-title font-semibold mb-3 text-lg text-blue-700 text-center">Social Links</h3>
            <div className="flex gap-4 md:gap-6 justify-center">
              {socialLinks.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__icon text-2xl text-gray-600 hover:text-blue-600 transition-colors"
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
