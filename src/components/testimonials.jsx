import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Agility Outsourcing",
    comment: "Great guy to work with.",
  },
  {
    name: "MG Computing Solution",
    comment: "Great service!",
  },
  {
    name: "Fiverr Client",
    comment: "It was a pleasure and easy to work with Jomardon G.",
  },
  {
    name: "Fiverr Client",
    comment:
      "Thank you so much for the helpful boost! We may work together again in the future.",
  },
  {
    name: "Fiverr Client",
    comment: "Did a fantastic job!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const minDragDistance = 80;

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  /* TOUCH */
  const onTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!startX) return;
    const endX = e.changedTouches[0].clientX;
    handleSwipe(startX, endX);
    setStartX(null);
  };

  /* MOUSE */
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const onMouseUp = (e) => {
    if (!isDragging || startX === null) return;
    handleSwipe(startX, e.clientX);
    setIsDragging(false);
    setStartX(null);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setStartX(null);
  };

  /* SHARED LOGIC */
  const handleSwipe = (start, end) => {
    const distance = start - end;

    if (distance > minDragDistance) nextSlide();
    if (distance < -minDragDistance) prevSlide();
  };

  return (
    <div className="bg-black py-20 px-4">
      <div
        className="max-w-5xl mx-auto relative overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {/* SLIDER */}
        <div
          className="flex transition-transform duration-500 ease-in-out select-none"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div key={index} className="min-w-full px-2 sm:px-4 flex">
              <div
                className="w-full h-full flex flex-col justify-between
                           border border-white/10 rounded-3xl
                           bg-neutral-950/90 backdrop-blur-md
                           p-6 sm:p-10"
              >
                {/* HEADER */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full bg-orange-400 
                                  flex items-center justify-center text-black font-bold"
                  >
                    👤
                  </div>
                  <p className="text-orange-400 font-semibold">{t.name}</p>
                </div>

                {/* CONTENT */}
                <div className="flex-grow">
                  <FaQuoteLeft className="text-white/20 text-2xl mb-3" />
                  <p className="text-white/80 text-sm sm:text-lg leading-relaxed">
                    {t.comment}
                  </p>
                </div>

                {/* FOOTER */}
                <div className="flex justify-end mt-4">
                  <FaQuoteRight className="text-white/20 text-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer
                     bg-black/60 text-white text-2xl
                     px-3 py-2 rounded-full opacity-70 hover:opacity-100 hover:bg-orange-700/80 hover:border-orange-500/90"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer
                     bg-black/60 text-white text-2xl
                     px-3 py-2 rounded-full opacity-70 hover:opacity-100 hover:bg-orange-700/80 hover:border-orange-500/90"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
