import React from "react";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <ul className="flex flex-col gap-2 text-xl mt-3 md:flex-row md:justify-center md:items-center md:gap-10 md:mt-0 md:py-2 flex-wrap">
        <a href="">About</a>
        <a href="">Skills</a>
        <a href="">Experience</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
        <a
          href=""
          className="relative text-blue-400 border p-1 px-2 rounded-md border-blue-400 overflow-hidden group"
        >
          <span className="absolute inset-0 border-2 border-blue-400 rounded-md animate-border-glow"></span>
          <span className="relative z-10">Resume</span>
        </a>
        <button className="text-3xl ">
          <IoSunnyOutline />
        </button>
      </ul>
    </>
  );
};

export default Navbar;
