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
import { Helmet } from "react-helmet-async";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Jomardon Gabitanan | Web Developer Philippines</title>
        <meta
          name="description"
          content="Jomardon Gabitanan is a freelance web developer in the Philippines specializing in React and WordPress development."
        />
      </Helmet>
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
    </>
  );
};

export default App;
