import React from "react";
import Homepage from "./components/herobanner.jsx";
import Hero from "./components/hero.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Educations from "./components/education.jsx";
import Certificate from "./components/certificate.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Testimonials from "./components/testimonials.jsx";
import Contact from "./components/contactform.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Educations />
      <Certificate />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
