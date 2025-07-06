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



