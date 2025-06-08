import React from "react";
import heroBg from "../assets/hero-image.png";
import plane from "../assets/plane.png";
import "../index.css";

function Hero() {
  return (
    <main className="mt-24 px-3 md:px-10 relative">
      <div
        className="bg-cover bg-no-repeat bg-center clip-shape rounded-[40px] h-[75vh] md:h-[80vh]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <img
          src={plane}
          alt=""
          className="absolute right-0 top-0 md:h-[70vh]"
        />
        <div className="text-start absolute top-[65%] md:top-1/2 left-1/2 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[50%]">
          <p className="text-black text-sm font-bold uppercase">
            elevate your travel experience
          </p>
          <h2 className="text-4xl md:text-7xl uppercase font-semibold">
            experience the magic of flight
          </h2>
          <button className="bg-[#2986FE] text-white py-4 px-8 rounded-4xl capitalize font-semibold mt-6 hover:bg-[#1a5bbf] transition duration-300 cursor-pointer">
            book a trip now
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
