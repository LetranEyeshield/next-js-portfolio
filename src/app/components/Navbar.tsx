// // components/Navbar.tsx
// "use client";
// import { useState } from "react";

// import Link from "next/link";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 text-white p-4">
//       <div className="flex justify-between items-center">
//         <h1 className="text-xl font-bold">MyApp</h1>
//         <button onClick={() => setOpen(!open)} className="md:hidden">
//           ☰
//         </button>
//         <ul className="hidden md:flex gap-6">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//         </ul>
//       </div>
//       {open && (
//         <ul className="md:hidden flex flex-col gap-4 mt-4">
//           <li>
//             <a href="#">Home</a>
//           </li>
//           <li>
//             <a href="#">About</a>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, x: -100 }} // starting state
        animate={{ opacity: 1, x: 0 }} // end state
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }} // animation duration
        viewport={{ once: false }}
        className="navbar w-full bg-gray-500"
      >
        {/* <nav className="navbar w-full bg-gray-500"> */}
        <ul className="flex py-2 justify-end">
          <li className="mx-6 hover:bg-violet-100 rounded-md">
            <Link
              href={"#about"}
              className="flex text-white px-6 py-3 text-l md:text-2xl hover:text-gray-500"
            >
              About
            </Link>
          </li>
          <li className="mx-6 hover:bg-violet-100 rounded-md">
            <Link
              href={"#projects"}
              className="flex text-white px-6 py-3 text-l md:text-2xl hover:text-gray-500"
            >
              Projects
            </Link>
          </li>
          <li className="mx-6 hover:bg-violet-100 rounded-md">
            <Link
              href={"#socials"}
              className="flex text-white px-6 py-3 text-l md:text-2xl hover:text-gray-500"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* </nav> */}
      </motion.nav>
    </>
  );
}
