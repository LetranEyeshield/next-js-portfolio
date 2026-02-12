// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// export default function Projects() {
//   return (
//     <div className="flex flex-col w-full bg-gray-200" id="projects">
//       <motion.h2
//         className="roboto-slab text-center text-2xl sm:text-4xl mt-8"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         viewport={{ once: false }}
//       >
//         PROJECTS
//       </motion.h2>
//       {/* project 1st section */}
//       {/* <motion.div
//         className="projects-wrapper flex justify-center mt-12 mb-8 w-full"
//         initial={{ opacity: 0, x: -100 }} // starting state
//         animate={{ opacity: 1, x: 0 }} // end state
//         transition={{ duration: 1.5 }}
//         viewport={{ once: false }}
//       > */}
//       <motion.div
//         className="projects-wrapper flex justify-center mt-12 mb-8 w-full"
//         // initial={{ opacity: 0, x: 50, y: 50 }}
//         // whileInView={{ opacity: 1, x: 0, y: 0 }}
//         initial={{ opacity: 0, x: -50, y: 50 }} // 👈 starts bottom-left
//         whileInView={{ opacity: 1, x: 0, y: 0 }} // 👈 ends at original position
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://simple-employee-face-recognition-ap.vercel.app/"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/face-scan.jpg"
//               alt="Face Recognition Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               Simple Face Recognition App (Next.js, Face-API, Prisma, Neon
//               Database, Typescript, Tailwind CSS)
//             </p>
//           </Link>
//         </div>
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://rms-mug-printing.vercel.app"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/rms.jpg"
//               alt="RMS Mug Printing Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               RM&apos;s Mug Printing(Next.js, Tailwind CSS, Typescript)
//             </p>
//           </Link>
//         </div>
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://simple-next-commerce.vercel.app/"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/snow-and-shadow.jpg"
//               alt="Simple E-Commerce Site Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               Simple Next E-Commerce Website (Next.js, Zustand, Stripe(Test Mode), Cloudinary (for storing images), 
//               Typescript & Tailwind)
//             </p>
//           </Link>
//         </div>
//       </motion.div>
//       {/* project 2nd section */}
//       {/* <motion.div
//         className="projects-wrapper flex justify-center mb-8 w-full"
//         initial={{ opacity: 0, x: 100 }} // starting state
//         animate={{ opacity: 1, x: 0 }} // end state
//         transition={{ duration: 1.5 }}
//         viewport={{ once: false }}
//       > */}
//       <motion.div
//         className="projects-wrapper flex justify-center mb-8 w-full"
//         initial={{ opacity: 0, x: 50, y: 50 }} // 👈 Starts bottom-right
//         whileInView={{ opacity: 1, x: 0, y: 0 }} // 👈 Moves to left-center
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://java-spring-boot-reg-login-frontend.vercel.app/"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/java-spring-boot.jpg"
//               alt="Reg Login Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               Java Spring Boot - Reg Login (React, Typescript, MongoDB, Tailwind
//               CSS, Java, Spring Boot, Security)
//             </p>
//           </Link>
//         </div>
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://github.com/LetranEyeshield/hosp-mgmt-system-thesis"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/hms.jpg"
//               alt="HMS Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               Hospital Management Simple System (Java MySQL)
//             </p>
//           </Link>
//         </div>
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://github.com/LetranEyeshield/itr_system"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/itr.jpg"
//               alt="ITR System Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               Individual Treatment Record (HTML & CSS, PHP, MySQL)
//             </p>
//           </Link>
//         </div>
//       </motion.div>
//       {/* project 3rd section */}
//       {/* <motion.div
//         className="projects-wrapper flex justify-center mb-8 w-full"
//         initial={{ opacity: 0, x: -100 }} // starting state
//         animate={{ opacity: 1, x: 0 }} // end state
//         transition={{ duration: 1.5 }}
//         viewport={{ once: false }}
//       > */}
//       {/* <motion.div
//         className="projects-wrapper flex justify-center mb-8 w-full"
//         initial={{ opacity: 0, scale: 0.5 }} // 👈 Small and transparent
//         whileInView={{ opacity: 1, scale: 1 }} // 👈 Full size and visible
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.5 }}
//       > */}
//       <motion.div
//         className="projects-wrapper flex justify-center mb-8 w-full"
//         initial={{ opacity: 0, scale: 0.3 }}
//         whileInView={{ opacity: 1, scale: [0.3, 1.1, 1] }} // 👈 Slight overshoot
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://github.com/LetranEyeshield/CRDS"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/crds.jpg"
//               alt="CRDS Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               Local Civil Registrar Database System (Java, MySQL)
//             </p>
//           </Link>
//         </div>
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://sample-debut-website.vercel.app"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/rencriselle.jpg"
//               alt="Sample 18th Debut Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               Sample Debut Website (Next.js, Typescript, Tailwind CSS)
//             </p>
//           </Link>
//         </div>
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://my-wedding-website-six.vercel.app"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/rolan-kate.jpg"
//               alt="Sample Wedding Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               Sample Wedding Website (Next.js, Tailwind CSS, Typescript)
//             </p>
//           </Link>
//         </div>
//       </motion.div>
//       {/* project 4th section */}
//       <motion.div
//         className="projects-wrapper flex justify-center mb-8 w-full"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         viewport={{ once: true }}
//       >
//         <div className="project-contents w-1/3">
//           <Link
//             href="https://rhu-pharma-ncd-list-mern.vercel.app"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/mern.jpg"
//               alt="RHU Pharma NCD List Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               RHU Pharmacy Patient List (MERN Stack, Axios, Typescript &
//               Tailwind)
//             </p>
//           </Link>
//         </div>

//         <div className="project-contents w-1/3">
//           <Link
//             href="https://rhu-online-appointment-checkup.vercel.app/"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/rhu-booking.jpg"
//               alt="RHU Booking Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               RHU Online Booking Check-up (Next.js, Typescript, Axios, MongoDB,
//               Tailwind CSS)
//             </p>
//           </Link>
//         </div>

//         <div className="project-contents w-1/3">
//           <Link
//             href="https://github.com/LetranEyeshield/the_dc_system"
//             target="_blank"
//             rel="noreferrer"
//             className="text-center"
//           >
//             <Image
//               src="/images/dc.jpg"
//               alt="Sample Image"
//               width={400}
//               height={400}
//               className="px-4 border border-gray-500 border-solid rounded-md mx-auto"
//             />
//             <p className="text-center mx-auto bg-gradient-to-r from-gray-300 to-gray-600">
//               The DC System (Created in Java and MySQL - Beta Version)
//             </p>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// }


// app/components/Projects.tsx

export default function Projects() {
  const projects = [
    {
      title: "Clinic / Patient Management System",
      description:
        "Full-stack MERN application for managing patients, medicines, and records with search and update functionality.",
      tech: ["Next.js 15", "MongoDB Atlas", "TypeScript", "Tailwind"],
      link: "#",
    },
    {
      title: "AI Medical Symptom Checker",
      description:
        "AI-powered medical assistant that analyzes symptoms and provides possible recommendations.",
      tech: ["Next.js", "OpenAI API", "MongoDB"],
      link: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "Modern e-commerce platform with Stripe payment integration and product management.",
      tech: ["Next.js", "Stripe", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">
      {/* Aurora Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold aurora-text">
          My Projects
        </h2>
        <p className="text-gray-400 mt-4">
          Real-world applications built with modern technologies
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-400 transition">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <a
              href={project.link}
              className="inline-block text-sm text-indigo-400 hover:text-indigo-300 transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
