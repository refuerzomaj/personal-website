import React from "react";
import Hero from "./sections/hero.jsx";
import Header from "./components/header.jsx";
import About from "./sections/about.jsx";
import Educations from "./sections/education.jsx";
import Certificate from "./sections/certificate.jsx";
import Skills from "./sections/skills.jsx";
import Projects from "./sections/projects.jsx";
import Testimonials from "./sections/testimonials.jsx";
import Contact from "./sections/contactform.jsx";
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
