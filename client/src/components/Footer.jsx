import React from "react";
import logo from "../assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="text-black mt-24 py-10 px-5 sm:px-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <aside className="flex flex-col items-start gap-8 w-full md:w-1/4">
          <img src={logo} alt="skewings logo" />
          <p className="text-lg capitalize text-[#000000]/80 font-semibold ">
            discover the world one step at a time. life is a short trip
          </p>
          <div className="flex gap-6 shadow-lg bg-white border-[#F0F0F0] border-2 px-6 py-3 w-fit rounded-4xl">
            <h2 className="text-lg font-semibold capitalize">follow</h2>
            <div className="flex gap-2 items-center justify-center">
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transition-transform transform"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transition-transform transform"
              >
                <AiFillInstagram size={20} />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transition-transform transform"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg transition-transform transform"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </aside>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-8 md:px-4 w-full">
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#press"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#help"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Free e-books
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Travel Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#cancellation"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    How To Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#safety"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Destinations</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#africa"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Africa
                  </a>
                </li>
                <li>
                  <a
                    href="#europe"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Europe
                  </a>
                </li>
                <li>
                  <a
                    href="#asia"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Asia
                  </a>
                </li>
                <li>
                  <a
                    href="#america"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    America
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#privacy"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#cookies"
                    className="hover:underline text-[#000000]/80 font-semibold"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </footer>
      <div className="border-t border-gray-300 w-full mt-4"></div>
      <div className="w-full text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Skewings. All rights reserved.
      </div>
    </>
  );
}

export default Footer;
