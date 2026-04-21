import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Form from "./popupForm";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy: highlight active menu when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "testimonials",
        "contactform",
      ];
      const scrollY = window.scrollY + 100; // offset for header height

      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll when clicking a menu item
  const handleClick = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // also close mobile menu when clicked
  };

  // Shared link style for desktop
  const linkClass = (id) =>
    `relative cursor-pointer text-[14px] font-medium transition-all duration-300 
     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-orange-500 
     after:transition-transform after:duration-300 after:origin-left
     ${
       active === id
         ? "text-orange-500 after:scale-x-100"
         : "text-white after:scale-x-0 hover:text-orange-400 hover:after:scale-x-100"
     }`;
  return (
    <header>
      {/* Top Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-4 transition-all duration-500 ${
          scrolled ? "bg-black/30 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white hover:text-orange-500 cursor-pointer">
          JG
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10 items-center">
          <a
            onClick={() => handleClick("home")}
            className={linkClass("home")}
            href="#home"
          >
            HOME
          </a>
          <a
            onClick={() => handleClick("about")}
            className={linkClass("about")}
            href="#about"
          >
            ABOUT ME
          </a>
          <a
            onClick={() => handleClick("skills")}
            className={linkClass("skills")}
            href="#skills"
          >
            SKILLS
          </a>
          <a
            onClick={() => handleClick("projects")}
            className={linkClass("projects")}
            href="#projects"
          >
            PROJECTS
          </a>
          <a
            onClick={() => handleClick("testimonials")}
            className={linkClass("testimonials")}
            href="#testimonials"
          >
            TESTIMONIALS
          </a>
          <a
            onClick={() => handleClick("contactform")}
            className={linkClass("contactform")}
            href="#contactForm"
          >
            CONTACT
          </a>
          <a
            onClick={() => setIsOpen(true)}
            className="font-bold py-3 px-7 cursor-pointer text-white bg-transparent border-1 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
            href="#hireMe"
          >
            HIRE ME!
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-2xl text-white hover:text-orange-500 cursor-pointer"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-neutral-900 text-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="text-xl font-bold text-white cursor-pointer">
            JG
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-orange-500 cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col px-4 py-6 space-y-5">
          <a
            onClick={() => handleClick("home")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "home"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
            href="#home"
          >
            HOME
          </a>
          <a
            onClick={() => handleClick("about")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "about"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
            href="#about"
          >
            ABOUT ME
          </a>
          <a
            onClick={() => handleClick("skills")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "skills"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
            href="#skills"
          >
            SKILLS
          </a>
          <a
            onClick={() => handleClick("projects")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "projects"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
            href="#projects"
          >
            PROJECTS
          </a>
          <a
            onClick={() => handleClick("testimonials")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "testimonials"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
            href="#testimonials"
          >
            TESTIMONIALS
          </a>
          <a
            onClick={() => handleClick("contactform")}
            className={linkClass("contact")}
            href="#contactForm"
          >
            CONTACT
          </a>
          <a
            onClick={() => {
              setIsOpen(true);
              setMenuOpen(false);
            }}
            className="font-bold py-3 px-7 cursor-pointer text-center text-white bg-transparent border-1 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
            href="#hireMe"
          >
            HIRE ME!
          </a>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/90 opacity-40 z-40 lg:hidden"
        ></div>
      )}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 flex items-center justify-center transition-opacity duration-300 z-100 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Popup Box */}
        <div
          className={`bg-gray-200 w-[90%] border-black/50 border-1 max-w-lvh rounded-3xl shadow-xl transform transition-all duration-300 ${
            isOpen
              ? "translate-x-0 translate-y-0 opacity-100 scale-100"
              : "-translate-x-full -translate-y-full lg:translate-x-full lg:-translate-y-full opacity-0 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex flex-col">
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-4 text-2xl hover:cursor-pointer"
            >
              <IoClose className="text-white" />
            </button>
            <Form />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
