import React from "react";
import Hero from "../components/home/Hero";
import Media from "../components/home/Media";
import Destination from "../components/home/Destination";
import Booking from "../components/home/Booking";
import Discount from "../components/home/Discount";

function Home() {
  return (
    <div className="">
      <Hero />
      <Media />
      <Destination />
      <Booking />
      <Discount />
      {/* Add more components as needed */}
    </div>
  );
}

export default Home;
