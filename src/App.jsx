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
import InitiativeDetails from './Pages/InitiativeDetails'; // ✅ Keep this from incoming/main
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AboutUsDetails from './Pages/AboutUsDetails';
import Login from './Components/Admin/Login';
import PrivateRoute from './Components/Admin/PrivateRoute';
import AdminDashboard from './Components/Admin/AdminDashboard';

const Home = () => (
  <>
    <HeroSection />
    <ToastContainer />
    <AboutUs />
    <Initiatives />
    <AboutUsDetails />
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
        <Route path="/login" element={<Login/>} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard/>
            </PrivateRoute> 
          }
        />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/aboutUs" element={<AboutUsDetails />} />
        <Route path="/initiative" element={<InitiativeDetails/>} />
        <Route path="/join-us" element={<JoinUsForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

