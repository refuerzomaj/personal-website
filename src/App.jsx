import React from 'react'
import Homepage from './components/herobanner.jsx'
import Hero from './components/hero.jsx'
import Header from './components/header.jsx'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'

const App = () => {
  return (
    <div >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default App