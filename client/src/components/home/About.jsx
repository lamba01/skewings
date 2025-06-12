import React from "react";

function About() {
  return (
    <section className="px-5 md:px-20  mt-20 w-full">
      <div className="flex gap-6 md:gap-12 justify-between items-start flex-col md:flex-row">
        <div
          className="bg-[#D9D9D9]/41 py-2 px-6 capitalize text-center w-fit rounded-3xl font-semibold h-fit"
          data-aos="fade-left"
        >
          <h3>About Us</h3>
        </div>
        <div
          className="w-full md:w-2/3 flex flex-col gap-4"
          data-aos="fade-right"
        >
          <p className="text-xm font-semibold mb-2 ">
            Our goal is to provide seamless flight booking, unbeatable deals,
            and a hassle-free experience. Let us handle the details while you
            focus on creating unforgettable memories.
          </p>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <p className="text-[#1E1E1E]/59 text-sm font-normal border-l-2 border-[#2986FE] pl-4">
              we believe travel should be simple, affordable, and stress-free.
              Our mission is to connect travelers with the best flight deals and
              seamless booking experiences. Whether you're planning a quick
              getaway or a long adventure, we're here to make your journey
              effortless
            </p>
            <p className="text-[#1E1E1E]/59 text-sm font-normal border-l-2 border-[#2986FE] pl-4">
              We are dedicated to making air travel more accessible and
              convenient for everyone. With our user-friendly platform, you can
              easily find and book flights that suit your schedule and budget.
              Let us handle the details while you focus on exploring new
              destinations and creating unforgettable memories.
            </p>
          </div>
        </div>
      </div>
      <aside
        className="flex flex-col md:flex-row gap-6 md:gap-12 justify-around items-center mt-4 md:mt-10"
        data-aos="fade-up"
      >
        <div className="text-center mt-10 mb-6">
          <h1 className="text-7xl font-semibold text-[#2986FE]">10+</h1>
          <p className="capitalize font-semibold">years of experiences</p>
        </div>
        <div className="text-center mt-10 mb-6">
          <h1 className="text-7xl font-semibold text-[#2986FE]">12k</h1>
          <p className="capitalize font-semibold">happy customers</p>
        </div>
        <div className="text-center mt-10 mb-6">
          <h1 className="text-7xl font-semibold text-[#2986FE]">4.8</h1>
          <p className="capitalize font-semibold">overall rating</p>
        </div>
      </aside>
    </section>
  );
}

export default About;
