import React, { useState, useRef, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
  const images = [
    "/images/CLG0633.jpg",
    "/images/CLG-4428.jpg",
    "/images/FF_00258.jpg",
    "/images/CLG_2264.jpg",
    "/images/CLG_4405.jpg",
    "/images/CLG_0448.jpg",
  ];

  const videos = [
    "https://www.youtube.com/embed/ScMzIvxBSi4",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
  ];

  const reels = [
    {
      src: "/reels/reel1.mp4",
      title: "Cleanness Awareness",
      subtitle: "Step Up, Grow plants",
    },
    {
      src: "/reels/reel2.mp4",
      title: "Vastra Samman",
      subtitle: "Making a Difference",
    },
    {
      src: "/reels/reel3.mp4",
      title: "Community Support",
      subtitle: "Together We Can",
    },
  ];

  const [openImage, setOpenImage] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [openReel, setOpenReel] = useState(false);
  const [reelIndex, setReelIndex] = useState(0);
  const reelRefs = useRef([]);

  // Allow only one reel to play
  const handleHover = (index) => {
    reelRefs.current.forEach((ref, i) => {
      if (ref && i !== index) ref.pause();
    });
    if (reelRefs.current[index]) {
      reelRefs.current[index].play();
    }
  };

  const handleMouseOut = (index) => {
    if (reelRefs.current[index]) {
      reelRefs.current[index].pause();
    }
  };

  useEffect(() => {
    document.body.style.overflow = openReel ? "hidden" : "auto";
  }, [openReel]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpenReel(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#FFF9DB] to-[#EDEDED] min-h-screen text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mt-7 text-black font-bold mb-10">
          Our <span className="text-[#E6EF3A]">Gallery</span>
        </h2>

        {/* 📸 Photo Lightbox */}
        <Lightbox
          open={openImage}
          close={() => setOpenImage(false)}
          index={imgIndex}
          slides={images.map((src) => ({ src }))}
        />

        {/* 🖼️ Photos Grid */}
        <h2 className="text-2xl text-black font-semibold mb-4">Photos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              onClick={() => {
                setImgIndex(i);
                setOpenImage(true);
              }}
              className="cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        {/* 🎥 YouTube Videos */}
        <h2 className="text-2xl text-black font-semibold mb-4">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {videos.map((link, index) => (
            <div
              key={index}
              className="aspect-video w-full rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src={link}
                title={`Video ${index}`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        {/* 🔁 Reels Section */}
        <h2 className="text-2xl text-black font-semibold mb-4">Featured Reels</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {reels.map((reel, i) => (
            <div
              key={i}
              className="relative w-[320px] h-[480px] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => {
                setReelIndex(i);
                setOpenReel(true);
              }}
            >
              <video
                ref={(el) => (reelRefs.current[i] = el)}
                src={reel.src}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseOver={() => handleHover(i)}
                onMouseOut={() => handleMouseOut(i)}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
              {/* Yellow Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-14 h-14 text-[#E6EF3A] opacity-90 group-hover:scale-110 transition"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {/* Text Info */}
              <div className="absolute bottom-4 left-4 z-10 text-white">
                <h3 className="font-bold text-lg">{reel.title}</h3>
                <p className="text-sm text-gray-300">{reel.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 📽️ Reels Modal */}
        {openReel && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div className="relative w-[90%] md:w-[60%] lg:w-[50%]">
              <video
                src={reels[reelIndex].src}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setOpenReel(false)}
                className="absolute top-2 right-2 bg-[#E6EF3A] text-black px-3 py-1 rounded-full font-semibold hover:bg-yellow-300"
              >
                ✕ Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Lightbox
          open={openReel}
          close={() => setOpenReel(false)}
          index={reelIndex}
          slides={reels.map((reel) => ({
            type: "video",
            sources: [{ src: reel.src, type: "video/mp4" }],
            title: reel.title,
          }))}
          plugins={[Video]}
        />
    </div>
  );
};

export default GalleryPage;
