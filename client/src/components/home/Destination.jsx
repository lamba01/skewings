import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import destination1 from "../../assets/destination1.png";
import destination2 from "../../assets/destination2.png";
import destination3 from "../../assets/destination3.png";
import destination4 from "../../assets/destination4.jpg";
import destination5 from "../../assets/destination5.jpg";

const destinations = [
  {
    id: 1,
    image: destination4,
    title: "Olhuveli Beach Resort",
    location: "Male, Maldives",
    rating: 4.1,
  },
  {
    id: 2,
    image: destination2,
    title: "Sigiriya Rock Fortress",
    location: "Dambulla, Sri Lanka",
    rating: 4.9,
  },
  {
    id: 3,
    image: destination3,
    title: "Grand Canal",
    location: "Venice, Italy",
    rating: 2.5,
  },
  {
    id: 4,
    image: destination1,
    title: "Navagio Beach",
    location: "Zakynthos, Greece",
    rating: 4.8,
  },
  {
    id: 5,
    image: destination5,
    title: "Banff National Park",
    location: "Alberta, Canada",
    rating: 4.9,
  },
];

function Destination() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth >= 1024 ? 3 : 1
  );

  // Update slidesToShow on resize
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 1024 ? 3 : 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? destinations.length - slidesToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + slidesToShow >= destinations.length ? 0 : prev + 1
    );
  };

  const visibleDestinations = destinations.slice(
    currentIndex,
    currentIndex + slidesToShow
  );

  // In case we’re at the end, and fewer items are left
  const fallbackItems =
    visibleDestinations.length < slidesToShow
      ? destinations.slice(0, slidesToShow - visibleDestinations.length)
      : [];

  return (
    <section className="px-5 md:px-40">
      <div className="text-start flex flex-col md:flex-row justify-between items-start mb-8">
        <SectionHeader
          title="Popular Destinations"
          subtitle="unleash your wanderlust with sky wings"
        />
        <div className="flex items-center gap-3 mb-6">
          <div
            onClick={handlePrev}
            className="flex items-center gap-2 bg-[#F9F9FB] px-4 py-4 md:px-6 md:py-6 rounded-[50%] shadow-md cursor-pointer hover:bg-black hover:text-white"
          >
            <FaChevronLeft />
          </div>
          <div
            onClick={handleNext}
            className="flex items-center gap-2 bg-[#F9F9FB] px-4 py-4 md:px-6 md:py-6 rounded-[50%] shadow-md cursor-pointer hover:bg-black hover:text-white"
          >
            <FaChevronRight />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all duration-300">
        {[...visibleDestinations, ...fallbackItems].map((destination) => (
          <div
            key={destination.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-48 object-cover rounded-4xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                {destination.title}
              </h3>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 mb-1">
                  <FaLocationDot className="inline-block" />{" "}
                  {destination.location}
                </p>
                <p className="text-white bg-[#2986FE] px-2 py-1 rounded-full text-sm font-medium flex justify-center items-center gap-1">
                  <FaStar />
                  {destination.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destination;
