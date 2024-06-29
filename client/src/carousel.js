import React, { useState, useEffect, useRef } from "react";
import Banner from "../assets/Banner.jpg";
import Logo from "../assets/banner2.jpg";
import Banner3 from "../assets/Captain/banner3.JPG";
import captainCrowd from "../assets/Captain/captainCrowd.JPG";
import Banner4 from "../assets/Captain/banner4.JPG";
import Banner5 from "../assets/Captain/banner5.jpg";
import captainDCM from "../assets/Captain/captainDCM.JPG";

const images = [
  {
    image: captainCrowd,
    content: "आपका विश्वास ही मेरी ताकत है!",
    description: "Content to displayed",
    language: 'tamil'
  },
  {
    image: captainDCM,
    content: "Committed to You!",
    description: "Content to displayed",
    language: 'hindi'
  },
  {
    image: Banner,
    content: "Committed to You!",
    description: "Content to displayed",
    language: 'hindi'
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change image every 9 seconds
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const goToNextSlide = () => {
    stopAutoScroll();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startAutoScroll();
  };

  const goToPreviousSlide = () => {
    stopAutoScroll();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    startAutoScroll();
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ scrollSnapType: 'x mandatory' }}>
      <div
        className="flex w-screen transition-transform h-full duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt={`Slide ${index}`}
            className="w-full min-w-full brightness-95 h-full object-cover"
          />
        ))}
      </div>

      <div className="absolute bottom-32 left-5 flex flex-col justify-center gap-3 pb-4">
        <div className="flex flex-col gap-2">
          {images.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <div
                className={`${
                  currentIndex === index ? "flex flex-col gap-2 transition-all duration-300 text-white" : "hidden"
                }`}
              >
                <span className="md:text-6xl">
                  {item.content}
                </span>
                <span className="md:text-3xl text-base">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        style={{ zIndex: 1 }}
      >
        &#10094;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        style={{ zIndex: 1 }}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;