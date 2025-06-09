import React from "react";
import img1 from "../../assets/Rectangle.png";
import group from "../../assets/Group 20.png";
import group2 from "../../assets/bottom.png";

function Discount() {
  return (
    <section className="px-5 md:px-20 text-center mt-20 w-full">
      <div className="flex flex-col gap-8 md:gap-14 md:flex-row items-center w-full">
        <img src={img1} alt="Discount" className="w-full md:w-1/3" />
        <img src={group} alt="location" className="w-full md:w-2/3" />
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between">
        <div className="bg-[#D9D9D9]/41 flex items-center w-full md:w-1/3 rounded-3xl py-6 px-6 md:px-6">
          <h2 className="text-[#2986FE] text-3xl font-semibold uppercase">
            20% off{" "}
          </h2>
          <span className="capitalize text-black font-semibold ml-4 md:ml-10">
            till 28th of march 2025
          </span>
        </div>
        <img
          src={group2}
          alt="cover"
          className="w-full md:w-2/3 rounded-3xl h-32"
        />
      </div>
    </section>
  );
}

export default Discount;
