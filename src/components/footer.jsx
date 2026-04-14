import React from "react";
import Testimonials from "./testimonials";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { BiLogoGmail } from "react-icons/bi";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">JG</h2>
            <p className="text-sm text-gray-100 leading-relaxed">
              I’m a Web Developer based in the Philippines, specializing in
              WordPress, Elementor, and React. I help businesses create modern,
              responsive, and high-performing websites.
            </p>
          </div>

          {/* Quick Links */}
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

          {/* Social + Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>

            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/in/jomardon-gabitanan-6a2989223/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaLinkedinIn className="text-white" />
              </a>

              <a
                href="https://github.com/refuerzomaj"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <FaGithub className="text-white" />
              </a>

              <a
                href="https://pro.fiverr.com/s/WE1r77l"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <TbBrandFiverr className="text-white" />
              </a>

              <a
                href="https://www.upwork.com/freelancers/~01457dbad7acf5e753"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <SiUpwork className="text-white" />
              </a>

              <a
                href="mailto:gabitanan.jomardon@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 transition"
              >
                <BiLogoGmail className="text-white" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="text-lg  text-white mb-4">
                <h3 className="font-semibold pb-1">Phone Number</h3>
                <p>
                  <a
                    href="tel:+639123456789"
                    className="text-[16px] text-gray-300 hover:text-white"
                  >
                    +63 977 754 7404
                  </a>
                </p>
              </div>

              <div className="text-lg  text-white mb-4">
                <h3 className="font-semibold pb-1">Address</h3>
                <p>
                  <a
                    href="https://www.google.com/maps?q=Taguig+Philippines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] text-gray-300 hover:text-white"
                  >
                    Taguig City, Philippines
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-100">
          © {new Date().getFullYear()} JG. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
