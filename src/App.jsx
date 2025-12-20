import React from "react";
import Homepage from "./components/herobanner.jsx";
import Hero from "./components/hero.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Testimonials from "./components/testimonials.jsx";
import Contact from "./components/contactform.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;
