import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/Hero/Hero'
import Gallery from './Components/Gallery/Gallery'

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Gallery/>
      <Footer/>

    </div>
    </>
  )
}

export default App