"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({ weight: "400", subsets: ["latin"] });

function Navbar() {
  let [open, setOpen] = useState(false);
  let [active, setActive] = useState("");
  console.log(open);
  return (
    <nav className="flex items-center justify-between px-10 py-5 w-full bg-transparent">
      <div>
        <h1 className={`text-5xl font-bold ${exo.className}`}>AG</h1>
      </div>
      <div>
        <ul
          className={`absolute w-10/12 mx-10 py-5 bg-gray-500 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg left-0 pl-5 md:bg-transparent  z-50 md:static md:flex md:z-auto md:space-x-5 transition-all duration-500 ease-in ${
            open ? "top-[100px]" : "top-[-250px]"
          }`}
        >
          <li className="group transition duration-300">
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent"
              aria-current="page"
            >
              Home
            </a>
            <span className="ml-3 block max-w-0 h-0.5 group-hover:max-w-7xl bg-white transition-all duration-300 ease-in-out"></span>
          </li>
          <li className="group">
            <a
              href="#projects"
              className="block py-2 pl-3 pr-4 text-white md:bg-transparent "
              aria-current="page"
            >
              Projects
            </a>
            <span className="ml-3 block max-w-0 h-0.5 group-hover:max-w-7xl bg-white transition-all duration-300"></span>
          </li>
          <li className="group">
            <a
              href="#skills"
              className="block py-2 pl-3 pr-4 text-whitemd:bg-transparent "
              aria-current="page"
            >
              Skills
            </a>
            <span className="ml-3 block max-w-0 h-0.5 group-hover:max-w-7xl bg-white transition-all duration-300"></span>
          </li>
          <li className="group">
            <a
              href="#education"
              className="block py-2 pl-3 pr-4 text-white md:bg-transparent"
              aria-current="page"
            >
              Education
            </a>
            <span className="ml-3 block max-w-0 h-0.5 group-hover:max-w-7xl bg-white transition-all duration-300"></span>
          </li>{" "}
          <li className="group">
            <a
              href="#contact"
              className="block py-2 pl-3 pr-4 text-white md:bg-transparent"
              aria-current="page"
            >
              Contacts
            </a>
            <span className="ml-3 block max-w-0 h-0.5 group-hover:max-w-7xl bg-white transition-all duration-300"></span>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="#contact"
          className="hidden md:inline-block text-white font-bold bg-[#F76C4E] p-3 rounded-lg hover:scale-105"
        >
          Let&apos;'s Work Together
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          {open ? (
            <IoMdClose size={25}></IoMdClose>
          ) : (
            <IoMenu size={25}></IoMenu>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
