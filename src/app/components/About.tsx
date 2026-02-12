// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// import { AuroraTextEffect } from "@/app/components/lightswind/aurora-text";
// import { ShinyText } from "@/app/components/lightswind/shiny-text";

// export default function About() {
//   return (
//     <div
//       className="w-full flex flex-col items-center bg-gradient-to-r from-gray-300 to-purple-300 pt-50 pb-15"
//       id="about"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         viewport={{ once: false }}
//       >
//         <AuroraTextEffect
//           text="Michael Cris Rigucira Rosalin"
//           colors={{
//             first: "bg-cyan-400",
//             second: "bg-yellow-400",
//             third: "bg-green-400",
//             fourth: "bg-purple-500",
//           }}
//           blurAmount="blur-lg"
//           className="roboto-slab text-3xl sm:text-5xl text-center"
//         />

//         {/* <h1 className="roboto-slab text-3xl sm:text-5xl text-center pb-2">
//           Michael Cris R. Rosalin
//         </h1> */}

//         {/* <p className="text-center font-bold">Programmer / Web Developer</p> */}
       
//         {/* <p className="text-center font-bold">
//           Bachelor of Science in Information Technology
//         </p>
//         <p className="text-center font-bold">
//           Colegio De San Juan De Letran-Manaoag
//         </p> */}
//          <Link
//           href={"https://zingy-palmier-6c0268.netlify.app/"}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block font-bold text-center text-xl hover:text-gray-500"
//         >
//           <ShinyText
//             size="2xl"
//             weight="bold"
//             baseColor="rgba(242, 245, 250, 1)"
//             shineColor="rgba(6, 0, 12, 0.9)"
//           >
//             Online Resume
//           </ShinyText>
//         </Link>
//           <p className="text-center mb-4 mt-8 mx-auto w-8/12">Hi, I&apos;m Michael — a self-taught web developer passionate about building fast, modern, and user-friendly web applications.</p>
//           <p className="text-center mb-4 mx-auto w-8/12">I build fast, scalable, and user-focused web applications using React, Next.js, TypeScript, Tailwind CSS, MongoDB, Vanilla PHP, and Java/Spring Boot. My journey started with curiosity and grew into a passion for creating real-world digital solutions.</p>
//           <p className="text-center mb-4 mx-auto w-8/12">From front-end UI/UX to back-end API development and database management, I turn ideas into fully functional applications. I focus on clean code, performance, and continuous improvement — always learning, always leveling up.</p>
//           <p className="text-center mx-auto w-8/12">Let&apos;s build something great together.
//             Explore my projects below — and feel free to reach out if you&apos;d like to collaborate!</p>
       
//       </motion.div>
//     </div>
//   );
// }



"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about"
      className="pt-32 pb-24 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-bold mb-6"
        >
          Michael Cris R. Rosalin
        </motion.h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          I&apos;m a self-taught web developer passionate about building fast,
          scalable, and user-focused web applications.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          I specialize in Next.js, Javascript, TypeScript, Tailwind CSS and MongoDB.
          From UI to backend APIs and database design —
          I turn ideas into production-ready applications.
        </p>

        <Link
          href="https://zingy-palmier-6c0268.netlify.app/"
          target="_blank"
          className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
        >
          View Online Resume
        </Link>
      </div>
    </section>
  );
}
