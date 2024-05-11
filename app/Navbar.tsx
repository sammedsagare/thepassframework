"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex justify-between items-center pt-5">
        <Link href="/">
          <h1 className="text-2xl font-bold">tpf</h1>
        </Link>

        <div className="flex space-x-5 md:text-xl items-center">
          <div className="hidden md:flex md:gap-5">
            <Link href="/">
              <p className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-teal-400 hover:bg-clip-text hover:text-transparent">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-teal-400 hover:bg-clip-text hover:text-transparent">
                About
              </p>
            </Link>
            <Link href="/results">
              <p className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-teal-400 hover:bg-clip-text hover:text-transparent">
                Results
              </p>
            </Link>
          </div>
          <button className="text-black border border-purple-600 px-4 py-2 rounded-full">
            Get in touch
          </button>
          <div
            className="md:hidden block border border-teal-400 rounded-full p-2 cursor-pointer"
            onClick={toggleMenu}
          >
            <BiMenuAltRight size={24} />
          </div>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center pl-10 bg-[#111] text-white z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="absolute top-0 right-3.5 mt-7 mr-5"
            >
              <MdClose className="w-6 h-6" />
            </button>
            <p className="absolute top-0 left-3.5 mt-8 ml-5">Navigation</p>
            {/* Links */}
            <div className="flex flex-col gap-7 text-4xl font-bold">
              <div onClick={toggleMenu}>
                <Link href="/">Home</Link>
              </div>
              <div onClick={toggleMenu}>
                <Link href="/about">About</Link>
              </div>
              <div onClick={toggleMenu}>
                <Link href="/results">Results</Link>
              </div>
              <button className="absolute bottom-16 w-2/3 shadow-lg -ml-3 text-white text-xl md:text-2xl bg-gradient-to-r from-purple-600 to-teal-400 p-4 rounded-full">
                Get in touch
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
