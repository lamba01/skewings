import React from "react";
import SectionHeader from "../SectionHeader";
import { GiChurch } from "react-icons/gi";
import { BiBowlHot } from "react-icons/bi";
import { FaSackDollar } from "react-icons/fa6";

const offers = [
  {
    id: 1,
    logo: <GiChurch className="text-3xl text-[#2986FE]" />,
    title: "various destinations",
    description:
      "From bustling cities to serene beaches, explore countless destinations around the globe. Your next adventure is just a flight away!",
  },
  {
    id: 2,
    logo: <BiBowlHot className="text-3xl text-[#2986FE]" />,
    title: "everything included",
    description:
      "Enjoy stress-free travel with all inclusive options. Flights, accommodations, and more everything you need for a perfect trip in one place.",
  },
  {
    id: 3,
    logo: <FaSackDollar className="text-3xl text-[#2986FE]" />,
    title: "affordable prices",
    description:
      "Travel more while spending less! We bring you the best deals on flights and packages, making every journey budget friendly.",
  },
];

function Discover() {
  return (
    <section className="px-5 md:px-20 text-center mt-20 w-full">
      <SectionHeader
        title="discover the world from above"
        subtitle="Whether you're soaring over breathtaking landscapes or gliding through the clouds, every journey is an opportunity for adventure"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              {offer.logo}
            </div>
            <h3 className="text-xl font-semibold mb-2 capitalize text-[#1E1E1E]">
              {offer.title}
            </h3>
            <p className="text-[#101010]/58 capitalize">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Discover;
