"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className="socials-div w-full bg-gray-500 pb-4" id="socials">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false }}
      >
        <h3 className="roboto-slab text-white text-center text-xl md:text-3xl mt-10">
          Let's Build Together!
        </h3>
        <p className="text-center text-white">Coffee is life</p>

        <ul className="flex justify-center align-center mt-14">
          <li className="mx-4">
            <Link
              href="https://github.com/LetranEyeshield"
              target="_blank"
              rel="noreferrer"
              className="text-center text-white mx-4 hover:text-blue-300"
            >
              <span className="flex">
                <FaGithub />
                <span className="span-socials">Github</span>
              </span>
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="https://web.facebook.com/michael.cris.rosalin"
              target="_blank"
              rel="noreferrer"
              className="text-center text-white mx-4 hover:text-blue-300"
            >
              <span className="flex">
                <FaFacebook />
                <span className="span-socials">Facebook</span>
              </span>
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rosalinmichaelcris@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-center text-white mx-4 hover:text-blue-300"
            >
              <span className="flex">
                <FaEnvelope />
                <span className="span-socials">Gmail</span>
              </span>
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="https://www.linkedin.com/in/michael-cris-rosalin-038492144/"
              target="_blank"
              rel="noreferrer"
              className="text-center text-white mx-4 hover:text-blue-300"
            >
              <span className="flex">
                <FaLinkedin />
                <span className="span-socials">Linkedin</span>
              </span>
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
