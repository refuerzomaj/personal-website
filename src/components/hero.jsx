import { useEffect, useRef, useState } from "react";
import myPhoto from "../assets/myPhoto.png"
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaHtml5, FaCss3, FaPhp, FaReact, FaWordpress, FaElementor, FaSquareGit, FaSquareGithub } from "react-icons/fa6";
import { TbBrandFiverr, TbWorldWww, TbBrandJavascript } from "react-icons/tb";
import { BiLogoGmail, BiLogoJquery } from "react-icons/bi";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Counter from "./counter";

const hero = () => {

    return (
        <div className='bg-gradient-to-tr from-gray-900 via-black py-40 to-gray-900 h-full z-5'>
            <div className="max-w-[1200px] mx-auto grid gap-6 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-5 xl:grid-cols-2 lg:py-0 xl:py-20">
                {/* Left Section */}
                <div className="order-2 md:order-1 animate-slide-in-left px-10 col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-1 grid grid-cols-1 items-center h-100 rows-start-2">
                    <div className='grid grid-cols-1 gap-4'>
                        <h1 className="font-bold text-white pb-2 text-xl sm:text-2xl md:text-2xl xl:text-3xl">Hi, I am Jomardon</h1>
                        <h1 className="font-extrabold 
                        bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400
                        text-transparent bg-clip-text drop-shadow-lg text-3xl sm:text-2xl md:text-4xl xl:text-5xl">
                            <TypeAnimation
                                        sequence={[
                                            "Web Developer",
                                            1000,
                                            "React Developer",
                                            1000,
                                            "Freelancer",
                                            1000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}/>
                        </h1>
                        <p className='text-white text-[20px] leading-8 sm:w-full md:w-110 xl:w-130'>I specialize in creating functional and scalable web solutions that elevate user experiences and drive results.</p>
                    </div>
                    <div className="flex justify-start gap-4 items-center h-full ">
                        <a href="https://www.linkedin.com/in/jomardon-gabitanan-6a2989223/" className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"><FaLinkedinIn className="text-white"/></a>
                        <a href="https://github.com/refuerzomaj" className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"><FaGithub className="text-white"/></a>
                        <a href="https://pro.fiverr.com/s/WE1r77l" className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"><TbBrandFiverr className="text-white"/></a>
                        <a href="mailto:gabitanan.jomardon@gmail.com" className="rounded-full border-1 w-10 h-10 border-white p-2.5 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors duration-300"><BiLogoGmail className="text-white"/></a>
                        <a href="http://" className="flex items-center justify-center gap-2 text-white rounded-full border-1 border-white py-4 px-9 hover:bg-orange-500 hover:border-orange-500 transition-colors duration-300">Download CV <PiDownloadSimpleBold className="text-white"/></a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="order-1 md:order-2 animate-slide-in-right col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-1 flex justify-center rows-start-1">
                    <div className="w-100 h-100 rounded-full">
                        <img
                            className="w-[800px] rounded-3xl border-2 bg-neutral-950/80 border-slate-600/40 hover:border-orange-600 hover:border-2 hover:cursor-pointer duration-500 bg-blend-color md:w-[300px] lg:w-[500px]"
                            src={myPhoto}
                            alt="my photo"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-10 gap-5 flex flex-row flex-wrap justify-start animate-slide-in-left">
                {/* First */}
                <div className="flex justify-start items-center gap-4 order-1">
                    <Counter className="text-4xl sm:text-6xl font-bold text-orange-500" targetNumber={3} />
                    <p className="text-white border-l-2 pl-4">Years of<br />Experience</p>
                </div>

                {/* Second */}
                <div className="flex justify-start items-center gap-4 order-2">
                    <Counter className="text-4xl sm:text-6xl font-bold text-orange-500" targetNumber={10} />
                    <p className="text-white border-l-2 pl-4">Projects<br />Completed</p>
                </div>

                {/* Third (moves to end on mobile via order) */}
                <div className="flex justify-start items-center gap-4 order-3 sm:order-3">
                    <Counter className="text-4xl sm:text-6xl font-bold text-orange-500" targetNumber={10} />
                    <p className="text-white border-l-2 pl-4">Clients<br />Worldwide</p>
                </div>
            </div>

        </div>
    )
}

export default hero