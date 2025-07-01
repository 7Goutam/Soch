import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/CLG0633.jpg",
    caption: "Spreading Smiles through Food Donation",
  },
  {
    image: "/images/CLG-4428.jpg",
    caption: "Vastra Samman — Dignity through Clothing",
  },
  {
    image: "/images/FF_00258.jpg",
    caption: "Orphanage Visit — Sharing Joy and Time",
  },
  {
    image: "/images/CLG_2264.jpg",
    caption: "Cleanliness Drive — Together for a Better Tomorrow",
  },
];

const HeroSlider = () => {
  return (
    <section id="home" className="relative h-132 w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 1500 }}
        effect="fade"
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Centered Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
                <div className="mb-10">
                  <h1 className="text-6xl md:text-7xl font-bold tracking-wide text-[#E6EF3A] drop-shadow-yellow-500">
                    SOCH
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-white font-medium">
                    “Kuch Kar Dikhane Ki”
                  </h2>
                </div>
                <div className="mb-12">
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                    {slide.caption}
                  </p>
                </div>
                <button className="bg-[#E6EF3A] hover:bg-[#cdd933] text-black px-6 py-3 rounded-xl font-semibold shadow-md transition">
                  Join Us
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
