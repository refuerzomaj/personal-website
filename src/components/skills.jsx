import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaHtml5,
  FaCss3,
  FaPhp,
  FaReact,
  FaWordpress,
  FaElementor,
  FaSquareGit,
  FaSquareGithub,
} from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoJquery } from "react-icons/bi";
import {
  SiMysql,
  SiTailwindcss,
  SiGoogleanalytics,
  SiGoogletagmanager,
} from "react-icons/si";

const skillsData = [
  {
    name: "HTML5",
    level: "90%",
    icon: FaHtml5,
    description: "Semantic HTML, accessibility, SEO-friendly structure",
  },
  {
    name: "CSS3",
    level: "90%",
    icon: FaCss3,
    description: "Responsive layouts, Flexbox, Grid, animations",
  },
  {
    name: "JavaScript",
    level: "90%",
    icon: TbBrandJavascript,
    description: "ES6+, DOM manipulation, async logic, APIs",
  },
  {
    name: "jQuery",
    level: "90%",
    icon: BiLogoJquery,
    description: "DOM traversal, animations, legacy support",
  },
  {
    name: "PHP",
    level: "90%",
    icon: FaPhp,
    description: "Backend logic, WordPress development, APIs",
  },
  {
    name: "MySQL",
    level: "90%",
    icon: SiMysql,
    description: "Database design, queries, optimization",
  },
  {
    name: "Git",
    level: "90%",
    icon: FaSquareGit,
    description: "Version control, branching, collaboration",
  },
  {
    name: "GitHub",
    level: "90%",
    icon: FaSquareGithub,
    description: "Repositories, CI workflows, team collaboration",
  },
  {
    name: "WordPress",
    level: "90%",
    icon: FaWordpress,
    description: "Custom themes, plugins, WooCommerce",
  },
  {
    name: "Elementor Pro",
    level: "90%",
    icon: FaElementor,
    description: "Advanced layouts, dynamic content, forms",
  },
  {
    name: "React",
    level: "90%",
    icon: FaReact,
    description: "Components, hooks, state management",
  },
  {
    name: "Tailwind CSS",
    level: "90%",
    icon: SiTailwindcss,
    description: "Utility-first styling, responsive UI",
  },
  {
    name: "Google Tag Manager",
    level: "90%",
    icon: SiGoogletagmanager,
    description: "Tag deployment, analytics tracking",
  },
  {
    name: "Google Analytics",
    level: "90%",
    icon: SiGoogleanalytics,
    description: "Traffic analysis, conversion tracking",
  },
];

const SkillModal = ({ skill, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (skill) {
      setTimeout(() => setVisible(true), 10); // OPEN delay
    }
  }, [skill]);

  if (!skill) return null;

  const Icon = skill.icon;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 flex items-center justify-center transition-opacity duration-300
                  ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={() => {
        setVisible(false);
        setTimeout(onClose, 300); // CLOSE delay
      }}
    >
      <div
        className="relative bg-neutral-950 border border-orange-500/40 
                      rounded-3xl p-10 max-w-md w-full text-center"
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 
                     bg-black text-white rounded-full border
                     border-white/20 cursor-pointer hover:bg-orange-500 transition"
        >
          ✕
        </button>

        <Icon className="text-orange-400 text-8xl mx-auto mb-4" />

        <h2 className="text-3xl font-extrabold text-white">{skill.name}</h2>

        <p className="text-orange-400 text-xl font-bold mt-2">
          Proficiency: {skill.level}
        </p>

        <p className="text-white/80 mt-4 text-sm">{skill.description}</p>
      </div>
    </div>
  );
};

const SkillCard = ({ skill, onClick }) => {
  const Icon = skill.icon;

  return (
    <div
      onClick={() => onClick(skill)}
      className="group relative w-45 h-45 lg:w-32 lg:h-32 
                 bg-neutral-950/90 backdrop-blur-md rounded-xl p-6 
                 border border-slate-900/40 shadow-lg text-white 
                 flex flex-col items-center justify-center
                 hover:-translate-y-2 hover:scale-[1.02]
                 hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)]
                 hover:bg-orange-700/80 hover:border-orange-500/90
                 cursor-pointer transition"
    >
      <Icon className="text-white text-9xl lg:text-7xl mb-2" />
      <span className="text-base font-semibold">{skill.level}</span>

      {/* Tooltip */}
      <div
        className="absolute bottom-full mb-2 px-3 py-1 text-sm 
                      text-white bg-black rounded opacity-0 
                      group-hover:opacity-100 transition whitespace-nowrap"
      >
        {skill.name}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = React.useState(null);

  return (
    <div
      className="bg-gradient-to-tl from-gray-900 via-black to-gray-900"
      id="skills"
    >
      <div className="max-w-[1000px] mx-auto p-20">
        <h2
          className="text-3xl sm:text-5xl font-extrabold 
                     bg-gradient-to-r from-orange-400 via-white to-orange-400
                     text-transparent bg-clip-text"
        >
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} onClick={setActiveSkill} />
          ))}
        </div>
      </div>

      <SkillModal skill={activeSkill} onClose={() => setActiveSkill(null)} />
    </div>
  );
};

export default Skills;
