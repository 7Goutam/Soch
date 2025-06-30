import React from "react";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <section id="about" className="bg-black/90 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#E6EF3A] mb-4">About Us</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          <strong>Soch</strong> is a social club at <strong>JECRC Foundation</strong>, driven by compassion and action. 
          We organize impactful events like food donations, Vastra Samman, orphanage visits, and cleanliness drives to uplift society.
        </p>

        {/* Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#E6EF3A]">
              <CountUp end={3500} duration={4} />+
            </h3>
            <p className="mt-2 text-gray-400">Clothes Donated</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#E6EF3A]">
              <CountUp end={1500} duration={4} />+
            </h3>
            <p className="mt-2 text-gray-400">Meals Served</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-[#E6EF3A]">
              <CountUp end={10000} duration={4} />+
            </h3>
            <p className="mt-2 text-gray-400">Lives Touched</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
