import React from 'react'
import myPhoto from "../assets/myPhoto.png"
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaHtml5, FaCss3, FaPhp, FaReact, FaWordpress, FaElementor, FaSquareGit, FaSquareGithub } from "react-icons/fa6";
import { TbBrandFiverr, TbWorldWww, TbBrandJavascript } from "react-icons/tb";
import { BiLogoGmail, BiLogoJquery } from "react-icons/bi";
import { SiMysql, SiTailwindcss } from "react-icons/si";

const homepage = () => {
  return (
    <div className='m-10 p-10'>
      {/* First Section */}
      <div style={{background: "#140c1c", borderColor: "#2a1454"}} className="max-w-[1200px] border rounded-2xl border-white/40 mx-auto grid xl:grid-cols-8  md:grid-cols-2 gap-6 p-10 md:p-10 md:py-12">
        <div className="grid grid-cols-1 xl:cols-span-3 md:col-span-1 gap-6">
          <div className="w-90 h-90 rounded-full">
            <img
              className="w-[800px] rounded-2xl border-1 bg-neutral-950/80 border-slate-600/40 hover:border-violet-700  bg-blend-color"
              src={myPhoto}
              alt="my photo"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:cols-span-5 md:col-span-1 pb-10">
          <div className="my-auto ml-10 flex-col">
            <div className="py-5 flex justify-start gap-4">
              <a href="https://www.linkedin.com/in/jomardon-gabitanan-6a2989223/" className="rounded-full border-1 border-white p-2.5 hover:bg-violet-700 hover:border-violet-700 hover:text-white transition-colors duration-300"><FaLinkedinIn className="text-white"/></a>
              <a href="https://github.com/refuerzomaj" className="rounded-full border-1 border-white p-2.5 hover:bg-violet-700 hover:border-violet-700 hover:text-white transition-colors duration-300"><FaGithub className="text-white"/></a>
              <a href="https://pro.fiverr.com/s/WE1r77l" className="rounded-full border-1 border-white p-2.5 hover:bg-violet-700 hover:border-violet-700 hover:text-white transition-colors duration-300"><TbBrandFiverr className="text-white"/></a>
              <a href="http://" className="rounded-full border-1 border-white p-2.5 hover:bg-violet-700 hover:border-violet-700 hover:text-white transition-colors duration-300"><TbWorldWww className="text-white"/></a>
              <a href="mailto:gabitanan.jomardon@gmail.com" className="rounded-full border-1 border-white p-2.5 hover:bg-violet-700 hover:border-violet-700 hover:text-white transition-colors duration-300"><BiLogoGmail className="text-white"/></a>
            </div>
            <h1 className="text-2xl font-bold text-white pb-2">Hi,</h1>
            <TypeAnimation
              sequence={[
                "I'm Jomardon Gabitanan",
                1000,
                "I'm a Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[40px] font-bold bg-primary-color text-white"
            />
            <div className="pt-8">
              <a href="http://" className="mt-200 text-white font-bold rounded-full border-1 border-white py-3 px-5 hover:bg-violet-700 hover:border-violet-700 transition-colors duration-300">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default homepage