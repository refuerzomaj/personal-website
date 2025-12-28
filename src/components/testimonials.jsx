import { useState, useEffect } from "react";
import agility from "../assets/agility.webp";
import lcs from "../assets/lcs.webp";
import dawson from "../assets/dawson.webp";
import ysn from "../assets/ysn.webp";

const testimonials = [
  {
    image: agility,
    name: "Agility Outsourcing",
    message: "Great guy to work with.",
  },
  {
    image: lcs,
    name: "Jonyeung",
    message: "It was a pleasure and easy to work with Jomardon G.",
  },
  {
    image: ysn,
    name: "You So Ninja",
    message:
      "Thank you so much for the helpful boost! We may work together again in the future.",
  },
  {
    image: dawson,
    name: "Abavabsolutions",
    message: "Did a fantastic job!",
  },
  {
    image: "",
    name: "MG Computing",
    message: "Great service!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-tl text-center animate-slide-in-bottom  from-gray-900 via-black to-gray-900"
    >
      {/* Title */}
      <div className="max-w-[1000px] mx-auto h-full flex flex-col items-center justify-items-start px-20">
        <div className="flex flex-col items-start justify-items-start w-full p">
          <h2 className="text-3xl pb-8 sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-orange-400 text-transparent bg-clip-text drop-shadow-lg">
            Testimonials
          </h2>
        </div>
      </div>

      <div className="max-w-xl mx-auto relative px-12 ">
        {/* Card */}
        <div className="bg-white cursor-pointer rounded-2xl shadow-xl p-8 min-h-[340px] flex flex-col justify-between transition-all duration-500">
          <div>
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-gray-100"
            />

            {/* Stars */}
            <div className="flex justify-center mb-4 text-yellow-400">
              ★★★★★
            </div>

            <p className="text-black italic leading-relaxed">
              “{testimonials[index].message}”
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-black text-lg font-semibold">
              {testimonials[index].name}
            </h3>
          </div>
        </div>

        {/* Prev Button */}
        <button
          onClick={prev}
          className="absolute top-1/2 -left-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:bg-orange-500/90 cursor-pointer transition "
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute top-1/2 -right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md hover:bg-orange-500/90 cursor-pointer transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
