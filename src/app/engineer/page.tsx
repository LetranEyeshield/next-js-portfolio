"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraTextEffect } from "@/app/components/lightswind/aurora-text";

export default function PageEngineer() {
  return (
    <div className="bg-neutral-950 text-white scroll-smooth">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-semibold text-lg">Michael Rosalin</h1>
          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-32">

        {/* ================= HERO ================= */}
        <section className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Full-Stack Engineer building
            <div className="mt-4">
              <AuroraTextEffect
                text="production-ready web systems"
                colors={{
                  first: "bg-cyan-400",
                  second: "bg-purple-500",
                  third: "bg-yellow-400",
                  fourth: "bg-green-400",
                }}
              />
            </div>
          </motion.h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I design and develop scalable, secure, and performance-driven
            applications using Next.js, TypeScript, and modern backend
            architectures.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a href="#projects" className="px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-500 transition">
              View Projects
            </a>
            <a href="#" className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition">
              Download Resume
            </a>
          </div>
        </section>

        {/* ================= METRICS ================= */}
        <section className="mt-24 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-gray-400 text-sm mt-2">Production Projects</p>
            </div>
            <div>
              <p className="text-3xl font-bold">5+</p>
              <p className="text-gray-400 text-sm mt-2">Full-Stack Systems</p>
            </div>
            <div>
              <p className="text-3xl font-bold">3</p>
              <p className="text-gray-400 text-sm mt-2">Healthcare Platforms</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-gray-400 text-sm mt-2">TypeScript Codebase</p>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="mt-32 px-6 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            I’m a self-taught full-stack developer focused on building
            real-world systems — from healthcare management platforms to
            AI-powered applications.
          </p>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="mt-24 px-6">
          <h2 className="text-3xl font-bold text-center">Technical Stack</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-12 text-gray-300">
            <div>
              <h3 className="font-semibold mb-4 text-white">Frontend</h3>
              <ul className="space-y-2">
                <li>Next.js 15</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Backend</h3>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB Atlas</li>
                <li>PostgreSQL (Neon)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Other</h3>
              <ul className="space-y-2">
                <li>Stripe</li>
                <li>Face API</li>
                <li>Cloudinary</li>
                <li>Spring Boot</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="mt-32 px-6">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition">
              <h3 className="text-xl font-semibold">Face Recognition Attendance System</h3>
              <p className="text-gray-400 mt-4">
                AI-powered attendance system with facial recognition and PostgreSQL database integration.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-indigo-400/40 transition">
              <h3 className="text-xl font-semibold">RHU Patient Management System</h3>
              <p className="text-gray-400 mt-4">
                Full MERN stack system for managing pharmacy and patient records.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="mt-32 text-center px-6">
          <h2 className="text-3xl font-bold">Open to Opportunities</h2>
          <p className="text-gray-400 mt-4">
            Currently seeking Junior Full-Stack Developer or Software Engineer roles.
          </p>

          <div className="flex justify-center gap-6 mt-8">
            <Link href="https://github.com/LetranEyeshield">GitHub</Link>
            <Link href="https://www.linkedin.com/">LinkedIn</Link>
            <Link href="mailto:rosalinmichaelcris@gmail.com">Email</Link>
          </div>
        </section>

        <footer className="mt-24 py-8 text-center text-gray-500 border-t border-white/10">
          © 2026 Michael Rosalin — Built with Next.js & Tailwind
        </footer>

      </main>
    </div>
  );
}
