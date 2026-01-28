import React from "react";

const about = () => {
  return (
    <div
      className=" bg-black pt-25 pb-10 px-10 z-4 h-full grid gap-10"
      id="about"
    >
      {/*About Me Section*/}
      <div className="max-w-[1000px] mx-auto grid gap-10 leading-7 animate-slide-in-top">
        <h1
          className="text-3xl sm:text-5xl font-extrabold 
                      bg-gradient-to-r from-orange-400 via-white to-orange-400
                      text-transparent bg-clip-text drop-shadow-lg"
        >
          About Me
        </h1>
        <div
          className="border-1 p-6 text-white bg-neutral-950/80 border-white/10 rounded-4xl hover:-translate-y-2 hover:scale-[1.02]
               hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)] hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300"
        >
          <p className=" text-1xl">
            I’m a passionate Web Developer with 3 years of experience, who began
            my journey as a freelancer on Fiverr, creating functional and
            visually engaging websites for clients worldwide. I’ve since worked
            remotely with Agility Outsourcing, a UK-based company, and MG
            Computing as a part-time developer. My expertise lies in WordPress
            and Elementor, including building and customizing WordPress themes
            to meet unique client needs. I also have hands-on experience in
            React JS, developing responsive and dynamic user interfaces. I’m
            continuously enhancing my skills as a developer, driven by a passion
            for clean code, creative design, and crafting seamless digital
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
