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
import image12 from "../assets/jesus-christ-bible.png";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const cards = [
    {
      image: image12,
      title: "Jesus Christ & Bible",
      link: "https://refuerzomaj.github.io/Jesus-Christ-Bible/",
      description: "Single-page website about Jesus Christ and the Bible.",
      tags: ["React", "Tailwind CSS", "Figma", "Git"],
      category: "react",
    },
    {
      image: image2,
      title: "Juvimor Construction & Trading Services",
      link: "https://juvimor.com",
      description:
        "A corporate website built with WordPress and Elementor Pro, focused on clean layout, performance, and responsive design.",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
      category: "wordpress",
    },
    {
      image: image3,
      title: "HSM Aero",
      link: "https://hsm.aero",
      description:
        "Aviation-focused website showcasing services and company profile with a modern UI and optimized performance.",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
      category: "wordpress",
    },
    {
      image: image11,
      title: "DPWH Archive",
      description:
        "Document archiving system using React, Node.js, and Express.",
      tags: ["React", "Node JS", "Express JS", "API"],
      category: "react",
    },
    {
      image: image4,
      title: "LCS Logistics",
      link: "http://lcslogistics.com",
      description:
        "Logistics company website designed for clarity, accessibility, and ease of navigation across devices.",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
      category: "wordpress",
    },
    {
      image: image10,
      title: "Browser Cache",
      link: "https://wordpress-1091546-4178418.cloudwaysapps.com/",
      description:
        "A WordPress-based demo project focusing on cache behavior, optimization, and performance testing.",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
      category: "wordpress",
    },
    {
      image: image5,
      title: "Obando Bulacan",
      description:
        "A local government website project highlighting tourism, announcements, and public information.",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
      category: "wordpress",
    },
    {
      image: image6,
      title: "MPM House",
      link: "https://mpm.house",
      description:
        "Real estate website showcasing property listings with clean visuals and responsive layout.",
      tags: ["WordPress", "Elementor Pro"],
      category: "wordpress",
    },
    {
      image: image7,
      title: "Spotlight Accounting",
      description:
        "Accounting firm website with a professional look, clear service structure, and contact-focused design.",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
      category: "wordpress",
    },
    {
      image: image8,
      title: "Keystone Invest",
      link: "https://keystone-invest.co.uk",
      description:
        "Custom WordPress theme using ACF and PHP for flexible content management and scalability.",
      tags: [
        "WordPress",
        "Elementor Pro",
        "CSS",
        "jQuery",
        "PHP",
        "Advance Custom Fields",
        "Custom Theme",
      ],
      category: "wordpress",
    },
    {
      image: image9,
      title: "Agility Outsourcing",
      link: "https://agility-outsourcing.co.uk",
      description:
        "Corporate outsourcing website focused on branding consistency and lead generation.",
      tags: ["WordPress", "Elementor Pro", "CSS", "jQuery"],
      category: "wordpress",
    },
  ];

  // ✅ FILTER LOGIC
  const filteredCards =
    activeTab === "all"
      ? cards
      : cards.filter((card) => card.category === activeTab);

  const visibleCards = showAll ? filteredCards : filteredCards.slice(0, 4);

  const openModal = (card) => {
    setSelectedProject(card);
    setTimeout(() => setModalVisible(true), 300);
  };

  const closeModal = () => {
    setModalVisible(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="bg-black" id="projects">
      <div className="max-w-[1150px] mx-auto grid gap-6 p-6 sm:p-10 lg:p-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-orange-400 text-transparent bg-clip-text">
          Projects
        </h2>

        {/* ✅ TABS */}
        <div className="flex gap-4 justify-center flex-wrap">
          {["all", "wordpress", "react"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false); // reset pagination
              }}
              className={`px-4 py-2 rounded-full capitalize border transition ${
                activeTab === tab
                  ? "bg-orange-500 text-white border-orange-500"
                  : "text-white border-white/20 hover:bg-orange-500/20 hover:cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* PROJECT LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              onClick={() => openModal(card)}
              className="w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 
              border-white/10 rounded-4xl cursor-pointer duration-300
              hover:-translate-y-2 hover:scale-[1.02]
              hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)]
              hover:bg-orange-700/80 hover:border-orange-500/90"
            >
              <img
                className="rounded-t-3xl w-full object-cover"
                src={card.image}
                alt={card.title}
              />

              {/* <div className="flex flex-wrap gap-3 text-white">
                {card.tags.map((tag, i) => (
                  <p
                    key={i}
                    className="rounded-full border border-white py-2 px-4"
                  >
                    {tag}
                  </p>
                ))}
              </div> */}

              <h2 className="text-2xl text-white font-extrabold">
                {card.title}
              </h2>
            </div>
          ))}
        </div>

        {/* SEE MORE */}
        {filteredCards.length > 4 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full text-white font-semibold
              bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300
              hover:from-orange-300 hover:to-orange-700 transition hover:cursor-pointer"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70
          ${modalVisible ? "opacity-100" : "opacity-0"} transition`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-neutral-950 border border-slate-600/40 rounded-4xl p-6 max-w-3xl w-full mx-6
            ${modalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"} transition`}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-3xl mb-6"
            />

            <h2 className="text-3xl font-extrabold text-white mb-2">
              {selectedProject.title}
            </h2>

            <div className="flex flex-wrap gap-3 text-white py-5">
              {selectedProject.tags.map((tag, i) => (
                <p
                  key={i}
                  className="rounded-full border border-white px-4 py-2"
                >
                  {tag}
                </p>
              ))}
            </div>

            <p className="text-white/80 mb-6">{selectedProject.description}</p>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-500"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
