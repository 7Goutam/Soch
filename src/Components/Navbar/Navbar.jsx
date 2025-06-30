// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Events", to: "events" },
    { name: "Gallery", to: "gallery" },
    { name: "Join Us", to: "join" }
  ];

  return (
    <nav className="bg-[#0A0A0A] shadow-md fixed w-full z-50 top-0 space-betwee" >
      <div className="max-w-7xl mx-auto px-16 flex items-center justify-between">
        {/* Logo */}
        <img src="/images/logo.png" className="h-15 drop-shadow-[0_0_8px_#E6EF3A]" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center py-5 ">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-white hover:text-blue-600 transition"
            >
              {link.name}
            </ScrollLink>
          ))}
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white text-sm px-2 py-1.5 rounded-4xl hover:bg-blue-700 transition"
          >
            Admin 
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="block py-2 text-gray-700 hover:text-blue-600 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Admin Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
