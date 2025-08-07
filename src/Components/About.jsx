import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: "Diploma in Computer Science",
      institution: "University of Dar es Salaam",
      period: "04/2024 - Present"
    },
    {
      degree: "Certificate in Computer Science",
      institution: "University of Dar es Salaam",
      period: "11/2022 - 11/2023"
    },
    {
      degree: "Secondary Education",
      institution: "Abuuy Jumaa Secondary School",
      period: "2018 - 2021"
    },
    {
      degree: "Primary Education",
      institution: "Kipunguni Primary School",
      period: "2011 - 2017"
    }
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Swahili", level: "Native" }
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm mb-12">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l-2 border-blue-500"
                >
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0" />
                  <h4 className="font-medium text-lg">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="mb-8">
              {languages.map((lang, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-4"
                >
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{lang.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: lang.level === 'Native' ? '100%' : '80%' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Objective</h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-700 dark:text-gray-300 mb-6"
            >
              Aspiring software developer with strong knowledge in React.js and Node.js for web development. 
              Seeking an entry-level position to contribute to impactful projects while continuing to learn 
              and grow professionally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="font-medium">Email:</span> 
                  <a href="mailto:kimotobidaus@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                    kimotobidaus@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">Phone:</span> 
                  <a href="tel:+255621690364" className="text-blue-600 dark:text-blue-400 hover:underline">
                    +255 621 690 364
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="font-medium">WhatsApp:</span> 
                  <a href="https://wa.me/255747617575" className="text-blue-600 dark:text-blue-400 hover:underline">
                    +255 747 617 575
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;