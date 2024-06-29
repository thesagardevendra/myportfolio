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
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const startAutoScroll = () => {
    return setInterval(() => {
      if (!isScrolling.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 9000); // Change image every 9 seconds
  };

  useEffect(() => {
    const interval = startAutoScroll();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * carouselRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const newIndex = Math.round(scrollLeft / carouselRef.current.clientWidth);
      setCurrentIndex(newIndex);

      // Reset auto-scroll interval
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      isScrolling.current = true;
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, 1000); // Prevent auto-scroll for 1 second after manual scroll
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    isScrolling.current = true;
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 1000); // Prevent auto-scroll for 1 second after manual scroll
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ scrollSnapType: 'x mandatory' }}>
      <div
        ref={carouselRef}
        className="flex w-screen h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full snap-center">
            <img
              src={image.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
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
                <span className="md:text-6xl">{item.content}</span>
                <span className="md:text-3xl text-base">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex drop-shadow-2xl items-center gap-3 ml-5">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 w-4 rounded-full drop-shadow-2xl hover:bg-orange-500 cursor-pointer ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-100"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;