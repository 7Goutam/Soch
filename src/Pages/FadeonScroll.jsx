// import React, { useEffect, useRef, useState } from "react";

// const FadeOnScroll = ({ children }) => {
//   const ref = useRef();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`transition-opacity duration-1000 ${
//         isVisible ? "animate-fadeIn" : "animate-fadeOut"
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default FadeOnScroll;


// import React, { useEffect, useRef, useState } from "react";

// const FadeCenterScroll = ({ children }) => {
//   const ref = useRef();
//   const [animateClass, setAnimateClass] = useState("animate-fadeOut");

//   const handleScroll = () => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();

//     // Center range: 40%–60% of viewport height
//     const middleTop = window.innerHeight * 4;
//     const middleBottom = window.innerHeight * 4;

//     const isInMiddle = rect.top < middleBottom && rect.bottom > middleTop;

//     setAnimateClass(isInMiddle ? "animate-fadeIn" : "animate-fadeOut");
//   };

//   useEffect(() => {
//     handleScroll(); // Run on mount
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`transition-opacity duration-1000 ${animateClass}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default FadeCenterScroll;


// import React, { useRef, useEffect, useState } from "react";

// const FadeOnScroll = ({ children }) => {
//   const ref = useRef(null);
//   const [isInMiddle, setIsInMiddle] = useState(false);

//   const handleScroll = () => {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();

//     const middleTop = window.innerHeight * 4;
//     const middleBottom = window.innerHeight * 4;

//     const isCentered =
//       rect.top < middleBottom && rect.bottom > middleTop;

//     setIsInMiddle(isCentered);
//   };

//   useEffect(() => {
//     handleScroll(); // Run initially
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`h-[500px] transition-opacity duration-1000 ${
//         isInMiddle ? "animate-fadeIn" : "animate-fadeOut"
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default FadeOnScroll;



// import { useEffect, useState, useRef } from "react";

// export function FadeonScroll() {
//   const ref = useRef(null);
//   const [fadeClass, setFadeClass] = useState("animate-fadeOut");

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!ref.current) return;
//       const rect = ref.current.getBoundingClientRect();

//       const middleTop = window.innerHeight * 0.4;
//       const middleBottom = window.innerHeight * 0.6;

//       const isInMiddle = rect.top < middleBottom && rect.bottom > middleTop;

//       setFadeClass(isInMiddle ? "animate-fadeIn" : "animate-fadeOut");
//     };

//     handleScroll(); // On mount
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return { ref, fadeClass };
// }


import { useEffect, useState, useRef } from "react";

export function useFadeOnScroll() {
  const ref = useRef(null);
  const [fadeClass, setFadeClass] = useState("opacity-0 translate-y-10");

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const middleTop = window.innerHeight * 0.4;
      const middleBottom = window.innerHeight * 0.6;
      const isInMiddle = rect.top < middleBottom && rect.bottom > middleTop;

      setFadeClass(
        isInMiddle
          ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
          : "opacity-0 translate-y-10 transition-all duration-700 ease-out"
      );
    };

    handleScroll(); // trigger once on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, fadeClass };
}



