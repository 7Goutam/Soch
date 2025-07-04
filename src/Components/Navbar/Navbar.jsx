import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "about" },
    { name: "Initiatives", to: "initiatives" },
    { name: "Events", to: "events" },
    { name: "Gallery", to: "Gallery" },
    { name: "Join Us", to: "join" },
  ];

  const handleGalleryClick = () => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <nav className="bg-[#121212] shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="SOCH Logo"
            className="h-14 drop-shadow-[0_0_8px_#E6EF3A]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link) => {
  if (link.name === "Home") {
    return (
      <RouterLink
        key={link.name}
        to="/"
        className="cursor-pointer text-white hover:text-[#E6EF3A] transition font-medium"
      >
        {link.name}
      </RouterLink>
    );
  } else if (link.name === "Gallery") {
    return (
      <span
        key={link.name}
        onClick={() => navigate("/gallery")}
        className="cursor-pointer text-white hover:text-[#E6EF3A] transition font-medium"
      >
        {link.name}
      </span>
    );
  } else {
    return (
      <ScrollLink
        key={link.to}
        to={link.to}
        smooth={true}
        duration={500}
        className="cursor-pointer text-white hover:text-[#E6EF3A] transition font-medium"
      >
        {link.name}
      </ScrollLink>
    );
  }
})}
          <button
            onClick={() => navigate("/login")}
            className="bg-[#E6EF3A] text-black text-sm px-4 py-2 rounded-full hover:bg-yellow-400 transition font-medium"
          >
            Admin
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black py-2 px-4 shadow-md space-y-2">
          {navLinks.map((link) => {
            if (link.name === "Home") {
              return (
                <RouterLink
                  key={link.name}
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-[#E6EF3A] text-base font-medium"
                >
                  {link.name}
                </RouterLink>
              );
            } else if (link.name === "Gallery") {
              return (
                <span
                  key={link.name}
                  onClick={handleGalleryClick}
                  className="block text-white hover:text-[#E6EF3A] text-base font-medium cursor-pointer"
                >
                  {link.name}
                </span>
              );
            } else {
              return (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white hover:text-[#E6EF3A] text-base font-medium"
                >
                  {link.name}
                </ScrollLink>
              );
            }
          })}
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
            className="w-full bg-[#E6EF3A] text-black py-2 rounded-full hover:bg-yellow-400 transition font-medium"
          >
            Admin Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
