import React, { useState, useEffect, useRef } from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / carouselRef.current.clientWidth);
        setCurrentIndex(newIndex);
      }
    };

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScrolling.current) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000); // Change image every 3 seconds

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

  const goToSlide = (index) => {
    setCurrentIndex(index);
    isScrolling.current = true;
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000); // Prevent auto-scroll for 1 second after manual scroll
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div
        ref={carouselRef}
        className="overflow-hidden flex"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-64 object-cover flex-shrink-0"
            style={{ scrollSnapAlign: 'start' }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;