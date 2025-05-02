import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Head>
        <title>Arul Michael | AI-Driven Developer</title>
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-blue-100 to-white">
        <h1 className="text-4xl font-bold">Hey, I'm Arul 👋</h1>
        <p className="mt-4 text-lg">AI-Driven Web & Mobile Developer</p>
        <a
          href="mailto:arul@example.com"
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Contact Me
        </a>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I'm currently mastering Data Structures & Algorithms and building full-stack projects like BorBuddy — a social media app for Android. I aim to become a software developer who can work across web & mobile platforms with AI integrations.
        </p>
      </section>

      {/* Projects */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">BorBuddy</h3>
              <p className="mt-2 text-sm text-gray-600">
                Android social media app with Firebase auth, real-time feed, and AI-driven post suggestions.
              </p>
              <a href="https://github.com/arulmickel/BorBuddy" className="text-blue-600 mt-2 inline-block">
                View on GitHub
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">CRUD Expense Tracker</h3>
              <p className="mt-2 text-sm text-gray-600">
                Web app to manage personal finances. Built with React, Express, and MongoDB.
              </p>
              <a href="#" className="text-blue-600 mt-2 inline-block">
                Coming Soon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          <span className="bg-blue-100 px-4 py-2 rounded">Kotlin</span>
          <span className="bg-blue-100 px-4 py-2 rounded">React.js</span>
          <span className="bg-blue-100 px-4 py-2 rounded">Firebase</span>
          <span className="bg-blue-100 px-4 py-2 rounded">MongoDB</span>
          <span className="bg-blue-100 px-4 py-2 rounded">Next.js</span>
          <span className="bg-blue-100 px-4 py-2 rounded">Tailwind CSS</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t text-sm text-gray-500">
        © 2025 Arul Michael. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
