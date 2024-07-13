import React from 'react'
import Home from './components/Home'
import NavBar from './components/NavBar'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Internship from './components/Internship'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Internship />
      <Contact />
      <Footer />
    </div>
  )
}

export default App