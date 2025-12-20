import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

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
        "contact",
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
    `relative cursor-pointer font-medium transition-all duration-300 
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
          scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-white hover:text-orange-500 cursor-pointer">
          JG
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center">
          <a onClick={() => handleClick("home")} className={linkClass("home")}>
            Home
          </a>
          <a
            onClick={() => handleClick("about")}
            className={linkClass("about")}
          >
            About Me
          </a>
          <a
            onClick={() => handleClick("skills")}
            className={linkClass("skills")}
          >
            Skills
          </a>
          <a
            onClick={() => handleClick("projects")}
            className={linkClass("projects")}
          >
            Projects
          </a>
          <a
            onClick={() => handleClick("testimonials")}
            className={linkClass("testimonials")}
          >
            Testimonials
          </a>
          <a
            onClick={() => handleClick("contactform")}
            className="font-bold py-3 px-7 rounded-full cursor-pointer text-white bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 hover:from-orange-300 hover:via-orange-500 hover:to-orange-700 transition-colors duration-300"
          >
            Contact Me!
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl text-orange-500 cursor-pointer"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-neutral-900 text-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <span className="text-xl font-bold text-orange-500 cursor-pointer">
            Menu
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
          >
            Home
          </a>
          <a
            onClick={() => handleClick("about")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "about"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
          >
            About Me
          </a>
          <a
            onClick={() => handleClick("skills")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "skills"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
          >
            Skills
          </a>
          <a
            onClick={() => handleClick("projects")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "projects"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
          >
            Projects
          </a>
          <a
            onClick={() => handleClick("testimonials")}
            className={`cursor-pointer transition-colors duration-300 ${
              active === "testimonials"
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-400"
            }`}
          >
            Testimonials
          </a>
          <a
            onClick={() => handleClick("contactform")}
            className="cursor-pointerfont-bold py-3 px-5 text-center rounded-full bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 hover:from-orange-300 hover:via-orange-500 hover:to-orange-700 transition-colors duration-300"
          >
            Contact Me!
          </a>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;
