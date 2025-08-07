import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="about"
      className="bg-[#01010A] py-20 px-6 text-white relative"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-[#E6EF3A]">Impacts</span>
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          <strong>Soch</strong>, the official social club of <strong>JECRC Foundation</strong>, is committed to transforming lives through compassion and action.
          Our initiatives — like <em>food donations</em>, <em>Vastra Samman</em>, <em>orphanage visits</em>, and <em>cleanliness drives</em> — are making a real difference.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-5xl font-bold text-[#E6EF3A]">
              {inView && <CountUp end={3500} duration={4} />}+
            </h3>
            <p className="mt-2 text-gray-400">Clothes Donated</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#E6EF3A]">
              {inView && <CountUp end={1500} duration={4} />}+
            </h3>
            <p className="mt-2 text-gray-400">Meals Served</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#E6EF3A]">
              {inView && <CountUp end={10000} duration={4} />}+
            </h3>
            <p className="mt-2 text-gray-400">Lives Touched</p>
          </div>
        </div>
      </div>

      {/* To Know More Link */}
      <ScrollLink
        to="initiatives"
        smooth
        duration={600}
        className="absolute right-10 bottom-6 text-xl md:text-2xl text-white font-semibold hover:text-[#E6EF3A] hover:underline cursor-pointer transition"
      >
        To Know More →
      </ScrollLink>
    </section>
  );
};

export default AboutUs;
