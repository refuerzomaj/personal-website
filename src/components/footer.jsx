import React from "react";
import Testimonials from "./testimonials";
import {
  FaLinkedinIn,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaPhp,
  FaReact,
  FaWordpress,
  FaElementor,
  FaSquareGit,
  FaSquareGithub,
} from "react-icons/fa6";
import { TbBrandFiverr, TbWorldWww, TbBrandJavascript } from "react-icons/tb";
import { BiLogoGmail, BiLogoJquery } from "react-icons/bi";
import { SiUpwork } from "react-icons/si";

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
            <div className="flex justify-start gap-4 h-full ">
              <a
                href="https://www.linkedin.com/in/jomardon-gabitanan-6a2989223/"
                target="_blank"
                className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a
                href="https://github.com/refuerzomaj"
                target="_blank"
                className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
              >
                <FaGithub className="text-white" />
              </a>
              <a
                href="https://pro.fiverr.com/s/WE1r77l"
                target="_blank"
                className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
              >
                <TbBrandFiverr className="text-white" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01457dbad7acf5e753"
                target="_blank"
                className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
              >
                <SiUpwork className="text-white" />
              </a>
              <a
                href="mailto:gabitanan.jomardon@gmail.com"
                target="_blank"
                className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"
              >
                <BiLogoGmail className="text-white" />
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
