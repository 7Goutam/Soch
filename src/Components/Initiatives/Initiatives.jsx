import React, { useState, useEffect } from "react";

const events = [
  {
    image: "/images/CLG0633.jpg",
    name: "Vastra Samman",
    description: "Clothes Donation Drive",
  },
  {
    image: "/images/CLG-4428.jpg",
    name: "Amrit Aahar",
    description: "Food Donation Drive",
  },
  {
    image: "/images/CLG_2264.jpg",
    name: "Orphanage Visit",
    description: "Bring Happiness to orphans",
  },
  {
    image: "/images/FF_00258.jpg",
    name: "Old Age Home Visit",
    description: "Experiencing the past",
  },
];

const Initiatives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getClass = (index) => {
    const prevIndex = (currentIndex - 1 + events.length) % events.length;
    const nextIndex = (currentIndex + 1) % events.length;

    if (index === currentIndex) {
      return "z-30 scale-100 blur-0 translate-x-0";
    } else if (index === prevIndex) {
      return "-translate-x-28 sm:-translate-x-40 scale-75 blur-sm z-10";
    } else if (index === nextIndex) {
      return "translate-x-28 sm:translate-x-40 scale-75 blur-sm z-10";
    } else {
      return "opacity-0 scale-50";
    }
  };

  return (
    <div id="initiatives" className="bg-gray-900 py-12 px-4">
      {/* Heading Section */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
        Our Initiatives
      </h2>
      {/* Scrolling Section */}
      <div className="flex justify-center items-center">
        {/* Outer container to center carousel */}
        <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[500px] h-[450px] flex justify-center items-center">
          {/* Carousel */}
          {events.map((event, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-in-out transform w-64 sm:w-72 md:w-80 h-full bg-white rounded-xl shadow-xl overflow-hidden ${getClass(
                index
              )}`}
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {event.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button Section */}
      <div className="flex justify-center mt-10">
        <button className=" bg-yellow-600 hover:bg-yellow-700 transition-colors duration-200 text-white text-base sm:text-lg py-2 px-6 rounded-lg">
          Click for More
        </button>
      </div>
    </div>
  );
};

export default Initiatives;
