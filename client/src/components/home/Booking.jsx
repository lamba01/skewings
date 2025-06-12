import React from "react";
import SectionHeader from "../SectionHeader";
import { FaLocationDot, FaCreditCard, FaAngleRight } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import invert from "../../assets/destination3.png";
import "./booking.css";

function Booking() {
  return (
    <section
      className="px-5 md:px-20 text-center mt-20 w-full"
      data-aos="zoom-in"
    >
      <SectionHeader
        title="journey the skies made simple"
        subtitle="Seamless flight booking and travel planning at your fingertips—effortless, affordable, and stress-free journeys await you!"
      />
      <div className="flex gap-5 items-end flex-col md:flex-row w-full">
        <div className="bg-[#F9F9FB] w-full md:w-1/3 h-54 flex flex-col items-start justify-between rounded-t-3xl py-10 px-6 md:px-8">
          <FaLocationDot className="text-[#2986FE]/99" />
          <h4 className="capitalize text-2xl font-semibold w-full md:w-1/3 text-start">
            find your destination
          </h4>
        </div>
        <div className="relative w-full md:w-1/3">
          <div className="z-10 absolute top-0 right-0 w-36 h-36 border-8 border-white border-solid rounded-[50%] flex items-center justify-center ">
            <img
              src={invert}
              alt="holiday location"
              className="w-full h-full object-cover rounded-[50%] shadow-lg"
            />
          </div>
          <div className="inverted-radius relative w-full h-76 flex flex-col items-start gap-2 text-white bg-[#2986FE]/99 px-6 md:px-8 py-8 shadow-lg">
            <IoBookOutline size={60} className="z-20" />
            <h4 className="capitalize text-2xl font-semibold">book a ticket</h4>
            <p className="text-start capitalize w-[80%]">
              traveling a wonderful way to travel different places learn about
              different cultures and gain new experiences!!
            </p>
            <button className="text-center capitalize text-sm md:text-xl cursor-pointer hover:underline mt-5">
              learn more <FaAngleRight className="inline-block" />
            </button>
          </div>
        </div>

        <div className="bg-[#F9F9FB] w-full md:w-1/3 h-54 flex flex-col items-start justify-between rounded-t-3xl py-10 px-6 md:px-8">
          <FaCreditCard className="text-[#2986FE]/99" />
          <h4 className="capitalize text-2xl font-semibold w-full md:w-1/3 text-start">
            play & journey
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Booking;
