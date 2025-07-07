import React from "react";
import AboutUsComponent from "../Components/AboutUS";

const AboutUsDetails = () => {
  return (
    <>
      <AboutUsComponent
        title="Who We Are"
        description="We are a team of passionate individuals working to create meaningful change through tech and social impact."
        buttonText="Know More"
        imageSrc="/images/CLG0633.jpg"
        // textBgColor="bg-pink-900"
        // imageBgColor="bg-blue-200"
        topBgColor="bg-gray-700"
        bottomBgColor="bg-black"
        onButtonClick={() => alert("Redirecting...")}
      />
      <AboutUsComponent
        title="Much More "
        description="Creating Social Impact "
        buttonText="Know More"
        imageSrc="/images/CLG0633.jpg"
        // textBgColor="bg-pink-100"
        // imageBgColor="bg-blue-200"
        topBgColor="bg-black"
        bottomBgColor="bg-gray-700"
        onButtonClick={() => alert("Redirecting...")}
      />
    </>
  );
};

export default AboutUsDetails;
