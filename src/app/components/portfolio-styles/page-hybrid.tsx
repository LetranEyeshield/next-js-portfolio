"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AuroraTextEffect } from "@/app/components/lightswind/aurora-text";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function PageHybrid() {
  return (
    <div className="relative bg-neutral-950 text-white scroll-smooth overflow-hidden">

      {/* ===== Background Glow ===== */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[180px] rounded-full"></div>

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full bg-neutral-950/70 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-semibold tracking-wide">Michael Rosalin</h1>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-40 relative z-10">

        {/* ================= HERO ================= */}
        <section className="text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            I build scalable &
            <div className="mt-4">
              <AuroraTextEffect
                text="production-grade web systems"
                colors={{
                  first: "bg-cyan-400",
                  second: "bg-purple-500",
                  third: "bg-pink-400",
                  fourth: "bg-indigo-400",
                }}
              />
            </div>
          </motion.h1>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
            Full-stack developer specializing in Next.js, TypeScript,
            and modern backend architectures. I turn complex ideas
            into secure, performant applications.
          </p>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 bg-indigo-600 rounded-full hover:bg-indigo-500 transition shadow-[0_0_40px_rgba(99,102,241,0.4)]"
            >
              View Projects
            </a>

            <a
              href="https://zingy-palmier-6c0268.netlify.app/"
              target="_blank"
              className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition"
            >
              Online Resume
            </a>
          </div>
        </section>

        {/* ================= METRICS ================= */}
        <section className="mt-28 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

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
              <p className="text-gray-400 text-sm mt-2">TypeScript Focused</p>
            </div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="mt-32 px-6 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            I'm a self-driven developer focused on building real-world systems —
            from AI-powered facial recognition platforms to healthcare management solutions.
            I care deeply about clean architecture, performance, and long-term scalability.
          </p>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="mt-32 px-6">
          <h2 className="text-3xl font-bold text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">

            {/* Project Card */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:border-indigo-400/40 hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] transition-all duration-500">
              <h3 className="text-xl font-semibold">
                Face Recognition Attendance System
              </h3>
              <p className="text-gray-400 mt-4">
                AI-powered attendance platform built with Next.js, Prisma,
                and PostgreSQL (Neon). Designed for real-world deployment.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:-translate-y-3 hover:border-indigo-400/40 hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] transition-all duration-500">
              <h3 className="text-xl font-semibold">
                RHU Patient Management System
              </h3>
              <p className="text-gray-400 mt-4">
                Full MERN stack application managing pharmacy
                and patient records for healthcare environments.
              </p>
            </div>

          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="mt-36 text-center px-6 pb-28">
          <h2 className="text-4xl font-bold">
            Let’s build something impactful.
          </h2>

          <p className="text-gray-400 mt-6">
            Open to junior developer roles, startup teams, and collaborative projects.
          </p>

          <div className="flex justify-center gap-8 mt-10 text-2xl text-gray-400">
            <Link href="https://github.com/LetranEyeshield" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </Link>

            <Link href="https://www.linkedin.com/" target="_blank" className="hover:text-white transition">
              <FaLinkedin />
            </Link>

            <Link href="mailto:rosalinmichaelcris@gmail.com" className="hover:text-white transition">
              <FaEnvelope />
            </Link>
          </div>
        </section>

        <footer className="border-t border-white/10 text-center py-6 text-gray-500 text-sm">
          © 2026 Michael Cris Rosalin — Built with Next.js & Tailwind CSS
        </footer>

      </main>
    </div>
  );
}
