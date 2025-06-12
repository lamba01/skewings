import React from "react";
import bannerimg1 from "../../assets/bannerimg1.png";
import bannerimg2 from "../../assets/bannerimg2.png";

const bannerData = [
  {
    id: 1,
    image: bannerimg1,
    title: "Explore the skies with confidence !",
  },
  {
    id: 2,
    image: bannerimg2,
    title: "Discover the world one step at a time",
  },
];

function Banner() {
  return (
    <section>
      <div
        className="flex flex-col md:flex-row gap-8 md:gap-16 justify-between items-center px-5 md:px-20 mt-20"
        data-aos="fade-down"
      >
        {bannerData.map((item) => (
          <div
            key={item.id}
            className="w-full flex items-center gap-6 md:w-1/2"
          >
            <img
              src={item.image}
              alt={`Banner ${item.id}`}
              className="w-40 h-40 rounded-[50%]"
            />
            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-start">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Banner;
