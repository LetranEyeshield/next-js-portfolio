// "use client";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
// import Contact from "./Contact";

// export default function Socials() {
//   return (
//     <div className="socials-div w-full bg-gray-500 pb-4" id="socials">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         viewport={{ once: false }}
//       >
//         <h3 className="roboto-slab text-white text-center text-xl md:text-3xl mt-10">
//           Let&apos;s Build Together!
//         </h3>
//         <p className="text-center text-white">Coffee is life</p>

//         <Contact />

//         <ul className="flex justify-center align-center mt-14">
//           <li className="mx-4">
//             <Link
//               href="https://github.com/LetranEyeshield"
//               target="_blank"
//               rel="noreferrer"
//               className="text-center text-white mx-4 hover:text-blue-300"
//             >
//               <span className="flex">
//                 <FaGithub />
//                 <span className="span-socials">Github</span>
//               </span>
//             </Link>
//           </li>
//           <li className="mx-4">
//             <Link
//               href="https://web.facebook.com/michael.cris.rosalin"
//               target="_blank"
//               rel="noreferrer"
//               className="text-center text-white mx-4 hover:text-blue-300"
//             >
//               <span className="flex">
//                 <FaFacebook />
//                 <span className="span-socials">Facebook</span>
//               </span>
//             </Link>
//           </li>
//           <li className="mx-4">
//             <Link
//               href="https://mail.google.com/mail/?view=cm&fs=1&to=rosalinmichaelcris@gmail.com"
//               target="_blank"
//               rel="noreferrer"
//               className="text-center text-white mx-4 hover:text-blue-300"
//             >
//               <span className="flex">
//                 <FaEnvelope />
//                 <span className="span-socials">Gmail</span>
//               </span>
//             </Link>
//           </li>
//           <li className="mx-4">
//             <Link
//               href="https://www.linkedin.com/in/michael-cris-rosalin-038492144/"
//               target="_blank"
//               rel="noreferrer"
//               className="text-center text-white mx-4 hover:text-blue-300"
//             >
//               <span className="flex">
//                 <FaLinkedin />
//                 <span className="span-socials">Linkedin</span>
//               </span>
//             </Link>
//           </li>
//         </ul>
//       </motion.div>
//     </div>
//   );
// }



"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Socials() {
  return (
    <section
      id="socials"
      className="py-24 px-6 bg-gray-900 text-white text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-4"
      >
        Let’s Build Something Together
      </motion.h2>

      <p className="text-gray-400 mb-10">
        Open to collaboration and opportunities.
      </p>

      <div className="flex justify-center gap-8 text-2xl">
        <Link href="https://github.com/LetranEyeshield" target="_blank" className="hover:text-blue-400 transition">
          <FaGithub />
        </Link>
        <Link href="mailto:rosalinmichaelcris@gmail.com" className="hover:text-blue-400 transition">
          <FaEnvelope />
        </Link>
        <Link href="https://www.linkedin.com/in/michael-cris-rosalin-038492144/" target="_blank" className="hover:text-blue-400 transition">
          <FaLinkedin />
        </Link>
      </div>
    </section>
  );
}
