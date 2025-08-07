import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Barcode from '../assets/images/barcode.png';
import Tanzanite from '../assets/images/tanzanite.png';
import Bida from '../assets/images/bida.png';
import EduPay from '../assets/images/smart_payment.png';

const Projects = () => {
  const projects = [
    {
      title: "Bidascanner web Application",
      description: "A web application for scanning and managing barcodes with features for product management and inventory tracking.",
      technologies: ["React.js", "Tailwind CSS"],
      githubLink: "https://github.com/Bisendo/Barcode",
      liveLink: "https://barcode-ecru.vercel.app/",
      image: Barcode 
    },
    {
      title: "Tanzanite web application",
      description: "A web application for managing Tanzanite mining operations with features for user management, mining sites, and production tracking.",
      technologies: ["React.js", "Tailwind CSS"],
      githubLink: "https://github.com/Bisendo/TanzaniteProject  ",
      liveLink: "https://tanzanite-project.vercel.app/",
      image: Tanzanite
    },
    {
      title: "Bida web Platform",
      description: "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["React.js", "Tailwind CSS"],
      githubLink: "https://github.com/Bisendo/Bida-appliction",
      liveLink: "https://bida-appliction.vercel.app/",
      image: Bida
    },
    {
      title: "Smart School Payment System",
      description: "A frontend for school payment management system developed during a hackathon using React.js and Tailwind CSS.",
      technologies: ["React.js", "Tailwind CSS"],
      githubLink: "https://github.com/Bisendo/smart_payment_management_system",
      liveLink: "https://shool-payment-school.vercel.app/",
      image: EduPay
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-12">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                {/* Replace with actual project image */}
                <span className="text-white text-2xl font-bold">{project.title}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-lg text-sm font-medium"
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;