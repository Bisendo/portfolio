import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/Bisendo" },
    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/bidaus-kimoto-606690263/" },
    { icon: <FiMail size={20} />, url: "mailto:kimotobidaus@gmail.com" },
    { icon: <FaWhatsapp size={20} />, url: "https://wa.me/255747617575" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 mb-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-center"
          >
            © {new Date().getFullYear()} Bidaus Kimoto Bisendo. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;