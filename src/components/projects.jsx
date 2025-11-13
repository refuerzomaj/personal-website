import React, { useState } from "react";
import image1 from "../assets/rawfoodslowfeeder.png";
import image2 from "../assets/juvimor.png";
import image3 from "../assets/hsm.png";
import image4 from "../assets/lcslogistics.png";
import image5 from "../assets/obando.png";
import image6 from "../assets/mpm.png";
import image7 from "../assets/spotlight.png";
import image8 from "../assets/keystone.png";
import image9 from "../assets/agility.png";
import image10 from "../assets/browsercache.png";
import image11 from "../assets/dpwh.png";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const cards = [
    {
      image: image1,
      title: "The Original Raw Food Slow Feeder",
      link: "https://rawfoodslowfeeder.com/",
      tags: ["WordPress", "Elementor Pro", "Woocommerce", "CSS", "jQuery", "Google Tag Manager", "Google Analytics"],
    },
    {
      image: image2,
      title: "Juvimor Construction & Trading Services",
      link: "https://juvimor.com",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
    },
    {
      image: image3,
      title: "HSM Aero",
      link: "https://hsm.aero",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
    },
    {
      image: image11,
      title: "DPWH Archive",
      tags: ["React", "Node JS", "Express JS", "API", "Tailwind CSS"],
    },
    {
      image: image4,
      title: "LCS Logistics & Customs Services",
      link: "http://lcslogistics.com",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
    },
    {
      image: image10,
      title: "Browser Cache",
      link: "https://wordpress-1091546-4178418.cloudwaysapps.com/",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
    },
    {
      image: image5,
      title: "Obando Bulacan",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
    },
    {
      image: image6,
      title: "MPM House",
      link: "https://mpm.house",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
    },
    {
      image: image7,
      title: "Spotlight Accounting",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
    },
    {
      image: image8,
      title: "Keystone Invest",
      link: "https://keystone-invest.co.uk",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery", "PHP", "Advance Custom Fields", "Custom Theme"],
    },
    {
      image: image9,
      title: "Agility Outsourcing",
      link: "https://agility-outsourcing.co.uk",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
    },
  ];

  // show only 6 initially
  const visibleCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div className="bg-black" id="projects">
      <div className="max-w-[1000px] mx-auto grid gap-6 p-6 sm:p-10 lg:p-20">
        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-orange-400 text-transparent bg-clip-text drop-shadow-lg">
          Projects
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {visibleCards.map((card, index) => (
            <a
              key={index}
              href={card.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
                <img
                  className="rounded-t-3xl w-full object-cover"
                  src={card.image}
                  alt={card.title}
                />
                <div className="flex flex-wrap gap-3 text-white">
                  {card.tags.map((tag, i) => (
                    <p
                      key={i}
                      className="rounded-full border border-white py-2 px-4 whitespace-nowrap"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <h2 className="text-2xl text-white font-extrabold">{card.title}</h2>
              </div>
            </a>
          ))}
        </div>

        {/* See More / See Less Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 hover:from-orange-300 hover:via-orange-500 hover:to-orange-700 transition-all duration-300"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
