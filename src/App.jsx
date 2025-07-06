import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/Hero/Hero';
import AboutUs from './Components/Impact/Impact';
import Gallery from './Components/Gallery/Gallery';
import Initiatives from './Components/Initiatives/Initiatives'; 
import GalleryPage from './Pages/GalleryDetails';
import ScrollToTop from './Components/ScrollToTop';
import JoinUsForm from './Components/JoinUsForm/JoinUsForm';
import Initiative from './Pages/Initiative'; // ✅ Keep this from incoming/main

const Home = () => (
  <>
    <HeroSection />
    <AboutUs />
    <Initiatives />
    <Gallery />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/join-us" element={<JoinUsForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

