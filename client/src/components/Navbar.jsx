import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinkClass = "text-sm hover:text-[#2986FE] transition duration-200";
  const activeClass = "text-[#2986FE]";

  return (
    <nav className="flex justify-between md:justify-around items-center px-5 sm:px-10 z-20 fixed top-0 bg-white h-16 w-full ">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img className="h-10" src={logo} alt="Logo" />
        </NavLink>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-5 md:gap-10 uppercase font-semibold">
        <NavLink
          to="/package"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? activeClass : "text-black"}`
          }
        >
          Package
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? activeClass : "text-black"}`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? activeClass : "text-black"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/tour"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? activeClass : "text-black"}`
          }
        >
          Tour
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${navLinkClass} ${isActive ? activeClass : "text-black"}`
          }
        >
          About
        </NavLink>
      </div>

      {/* Book Trip Button */}
      <div className="hidden md:block">
        <NavLink to="/book-trip">
          <button className="bg-black text-white uppercase font-semibold px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
            Book Trip
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-30">
        <button onClick={toggleMenu}>
          {menuOpen ? <IoMdCloseCircle size={24} /> : <IoMenuSharp size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 font-semibold uppercase md:hidden z-20">
          {["/package", "/contact", "/", "/tour", "/about"].map((path, idx) => (
            <NavLink
              key={idx}
              to={path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `${navLinkClass} ${isActive ? activeClass : "text-black"}`
              }
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </NavLink>
          ))}
          <NavLink to="/book-trip" onClick={toggleMenu}>
            <button className="bg-black text-white text-center w-full px-4 py-2 rounded-md mt-2 hover:bg-gray-800 transition">
              Book Trip
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
