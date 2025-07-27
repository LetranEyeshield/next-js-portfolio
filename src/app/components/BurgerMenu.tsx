// components/BurgerMenu.tsx
"use client";
// import { slide as Menu } from "react-burger-menu";
import { stack as Menu } from "react-burger-menu";
import "./burger-stack.css"; // We'll create this file next
import Link from "next/link";

export default function BurgerMenu() {
  return (
    <Menu right>
      {/* <Menu> */}
      <Link href={"/about"} className="menu-item">
        About
      </Link>
      <Link href={"/projects"} className="menu-item">
        Projects
      </Link>
      <Link href={"/socials"} className="menu-item">
        Contact
      </Link>
    </Menu>
  );
}
