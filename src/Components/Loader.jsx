import { motion } from 'framer-motion';

const Loader = () => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const loadingCircleVariants = {
    start: {
      y: '0%',
    },
    end: {
      y: '100%',
    },
  };

  const loadingCircleTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: 'easeInOut',
  };

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <motion.div
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
        className="flex gap-2"
      >
        <motion.span
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          className="w-4 h-4 bg-blue-600 rounded-full"
        />
        <motion.span
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          className="w-4 h-4 bg-blue-600 rounded-full"
        />
        <motion.span
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          className="w-4 h-4 bg-blue-600 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Loader;