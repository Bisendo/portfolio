import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import passportPhoto from '../assets/images/bacground.jpg';
import resumePDF from '../assets/images/bidaus_bisendo_resume.pdf';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to handle resume viewing
  const handleViewResume = () => {
    window.open(resumePDF, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="md:w-1/2"
          >
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Bidaus Bisendo</span>
            </motion.h1>
            <motion.h2 
              variants={textVariants}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300"
            >
              Aspiring Full Stack Developer
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="text-lg mb-8 text-gray-700 dark:text-gray-300"
            >
              Passionate about building web applications with React.js and Node.js. 
              Currently pursuing my Diploma in Computer Science at the University of Dar es Salaam.
            </motion.p>
            <motion.div variants={textVariants} className="flex gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.button
                onClick={handleViewResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                <FiDownload /> View Resume
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
              <img 
                src={passportPhoto} 
                alt="Bidaus Bisendo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23629cff'/%3E%3Ctext x='50%' y='50%' font-size='50' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBB%3C/text%3E%3C/svg%3E";
                }}
              />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-transparent border-t-blue-300 border-r-blue-300 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;