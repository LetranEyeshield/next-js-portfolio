import { Github, Linkedin, Mail } from "lucide-react";

export default function PageNew() {
  const projects = [
    {
      title: "Clinic / Patient Management System",
      description:
        "Full-stack application for managing patients with search, update, and medicine tracking.",
      tech: ["Next.js 15", "MongoDB Atlas", "TypeScript", "Tailwind"],
    },
    {
      title: "AI Medical Symptom Checker",
      description:
        "AI-powered assistant that analyzes symptoms and gives possible recommendations.",
      tech: ["Next.js", "OpenAI API", "MongoDB"],
    },
    {
      title: "E-Commerce Website",
      description:
        "Modern e-commerce platform with Stripe integration and product management.",
      tech: ["Next.js", "Stripe", "MongoDB"],
    },
  ];

  return (
    <main className="bg-black text-white">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg aurora-text">
            Michael Rosalín
          </h1>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-indigo-400 transition text-sm">About</a>
            <a href="#projects" className="hover:text-indigo-400 transition text-sm">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition text-sm">Contact</a>

            {/* Social Icons */}
            <div className="flex gap-4 ml-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="hover:text-indigo-400 transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="hover:text-indigo-400 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="aurora-text">Michael</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mb-8">
          Full Stack Developer building scalable web applications using
          Next.js, TypeScript, MongoDB, and modern backend systems.
        </p>

        {/* Hero Social Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>

        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-500 transition"
        >
          View My Work
        </a>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 aurora-text">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          I'm a passionate full-stack developer focused on building real-world
          applications using modern technologies like Next.js 15, MongoDB Atlas,
          and TypeScript. I continuously improve my skills to become a strong
          software engineer.
        </p>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-6 bg-neutral-950">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold aurora-text">
            My Projects
          </h2>
          <p className="text-gray-400 mt-4">
            Real-world applications built with modern technologies
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 aurora-text">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mb-8">
          I'm currently open to junior developer opportunities and freelance projects.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-500 transition"
        >
          Contact Me
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        <div className="flex justify-center gap-6 mb-3">
          <a href="https://github.com/yourusername" target="_blank">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            <Linkedin size={18} />
          </a>
        </div>

        © {new Date().getFullYear()} Michael Rosalín. All rights reserved.
      </footer>

    </main>
  );
}
