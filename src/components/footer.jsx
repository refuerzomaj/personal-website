import React from "react";
import Testimonials from "./testimonials";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">JG</h2>
            <p className="mt-3 text-sm text-gray-400">
              Building modern and responsive web applications with React and
              Tailwind CSS.
            </p>
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contactform" className="hover:text-white transition">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} JG. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
