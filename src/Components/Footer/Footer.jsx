import React from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <img
            src="/images/logo.png"
            alt="SOCH"
            className="h-12 mb-4 drop-shadow-[0_0_8px_#E6EF3A]"
          />
          <p className="text-sm leading-relaxed">
            <strong>Soch: Kuch Kar Dikhane Ke</strong> is the social initiative club of JECRC Foundation, focused on bringing change through compassion and action.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xl font-semibold text-[#E6EF3A] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[#E6EF3A] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#E6EF3A] transition">About Us</a></li>
            <li><a href="#activities" className="hover:text-[#E6EF3A] transition">Activities</a></li>
            <li><a href="#events" className="hover:text-[#E6EF3A] transition">Upcoming Events</a></li>
            <li><a href="#gallery" className="hover:text-[#E6EF3A] transition">Gallery</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xl font-semibold text-[#E6EF3A] mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 text-[#E6EF3A]" />
              JECRC Foundation, Jaipur, Rajasthan
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#E6EF3A]" />
              sochclub@jecrc.ac.in
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#E6EF3A]" />
             <div className=" flex flex-col">
             Gagan : 8888888888
             </div>
             
            </li>
            <li className="flex gap-4 mt-4 text-[#E6EF3A]">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <Twitter />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <Instagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-white"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Soch Club, JECRC Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
