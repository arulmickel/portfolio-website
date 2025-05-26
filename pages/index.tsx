import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen bg-white text-primary dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Head>
        <title>Arul Michael | AI-Driven Developer</title>
      </Head>

      {/* Navbar */}
      <nav className="w-full py-6 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Arul Michael</h1>
        <div className="flex items-center gap-4">
          <a href="mailto:arul@example.com" className="text-accent hover:text-blue-700 transition duration-300">
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 text-sm bg-accent text-white rounded hover:bg-blue-700 transition"
          >
            {darkMode ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Hey, I'm Arul 👋</h2>
          <p className="text-lg mb-6">AI-Driven Web & Mobile Developer</p>
          <a
            href="mailto:arul@example.com"
            className="inline-block bg-accent text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
        </div>
      </motion.section>

      {/* About Me */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full px-8 py-16 bg-white dark:bg-gray-800 shadow-inner rounded"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I’m a Full Stack Developer with experience in Android, AI-based web systems, and backend development.
            I enjoy integrating machine learning and computer vision with modern frontend frameworks.
            Currently pursuing my Master's in Computer Science at DePaul University (Expected Dec 2025),
            I’m passionate about building scalable software across platforms with clean UI and robust APIs.
          </p>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full px-8 py-16 bg-blue-50 dark:bg-gray-700"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-300 mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[{
              title: 'BorBuddy',
              desc: 'Android social media app with Firebase Auth, real-time feed, image uploads, and AI-based post recommendations.',
              link: 'https://github.com/arulmickel/BorBuddy',
              label: 'View on GitHub →'
            }, {
              title: 'AI Code Generator',
              desc: 'Web app that turns UI screenshots into working HTML/CSS/JS using OpenCV, YOLOv8, and custom LLMs with Flask and Gradio.',
              link: '#',
              label: 'View Demo →'
            }, {
              title: 'Parking Finder App',
              desc: 'Android app using Google Maps API to find nearby parking. Includes real-time tracking with Firebase and background location updates.',
              link: '#',
              label: 'Coming Soon →'
            }, {
              title: 'Expense Tracker',
              desc: 'CRUD web app to track finances using React, Node.js, MongoDB, and Material UI.',
              link: '#',
              label: 'Coming Soon →'
            }].map(({ title, desc, link, label }) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
                key={title}
              >
                <h3 className="text-xl font-bold text-blue-600">{title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
                <a href={link} className="text-accent hover:text-blue-700 transition duration-300 inline-block mt-4">{label}</a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full px-8 py-16 bg-white dark:bg-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[ 'Kotlin', 'React.js', 'Next.js', 'Firebase', 'MongoDB', 'Tailwind CSS', 'Java', 'C++', 'Python', 'Django', 'Flask', 'Node.js', 'OpenCV', 'YOLOv8', 'Hugging Face', 'AWS', 'Docker', 'CI/CD' ].map((tech) => (
              <span key={tech} className="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-white px-4 py-2 rounded-lg font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="w-full bg-blue-800 text-white text-sm text-center py-4 mt-8">
        © 2025 Arul Michael. Built with Next.js, Tailwind CSS & Framer Motion.
      </footer>
    </div>
  );
}
