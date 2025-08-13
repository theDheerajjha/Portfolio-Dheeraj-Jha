import webmdImg from "../assets/Pgebuilder-CMS-Webmd.jpg";
import axxessImg from "../assets/Axxess Home care.jpg";
import wolkenImg from "../assets/Wolken Servicedesk.jpg";

export const projects = [
  {
    title: "WebMD - PageBuilder",
    image: webmdImg,
    challenge: "Enable non-technical users to design and publish content easily within a CMS.",
    approach: "Built dynamic frontend components and enhanced deployment pipeline. Leveraged in-house AI tools (Asterix & Athena) to automate component creation, debugging, and test writing.",
    tools: ["React", "Vue 3", "TypeScript", "Vite", "Asterix AI", "Athena AI"],
    impact: "Boosted development speed by 40% and ensured cross-browser compatibility for seamless UX.",
    link: "https://www.webmd.com"
  },
  {
    title: "Axxess Home Care Platform",
    image: axxessImg,
    challenge: "Streamline operations for 1000+ US-based healthcare agencies.",
    approach: "Delivered core features like visit scheduling, care plans, and availability tracking. Built responsive, pixel-perfect UI components and improved data syncing via optimized API integration.",
    tools: ["React", "Next.js", "Tailwind CSS", "Material UI", "REST APIs"],
    impact: "Enhanced operational efficiency and user satisfaction across devices.",
    link: "https://www.linkedin.com/products/axxess-consult-axxess-home-care/?lipi=urn%3Ali%3Apage%3Acompanies_company_products%3B0b7d20d1-e26f-4b48-a039-c9cf295bd684"
  },
  {
    title: "Wolken's Desk - Service Management App",
    image: wolkenImg,
    challenge: "Improve ticket management, notifications, and workflow automation for a SaaS-based service desk.",
    approach: "Developed and enhanced features, implemented server-side pagination, and optimized performance for faster data rendering.",
    tools: ["React", "TypeScript", "Axios", "Material UI", "SCSS"],
    impact: "Reduced data load times and elevated overall UI/UX quality.",
    link: "https://www.wolkensoftware.com/products/customer-service"
  }
];
