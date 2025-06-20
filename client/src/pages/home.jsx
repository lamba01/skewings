import React from "react";
import Hero from "../components/home/Hero";
import Media from "../components/home/Media";
import Destination from "../components/home/Destination";
import Booking from "../components/home/Booking";
import Discount from "../components/home/Discount";
import About from "../components/home/About";
import Discover from "../components/home/Discover";
import Testimonial from "../components/home/Testimonial";
import Banner from "../components/home/Banner";
function Home() {
  return (
    <div className="">
      <Hero />
      <Media />
      <Destination />
      <Booking />
      <Discount />
      <About />
      <Discover />
      <Testimonial />
      <Banner />
      {/* Add more components as needed */}
    </div>
  );
}

export default Home;
