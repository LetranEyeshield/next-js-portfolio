"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div
      className="w-full flex flex-col items-center bg-gradient-to-r from-gray-300 to-purple-300 pt-50 pb-25"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <h1 className="roboto-slab text-3xl sm:text-5xl text-center pb-2">
          Michael Cris R. Rosalin
        </h1>
        <p className="text-center font-bold">Programmer / Web Developer</p>
        <p className="text-center font-bold">
          Bachelor of Science in Information Technology
        </p>
        <p className="text-center font-bold">
          Colegio De San Juan De Letran-Manaoag
        </p>
        <Link
          href={"https://zingy-palmier-6c0268.netlify.app/"}
          target="_blank"
          rel="noopener noreferrer"
          className="block font-bold text-center text-xl hover:text-gray-500"
        >
          Online Resume
        </Link>
      </motion.div>
    </div>
  );
}
