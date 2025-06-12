import React from "react";
import sarah from "../../assets/sarah.png";
import emmanuel from "../../assets/emmanuel.png";
import james from "../../assets/james.png";
import { FaQuoteLeft } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "sarah michell",
    occupation: "Travel Blogger",
    rating: 4.2,
    feedback:
      "Booking my flights has never been this easy! The seamless experience, great deals, and hassle-free process make this my go-to travel platform. I’ve explored multiple destinations without breaking the bank. Highly recommended for stress-free travel!",
    image: sarah,
  },
  {
    id: 2,
    name: "emmanuel roberts",
    occupation: "photographer",
    rating: 5,
    feedback:
      "I love discovering new places, and this platform has made it so simple! From easy bookings to great prices, everything is just perfect. I never have to worry about travel arrangements—it's all taken care of effortlessly!",
    image: emmanuel,
  },
  {
    id: 3,
    name: "james carter",
    occupation: "business consultant",
    rating: 4.5,
    feedback:
      "As a frequent traveler, I need quick and reliable flight bookings. This platform delivers just that! The affordable prices and smooth booking experience save me both time and money. Traveling for work has never been this convenient!",
    image: james,
  },
];

function Testimonial() {
  return (
    <section>
      <div className="px-5 md:px-20 mt-20 w-full" data-aos="flip-left">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white flex flex-col justify-between gap-4 md:gap-12  rounded-lg"
            >
              <div>
                {" "}
                <div className="flex items-center gap-2 mt-2">
                  {[...Array(Math.floor(testimonial.rating))].map(
                    (_, index) => (
                      <IoStar
                        size={20}
                        key={index}
                        className="text-[#2986FE] "
                      />
                    )
                  )}
                  {testimonial.rating % 1 !== 0 && (
                    <IoStar
                      size={20}
                      className="text-[#2986FE]"
                      style={{ opacity: 0.5 }}
                    />
                  )}
                </div>
                <p className="mt-4 text-gray-700 italic">
                  <FaQuoteLeft className="inline mr-2" />
                  {testimonial.feedback}
                </p>
              </div>

              <div className="flex items-center rounded-2xl bg-[#D9D9D9]/41 py-2 px-4 gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full "
                />
                <div>
                  <h4 className="text-lg font-semibold capitalize">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#101010]/70 capitalize">
                    {testimonial.occupation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
