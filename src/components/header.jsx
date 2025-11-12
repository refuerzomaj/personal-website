import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="" >
      <div className={` max-w-full mx-auto px-10 py-4 flex justify-between items-center fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md border-b-1" : "bg-transparent py-4"
      }`}>
        {/* Logo */}
        <div className={`text-2xl font-bold hover:text-orange-500 text-white`}>JG</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 justify-start items-center">
          <a href="#home" className={`hover:text-orange-500 text-white`}>Home</a>
          <a href="#about" className={`hover:text-orange-500 text-white`}>About Me</a>
          <a href="#skills" className={`hover:text-orange-500 text-white`}>Skills</a>
          <a href="#services" className={`hover:text-orange-500 text-white`}>Projects</a>
          <a href="#contact" className={`font-bold py-3 px-7 rounded-full text-white bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 hover:from-orange-300 hover:via-orange-500 hover:to-orange-700 transition-colors duration-300 duration-500`}>Hire Me!</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl text-orange-600 hover:cursor-pointer"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <span className="text-xl font-bold text-orange-600">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-orange-600 hover:cursor-pointer">
            <FaTimes />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col px-4 py-4 space-y-4">
          <a href="#home" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">Contact</a>
        </nav>
      </div>

      {/* Optional: Overlay behind menu */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
        ></div>
      )}
    </header>
  )
}

export default header