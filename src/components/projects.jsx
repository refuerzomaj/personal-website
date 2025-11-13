import React from 'react'
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

const projects = () => {
  return (
    <div className="bg-black" id='projects'>
  <div className="max-w-[1000px] h-full mx-auto grid gap-6 p-6 sm:p-10 lg:p-20">
    {/* Section Title */}
    <h1 className='text-3xl sm:text-5xl font-extrabold 
                      bg-gradient-to-r from-orange-400 via-white to-orange-400
                      text-transparent bg-clip-text drop-shadow-lg'>Projects</h1>

    {/* Responsive Grid Container */}
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8 lg:gap-10">
      
      {/* CARD 1 */}
      <a href="https://rawfoodslowfeeder.com/" target="_blank" rel="noopener noreferrer"><div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image1} alt="The Original Raw Food Slow Feeder" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Woocommerce</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Google Tag Manager</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Google Analytics</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">The Original Raw Food Slow Feeder</h2>
      </div></a>

      {/* CARD 2 */}
      <a href="https://juvimor.com" target="_blank" rel="noopener noreferrer"><div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image2} alt="Juvimor Construction & Trading Services" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">Juvimor Construction & Trading Services</h2>
      </div></a>

      {/* CARD 3 */}
      <a href="https://hsm.aero" target="_blank" rel="noopener noreferrer"><div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image3} alt="HSM Aero" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">HSM Aero</h2>
      </div></a>

      {/* CARD 11 */}
      <div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image11} alt="DPWH Archive" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">React</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Node JS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Express JS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">API</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Tailwind CSS</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">DPWH Archive</h2>
      </div>

      {/* CARD 4 */}
      <a href="http://lcslogistics.com" target="_blank" rel="noopener noreferrer"><div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image4} alt="LCS Logistics & Customs Services" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">LCS Logistics & Customs Services</h2>
      </div></a>

      {/* CARD 10 */}
      <a href="https://wordpress-1091546-4178418.cloudwaysapps.com/" target="_blank" rel="noopener noreferrer"><div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image10} alt="Browser Cache" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">Browser Cache</h2>
      </div></a>

      {/* CARD 5 */}
      <a href="https://mg-computing.com/siteb/" target="_blank" rel="noopener noreferrer"></a>
      <div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image5} alt="Obando Bulacan" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">Obando Bulacan</h2>
      </div>

      {/* CARD 6 */}
      <a href="https://mpm.house" target="_blank" rel="noopener noreferrer"><div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image6} alt="MPM House" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">MPM House</h2>
      </div></a>

      {/* CARD 7 */}
      <a href="https://spotlight-accounting.co.uk" target="_blank" rel="noopener noreferrer"></a>
      <div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image7} alt="Spotlight Accounting" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">Spotlight Accounting</h2>
      </div>

      {/* CARD 8 */}
      <a href="https://keystone-invest.co.uk" target="_blank" rel="noopener noreferrer"><div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image8} alt="Keystone Invest" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">PHP</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Advance Custom Fields</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Custom Theme</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">Kesytone Invest</h2>
      </div></a>

      {/* CARD 9 */}
      <a href="https://agility-outsourcing.co.uk" target="_blank" rel="noopener noreferrer"><div className="w-full max-w-full mx-auto grid gap-6 border p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 cursor-pointer duration-300">
        <img className="rounded-t-3xl w-full object-cover" src={image9} alt="Agility Oustsourcing" />
        <div className="flex flex-wrap gap-3 text-white">
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">WordPress</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">Elementor Pro</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">CSS</p>
          <p className="rounded-full border border-white py-2 px-4 whitespace-nowrap">jQuery</p>
        </div>
        <h2 className="text-2xl text-white font-extrabold">Agility Outsourcing</h2>
      </div></a>
      
    </div>
  </div>
</div>

  )
}

export default projects