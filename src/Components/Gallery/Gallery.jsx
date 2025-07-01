import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/CLG0633.jpg",
    title: "One Act of Kindness",
    subtitle: "One Saved Life",
  },
  {
    image: "/images/CLG-4428.jpg",
    title: "Joyful Moments",
    subtitle: "Shared at Orphanage",
  },
  {
    image: "/images/CLG_2264.jpg",
    title: "Warmth Delivered",
    subtitle: "Vastra Samman",
  },
  {
    image: "/images/FF_00258.jpg",
    title: "Clean India Drive",
    subtitle: "Together for a Better Tomorrow",
  },
];

const GalleryCarousel = () => {
  return (
    <section id="gallery" className="bg-gradient-to-r from-[#FFF9DB] to-[#EDEDED] py-20 px-6 text-white"> {/* ✅ Dark theme background */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#1A1A1A]">
          Glimpses of <span className="text-[#E6EF3A]">Impact</span> {/* ✅ Yellow brand color */}
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          A look at our impactful moments captured in time.
        </p>

        <div className="rounded-xl overflow-hidden shadow-xl bg-[#0A0A0A]"> {/* ✅ Darker background behind Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            loop
            className="rounded-xl custom-swiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-2xl font-bold">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300">{slide.subtitle}</p> {/* ✅ Softer text tone */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       <div className="flex justify-end">
       <button className="mt-10 bg-[#E6EF3A] text-black px-6 py-3 rounded-lg hover:bg-yellow-400 font-semibold shadow-lg transition-all flex gap-2">
          View Full Gallery
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* ✅ Gallery view icon */}
            <path d="M15 3h6v6" />
            <path d="M10 14L21 3" />
            <path d="M21 21H3V3" />
          </svg>
        </button>
       </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
