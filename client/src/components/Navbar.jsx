import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="flex justify-between items-center px-5 sm:px-10 z-20 fixed bg-white h-16 w-full shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img className="h-10" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-5 md:gap-10 uppercase font-semibold">
        <a className="text-sm text-black hover:text-black" href="/package">
          Package
        </a>
        <a className="text-sm text-black hover:text-black" href="/contact">
          Contact
        </a>
        <a className="text-sm text-black hover:text-black" href="/">
          Home
        </a>
        <a className="text-sm text-black hover:text-black" href="/tour">
          Tour
        </a>
        <a className="text-sm text-black hover:text-black" href="/about">
          About
        </a>
      </div>

      {/* Book Trip Button */}
      <div className="hidden md:block">
        <button className="bg-black text-white uppercase font-semibold px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300">
          <a href="/book-trip">Book Trip</a>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-30">
        <button onClick={toggleMenu}>
          {menuOpen ? <IoMdCloseCircle size={24} /> : <IoMenuSharp size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md p-5 flex flex-col gap-4 font-semibold uppercase md:hidden">
          <a href="/package" onClick={toggleMenu}>
            Package
          </a>
          <a href="/contact" onClick={toggleMenu}>
            Contact
          </a>
          <a href="/" onClick={toggleMenu}>
            Home
          </a>
          <a href="/tour" onClick={toggleMenu}>
            Tour
          </a>
          <a href="/about" onClick={toggleMenu}>
            About
          </a>
          <a
            href="/book-trip"
            className="bg-black text-white text-center px-4 py-2 rounded-md mt-2"
            onClick={toggleMenu}
          >
            Book Trip
          </a>
        </div>
      )}
    </nav>
  );
}
