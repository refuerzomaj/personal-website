import React from 'react'
import { TypeAnimation } from "react-type-animation";
import { FaHtml5, FaCss3, FaPhp, FaReact, FaWordpress, FaElementor, FaSquareGit, FaSquareGithub } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoJquery } from "react-icons/bi";
import { SiMysql, SiTailwindcss, SiGoogleanalytics, SiGoogletagmanager } from "react-icons/si";

const skills = () => {
  return (
    <div className='bg-gradient-to-tl from-gray-900 via-black to-gray-900'>
        <div className="max-w-[1000px] mx-auto h-full animate-slide-in-bottom flex flex-col items-center justify-items-start p-20">
          <div className='flex flex-col items-start justify-items-start w-full'>
            <h2 className="text-3xl sm:text-5xl font-extrabold 
                     bg-gradient-to-r from-orange-400 via-white to-orange-400
                     text-transparent bg-clip-text drop-shadow-lg">My Skills</h2>
          </div>
            
    
            <div className="h-full p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center gap-8 max-w-7xl mx-auto">
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/90 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <FaHtml5 className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    HTML5
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <FaCss3 className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    CSS3
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <TbBrandJavascript className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Javascript
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <BiLogoJquery className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    JQuery
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <TbBrandJavascript className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Javascript
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <FaPhp className="text-white text-9xl lg:text-7xlt-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    PHP
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <SiMysql className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    MySQL
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <FaSquareGit className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Git
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <FaSquareGithub className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Github
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <FaWordpress className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Wordpress
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <FaElementor className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Elementor Pro
                  </div>
                </div>
    
                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <FaReact className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    React
                  </div>
                </div>

                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <SiTailwindcss className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Tailwindcss
                  </div>
                </div>

                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <SiGoogletagmanager className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Google Tag Manager
                  </div>
                </div>

                <div className="group relative w-45 h-45 lg:w-32 lg:h-32 bg-neutral-950/70 backdrop-blur-md rounded-xl p-6 border border-slate-900/40 shadow-lg text-white flex flex-col items-center justify-center hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer hover:p-1 lg:hover:p-3 transition">
                  <SiGoogleanalytics className="text-white text-9xl lg:text-7xl mb-2" />
                  <span className="text-base font-semibold">90%</span>
                  <div className="absolute bottom-full mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                    Google Analytics
                  </div>
                </div>
    
              </div>
            </div>
        </div>
    </div>
  )
}

export default skills