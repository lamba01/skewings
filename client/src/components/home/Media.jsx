import React from "react";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import tripadvisor from "../../assets/Tripadvisor-Logo.svg";
import trivago from "../../assets/Trivago-Logo.svg";
import expedia from "../../assets/Expedia-Logo.svg";
import booking from "../../assets/Booking-Logo.svg";

const Media = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-3 md:px-20 gap-10 py-5 mt-10 mb-20">
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
      <div className="flex gap-5 md:gap-20 justify-center items-center flex-wrap ">
        <img src={tripadvisor} alt="Tripadvisor Logo" className="w-32 h-auto" />
        <img src={trivago} alt="Trivago Logo" className="w-32 h-auto" />
        <img src={expedia} alt="Expedia Logo" className="w-32 h-auto" />
        <img src={booking} alt="Booking Logo" className="w-32 h-auto" />
      </div>
    </section>
  );
};

export default Media;
