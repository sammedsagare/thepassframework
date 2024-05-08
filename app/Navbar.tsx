import React from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-5">
      <h1 className="text-2xl font-bold">tpf</h1>
      <div className="flex space-x-5 md:text-xl items-center">
        <button className="text-black border border-purple-600 px-4 py-2 rounded-full">
          Get in touch
        </button>
        <div className="border border-teal-400 rounded-full p-2">
          <BiMenuAltRight size={24} />
        </div>
      </div>
    </nav>
  );
}
