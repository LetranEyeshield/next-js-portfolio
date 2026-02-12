"use client";

import { motion } from "framer-motion";
import { AuroraTextEffect } from "@/app/components/lightswind/aurora-text";

export default function PageSaas() {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/30 blur-[200px] rounded-full"></div>

      {/* HEADER */}
      <header className="fixed top-0 w-full bg-black/60 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-semibold text-lg">Michael Rosalin</h1>
          <nav className="hidden md:flex gap-8 text-gray-300 text-sm">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#stack" className="hover:text-white">Stack</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-40 relative z-10">

        {/* HERO */}
        <section className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Building intelligent
            <div className="mt-4">
              <AuroraTextEffect
                text="modern web platforms"
                colors={{
                  first: "bg-cyan-400",
                  second: "bg-purple-500",
                  third: "bg-pink-400",
                  fourth: "bg-indigo-400",
                }}
              />
            </div>
          </motion.h1>

          <p className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto">
            Full-stack engineer crafting AI-powered and production-grade
            systems using modern technologies.
          </p>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <button className="px-8 py-4 bg-indigo-600 rounded-full hover:bg-indigo-500 transition shadow-[0_0_40px_rgba(99,102,241,0.4)]">
              Explore My Work
            </button>
            <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition">
              View Resume
            </button>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section id="projects" className="mt-40 px-6">
          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:-translate-y-3 hover:shadow-[0_0_80px_rgba(99,102,241,0.3)] transition-all duration-500">
              <h3 className="text-xl font-semibold">Scalable Web Systems</h3>
              <p className="text-gray-400 mt-4">
                Secure dashboards, authentication, CRUD systems, and database-driven apps.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:-translate-y-3 hover:shadow-[0_0_80px_rgba(99,102,241,0.3)] transition-all duration-500">
              <h3 className="text-xl font-semibold">AI & Automation</h3>
              <p className="text-gray-400 mt-4">
                Face recognition systems and AI integrations.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 hover:-translate-y-3 hover:shadow-[0_0_80px_rgba(99,102,241,0.3)] transition-all duration-500">
              <h3 className="text-xl font-semibold">Healthcare Platforms</h3>
              <p className="text-gray-400 mt-4">
                Real-world RHU systems built for operational use.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="mt-40 text-center px-6 pb-32">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s build the next generation of web platforms.
          </h2>

          <p className="text-gray-400 mt-6">
            Available for full-time roles and collaborations.
          </p>

          <button className="mt-10 px-10 py-5 bg-indigo-600 rounded-full text-lg hover:bg-indigo-500 transition shadow-[0_0_60px_rgba(99,102,241,0.4)]">
            Get In Touch
          </button>
        </section>

      </main>
    </div>
  );
}
