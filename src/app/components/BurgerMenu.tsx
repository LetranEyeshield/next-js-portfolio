// components/BurgerMenu.tsx
"use client";
// import { slide as Menu } from "react-burger-menu";
import { stack as Menu } from "react-burger-menu";
import "./burger-stack.css"; // We'll create this file next
import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <Menu right isOpen={isOpen} onStateChange={handleStateChange}>
      {/* <Menu> */}
      <Link href={"#about"} onClick={closeMenu} className="menu-item">
        About
      </Link>
      <Link href={"#projects"} onClick={closeMenu} className="menu-item">
        Projects
      </Link>
      <Link href={"#socials"} onClick={closeMenu} className="menu-item">
        Contact
      </Link>
    </Menu>
  );
}
