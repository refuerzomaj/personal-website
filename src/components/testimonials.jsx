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
      className="py-20 bg-gradient-to-tl text-center from-gray-900 via-black to-gray-900"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-2 text-white">
        What My Clients Say
      </h2>
      <p className="text-gray-300 mb-10">Trusted by professionals worldwide</p>
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
