import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change image every 9 seconds
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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