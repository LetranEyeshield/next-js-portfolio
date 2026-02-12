'use client';
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";
// import { AuroraTextEffect } from "../lightswind/aurora-text";


export default function PageNew() {
  const projects = [
    {
      url: "https://simple-employee-face-recognition-ap.vercel.app/",
      imagePath: "/images/face-scan.jpg",
      title: "Simple Face Recognition App",
      description: "A real-time facial recognition attendance system that allows employees to securely register and log in using face biometrics. Built with Face-API for client-side detection and Prisma with Neon PostgreSQL for persistent storage. Designed with performance, accuracy, and production-ready authentication flow in mind.",
      tech: ["Next.js", "Face-API", "Neon Database", "Prisma", "Javascript", "TypeScript", "Tailwind CSS"],
    },
    {
      url: "https://rhu-online-appointment-checkup.vercel.app/",
      imagePath:"/images/rhu-online-appoinment.jpg",
      title: "RHU Online Appoinment Booking",
      description:"A healthcare-focused appointment scheduling platform enabling patients to book, manage, and track check-ups online. Built with Next.js and MongoDB, featuring API-driven communication via Axios and a responsive UI optimized for accessibility and real-world clinic workflows.",

      tech: ["Next.js", "Javascript", "Typescript", "MongoDB", "Axios", "Tailwind CSS"],
    },
    {
      url: "https://simple-next-commerce.vercel.app/",
      imagePath: "/images/snow-shadow.jpg",
      title: "Simple E-Commerce Website",
      description: "A full-stack e-commerce platform featuring product management, Stripe payment integration (test mode), global state management with Zustand, and cloud-based image storage via Cloudinary. Designed with scalable architecture and a seamless checkout experience.",
      tech: ["Next.js", "Stripe(Text Mode)", "MongoDB", "Zustand", "Cloudinary", "Javascript", "Typescript"],
    },
     {
      url: "https://rms-mug-printing.vercel.app",
      imagePath: "/images/rms.jpg",
      title: "RM's Mug Printing",
      description: "A business-focused website built for a custom mug printing service, enabling customers to browse designs and submit personalized orders. Integrated email notifications using Nodemailer to streamline client inquiries and order communication.",
      tech: ["Next.js", "Javascript", "Typescript", "Nodemailer"],
    },
     {
      url: "https://my-wedding-website-six.vercel.app",
      imagePath: "/images/rolan-kate.jpg",
      title: "Sample Wedding Website",
     description: "A modern event website designed for wedding announcements and guest coordination. Features RSVP handling, responsive design, and automated email confirmations to enhance guest engagement and event organization.",
      tech: ["Next.js", "Javascript", "Typescript", "Nodemailer"],
    },
     {
      url: "https://sample-debut-website.vercel.app",
      imagePath: "images/rencriselle.jpg",
      title: "Sample Debut Website",
      description: "An interactive celebratory website created for a debut event, showcasing event details, photo galleries, and RSVP management. Built with a focus on performance, elegant UI design, and seamless guest communication.",
      tech: ["Next.js", "Javascript", "Typescript", "Nodemailer"],
    },
    //to be shown in see more button
  ];

  const seeMoreProjects =[
        {
           url: "https://java-spring-boot-reg-login-frontend.vercel.app/",
  title: "Secure Registration & Login System",
  imagePath: "/images/java-spring-boot.jpg",
  description:
    "A full-stack authentication system built with React and Spring Boot, implementing secure user registration, login, and JWT-based authentication. Integrated Spring Security for role-based access control and MongoDB for persistent storage. Designed with scalable architecture and modern UI using Tailwind CSS.",
  tech: [
    "React",
    "TypeScript",
    "Java",
    "Spring Boot",
    "Spring Security",
    "MongoDB",
    "Tailwind CSS"
  ],
},
{
   url: "https://github.com/LetranEyeshield/hosp-mgmt-system-thesis",
  title: "Hospital Management System",
  imagePath: "/images/hms.jpg",
  description:
    "A desktop-based hospital management system built in Java with MySQL, designed to handle patient records, doctor assignments, appointment scheduling, and billing operations. Structured with modular architecture to simulate real-world healthcare workflows and database-driven reporting.",
  tech: ["Java", "MySQL", "JDBC", "OOP"]
},
{
   url: "https://github.com/LetranEyeshield/itr_system",
  title: "Individual Treatment Record System",
  imagePath: "/images/itr.jpg",
  description:
    "A web-based medical record system developed using PHP and MySQL for managing patient treatment histories and clinical documentation. Focused on structured data storage, CRUD operations, and secure record handling within a healthcare setting.",
  tech: ["HTML", "CSS", "PHP", "MySQL"]
},
{
   url: "https://github.com/LetranEyeshield/CRDS",
  title: "Local Civil Registrar Database System",
  imagePath: "/images/crds.jpg",
  description:
    "A database-driven system built with Java and MySQL to manage civil registry records including births, marriages, and legal documents. Designed with relational data modeling and administrative access controls to ensure data integrity and structured reporting.",
  tech: ["Java", "MySQL", "JDBC", "Relational Database Design"]
},
{
   url: "https://rhu-pharma-ncd-list-mern.vercel.app",
  title: "RHU Pharmacy Patient Management",
  imagePath: "/images/mern.jpg",
  description:
    "A MERN stack application built to manage pharmacy patient records, prescriptions, and medication tracking. Implemented RESTful APIs with Axios integration and a TypeScript-based frontend styled with Tailwind CSS for improved usability and workflow efficiency.",
  tech: [
    "MongoDB",
    "Express",
    "React",
    "Node.js",
    "Axios",
    "TypeScript",
    "Tailwind CSS"
  ]
},
{
   url: "https://github.com/LetranEyeshield/the_dc_system",
  title: "Death Certificate Management System (Beta)",
  imagePath: "/images/dc.jpg",
  description:
    "A Java and MySQL-based system developed to manage and generate official death certificate records. Built with structured database relationships and administrative data validation to simulate real-world civil documentation processes.",
  tech: ["Java", "MySQL", "JDBC", "Database Design"]
}
  ];

 const [show, setShow] = useState(false);

  const displayedProjects = show
  ? [...projects, ...seeMoreProjects]
  : projects;


  return (
    <main className="bg-black text-white">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-lg aurora-text">
            Michael Cris Rigucira Rosalín
          </h1>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-indigo-400 transition text-sm">About</a>
            <a href="#projects" className="hover:text-indigo-400 transition text-sm">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition text-sm">Contact</a>

            {/* Social Icons */}
            {/* <div className="flex gap-4 ml-4">
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
            </div> */}
          </div>
        </nav>
      </header>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 aurora-text-second">
          Hi, I&apos;m Michael
        </h2>

        <p className="text-gray-400 max-w-2xl mb-8">
          Full Stack Developer building scalable web applications using
          Next.js, Javascript, TypeScript, MongoDB, and modern backend systems.
        </p>

        {/* Hero Social Icons */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/LetranEyeshield"
            target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
           <FaGithub className="text-2xl sm:text-4xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-cris-rosalin-038492144/"
            target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
           <FaLinkedin className="text-2xl sm:text-4xl" />
          </a>
          <a
            href="mailto:rosalinmichaelcris@gmail.com"
            target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
            <FaEnvelope className="text-2xl sm:text-4xl" />
          </a>
           <a
            href="https://web.facebook.com/michael.cris.rosalin"
            target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
           <FaFacebook className="text-2xl sm:text-4xl" />
          </a>
        </div>
        

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

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 aurora-text">About Me</h2>

        {/* <p className="text-gray-400 leading-relaxed">
          I'm a passionate full-stack developer focused on building real-world
          applications using modern technologies like Next.js 15, MongoDB Atlas,
          and TypeScript. I continuously improve my skills to become a strong
          software engineer.
        </p> */}
        <p className="text-gray-400 leading-relaxed">
          I&apos;m a self-taught full-stack developer focused on building real-world systems — 
          from healthcare management platforms to AI-powered applications.
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

        {/* <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a href={project.url}
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
              target="_blank"
            >
              <img src={project.imagePath} alt={project.title} className="rounded-lg max-w-full" />
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
            </a>
          ))}
          </div> */}
     
     <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

  {displayedProjects.map((project, index) => (
    <a
      href={project.url}
      key={index}
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
      target="_blank"
    >
      <img
        src={project.imagePath}
        alt={project.title}
        className="rounded-lg max-w-full mb-4"
      />

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
    </a>
  ))}

</div>
       
        <div className="text-center mt-16">
 <div className="text-center mt-16">
  {!show ? (
    <button
      onClick={() => setShow(true)}
      className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition"
    >
      See More Projects →
    </button>
  ) : (
    <button
      onClick={() => setShow(false)}
      className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition"
    >
      Show Less ↑
    </button>
  )}
</div>

</div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 aurora-text">
          Let's Work Together
        </h2>

        {/* <p className="text-gray-400 mb-8">
          I'm currently open to junior developer opportunities and freelance projects.
        </p> */}

        <p className="text-gray-400 mb-8">
          Open to junior developer roles, startup teams, and collaborative projects.
        </p>

        <a
          href="mailto:rosalinmichaelcris@gmail.com"
          target="_blank"
          className="px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-500 transition"
        >
          Contact Me
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        <div className="flex justify-center gap-6 mb-3">
         <a
            href="https://github.com/LetranEyeshield"
            target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
           <FaGithub className="text-white text-xl sm:text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/michael-cris-rosalin-038492144/"
            target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
           <FaLinkedin className="text-white text-xl sm:text-2xl" />
          </a>
          <a
            href="mailto:rosalinmichaelcris@gmail.com"
             target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
            <FaEnvelope className="text-white text-xl sm:text-2xl" />
          </a>
           <a
            href="https://web.facebook.com/michael.cris.rosalin"
             target="_blank"
            className="hover:text-indigo-400 transition hover:scale-110"
          >
           <FaFacebook className="text-white text-xl sm:text-2xl" />
          </a>
        </div>

        © {new Date().getFullYear()} Michael Rosalín. All rights reserved.
      </footer>

    </main>
  );
}
