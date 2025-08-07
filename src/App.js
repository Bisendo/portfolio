import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navibar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contacts';
import Loader from './Components/Loader';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100 bg-gray-50 text-gray-900 min-h-screen transition-colors duration-300">
        <AnimatePresence>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;