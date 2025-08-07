import { motion } from 'framer-motion';
import { FiSun, FiMoon, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Bidaus Bisendo
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            <motion.a 
              href="https://github.com/Bisendo" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2"
            >
              <FiGithub size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;