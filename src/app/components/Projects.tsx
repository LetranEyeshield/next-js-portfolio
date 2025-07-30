"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col w-full bg-gray-200" id="projects">
      <motion.h2
        className="roboto-slab text-center text-2xl sm:text-4xl mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        PROJECTS
      </motion.h2>
      {/* project 1st section */}
      {/* <motion.div
        className="projects-wrapper flex justify-center mt-12 mb-8 w-full"
        initial={{ opacity: 0, x: -100 }} // starting state
        animate={{ opacity: 1, x: 0 }} // end state
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      > */}
      <motion.div
        className="projects-wrapper flex justify-center mt-12 mb-8 w-full"
        // initial={{ opacity: 0, x: 50, y: 50 }}
        // whileInView={{ opacity: 1, x: 0, y: 0 }}
        initial={{ opacity: 0, x: -50, y: 50 }} // 👈 starts bottom-left
        whileInView={{ opacity: 1, x: 0, y: 0 }} // 👈 ends at original position
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="project-contents w-1/3">
          <Link
            href="https://rhu-online-booking-checkup.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/rhu-booking.jpg"
              alt="RHU Booking Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              RHU Online Booking Check-up (Next.js, Typescript, MongoDB,
              Tailwind CSS)
            </p>
          </Link>
        </div>
        <div className="project-contents w-1/3">
          <Link
            href="https://rms-mug-printing.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/rms.jpg"
              alt="RMS Mug Printing Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              RM&apos;s Mug Printing(Next.js, Tailwind CSS, Typescript)
            </p>
          </Link>
        </div>
        <div className="project-contents w-1/3">
          <Link
            href="https://rhu-pharma-ncd-list-mern.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/mern.jpg"
              alt="RHU Pharma NCD List Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              RHU Pharmacy Patient List (MERN Stack, Axios, Typescript &
              Tailwind)
            </p>
          </Link>
        </div>
      </motion.div>
      {/* project 2nd section */}
      {/* <motion.div
        className="projects-wrapper flex justify-center mb-8 w-full"
        initial={{ opacity: 0, x: 100 }} // starting state
        animate={{ opacity: 1, x: 0 }} // end state
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      > */}
      <motion.div
        className="projects-wrapper flex justify-center mb-8 w-full"
        initial={{ opacity: 0, x: 50, y: 50 }} // 👈 Starts bottom-right
        whileInView={{ opacity: 1, x: -50, y: 0 }} // 👈 Moves to left-center
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="project-contents w-1/3">
          <Link
            href="https://github.com/LetranEyeshield/hosp-mgmt-system-thesis"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/hms.jpg"
              alt="HMS Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              Hospital Management Simple System (Java MySQL)
            </p>
          </Link>
        </div>
        <div className="project-contents w-1/3">
          <Link
            href="https://github.com/LetranEyeshield/itr_system"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/itr.jpg"
              alt="ITR System Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              Individual Treatment Record (HTML & CSS, PHP, MySQL)
            </p>
          </Link>
        </div>
        <div className="project-contents w-1/3">
          <Link
            href="https://sample-debut-website.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/rencriselle.jpg"
              alt="Sample 18th Debut Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              Sample Debut Website (Next.js, Typescript, Tailwind CSS)
            </p>
          </Link>
        </div>
      </motion.div>
      {/* project 3rd section */}
      {/* <motion.div
        className="projects-wrapper flex justify-center mb-8 w-full"
        initial={{ opacity: 0, x: -100 }} // starting state
        animate={{ opacity: 1, x: 0 }} // end state
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      > */}
      {/* <motion.div
        className="projects-wrapper flex justify-center mb-8 w-full"
        initial={{ opacity: 0, scale: 0.5 }} // 👈 Small and transparent
        whileInView={{ opacity: 1, scale: 1 }} // 👈 Full size and visible
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      > */}
      <motion.div
        className="projects-wrapper flex justify-center mb-8 w-full"
        initial={{ opacity: 0, scale: 0.3 }}
        whileInView={{ opacity: 1, scale: [0.3, 1.1, 1] }} // 👈 Slight overshoot
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="project-contents w-1/3">
          <Link
            href="https://github.com/LetranEyeshield/CRDS"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/crds.jpg"
              alt="CRDS Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              Local Civil Registrar Database System (Java, MySQL)
            </p>
          </Link>
        </div>
        <div className="project-contents w-1/3">
          <Link
            href="https://my-wedding-website-six.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/rolan-kate.jpg"
              alt="Sample Wedding Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              Sample Wedding Website (Next.js, Tailwind CSS, Typescript)
            </p>
          </Link>
        </div>
        <div className="project-contents w-1/3">
          <Link
            href="https://github.com/LetranEyeshield/the_dc_system"
            target="_blank"
            rel="noreferrer"
            className="text-center"
          >
            <Image
              src="/images/dc.jpg"
              alt="Sample Image"
              width={400}
              height={400}
              className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
            />
            <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
              The DC System (Created in Java and MySQL - Beta Version)
            </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
