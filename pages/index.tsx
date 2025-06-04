// index.tsx
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
    <div className="relative w-full min-h-screen font-sans bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden">
      <Head>
        <title>Arul Michael | AI-Driven Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      {/* Projects */}
      <motion.section
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full px-4 sm:px-8 py-16 bg-[#f8fafc] dark:bg-[#1f2937]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-blue-800 dark:text-blue-300">Projects</h2>
          <div className="space-y-16">
            {[{
              title: 'AI Code Generator',
              desc: 'Web-based system that generates HTML/CSS/JS code from UI screenshots using YOLOv8 and custom LLMs. Integrated with Flask, OpenCV, Docker, and Gradio.',
              stack: ['Python', 'OpenCV', 'Hugging Face', 'Gradio', 'Docker'],
              link: '#',
            }, {
              title: 'BorBuddy (Social Media App)',
              desc: 'Real-time Android social media app with Firebase Auth, image upload, and Jetpack Compose UI built using Kotlin and MVVM.',
              stack: ['Kotlin', 'Firebase', 'Android Studio', 'Jetpack Compose'],
              link: 'https://github.com/arulmickel/BorBuddy',
            }, {
              title: 'Parking Finder App',
              desc: 'Android app that lets users search for nearby parking spots using Google Maps API with real-time tracking using Firebase.',
              stack: ['Kotlin', 'Google Maps API', 'Firebase'],
              link: '#',
            }, {
              title: 'Expense Tracker',
              desc: 'Full-stack CRUD app for managing expenses built with React, Node.js, MongoDB, and Material UI.',
              stack: ['React', 'Node.js', 'MongoDB'],
              link: '#',
            }].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-2">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.link}
                    className="mt-4 md:mt-0 inline-block text-accent dark:text-blue-400 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link.includes('github') ? 'GitHub →' : 'View Demo →'}
                  </a>
                </div>
              </motion.div>
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
