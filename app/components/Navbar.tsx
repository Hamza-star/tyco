"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineRead,
  AiOutlineContacts,
} from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome />, href: "/" },
    { name: "Services", icon: <AiOutlineInfoCircle />, href: "/services" },
    { name: "Team", icon: <AiOutlineRead />, href: "/team" },
    { name: "Projects", icon: <AiOutlineContacts />, href: "/projects" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 border-b  w-full h-18  bg-white/75 backdrop-blur-md  z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <Link href="/" className="text-xl  font-extrabold text-gray-800">
                TYCO
              </Link>

              <span className="text-xs">
                <span className="ml-1  text-gray-700">
                  Engineering Services
                </span>
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-black/5 focus:outline-none focus:bg-black focus:text-white transition duration-150 ease-in-out"
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800  hover:bg-black/5 hover:text-black focus:outline-none  transition duration-150 ease-in-out"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800  hover:bg-zinc-950 hover:text-white focus:outline-none focus:bg-[#BEF264] transition duration-150 ease-in-out"
                  aria-label={item.name}
                >
                  <span className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
