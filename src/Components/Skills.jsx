import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMysql, SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" size={40} />, level: 80 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" size={40} />, level: 75 },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" size={40} />, level: 85 },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" size={40} />, level: 90 },
    { name: "CSS3", icon: <SiCss3 className="text-blue-400" size={40} />, level: 85 },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={40} />, level: 70 },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" size={40} />, level: 75 },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" size={40} />, level: 80 },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" size={40} />, level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={40} />, level: 90 },
  ];

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center"
            >
              <div className="mb-3">{skill.icon}</div>
              <h3 className="font-semibold text-center mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-xs mt-1 text-gray-500">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;