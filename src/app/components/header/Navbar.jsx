import React from "react";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  const linkStyles="hover:text-blue-400"
  return (
    <>
      <ul className="flex flex-col gap-2 text-lg mt-3 md:flex-row md:justify-center md:items-center md:gap-10 md:mt-0 md:py-2 flex-wrap">
        <a className={linkStyles} href="">About</a>
        <a className={linkStyles} href="">Skills</a>
        <a className={linkStyles} href="">Experience</a>
        <a className={linkStyles} href="">Projects</a>
        <a className={linkStyles} href="">Contact</a>
        <a
          href=""
          className="relative text-blue-400 border p-1 px-2 rounded-md border-blue-400 overflow-hidden group"
        >
          <span className="absolute inset-0 border-2 border-blue-400 rounded-md animate-border-glow"></span>
          <span className="relative z-10">Resume</span>
        </a>
        <button className="text-3xl hover:text-orange-300">
          <IoSunnyOutline />
        </button>
      </ul>
    </>
  );
};

export default Navbar;
