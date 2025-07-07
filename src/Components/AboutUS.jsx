import React from "react";

const AboutUsComponent = ({
  title,
  description,
  buttonText,
  imageSrc,
//   textBgColor,
//   imageBgColor,
  topBgColor,
  bottomBgColor,
  onButtonClick,
}) => {
  return (
    <section className="relative w-full overflow-hidden py-24">
      {/* Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <div className={`h-1/2 ${topBgColor}`}></div>
        <div className={`h-1/2 ${bottomBgColor}`}></div>
      </div>

      {/* Content Box */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
        {/* Text Section */}
        <div className={`w-full md:w-1/2 p-6 rounded-md`}>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
            {title}
          </h2>
          <p className="text-gray-800 mb-4 text-base md:text-lg">
            {description}
          </p>

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="mt-6 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300"
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Image Section */}
        <div
          className={`w-full md:w-1/2 p-4 flex justify-center rounded-md`}
        >
          <img
            src={imageSrc}
            alt="About"
            className="w-full max-w-xs md:max-w-sm rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
