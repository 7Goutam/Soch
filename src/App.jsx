import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'

import Footer from './Components/Footer/Footer'
import HeroSection from './Components/Hero/Hero'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Footer/>
    </div>
    </>
  )
}

export default App