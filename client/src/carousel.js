import React, { useRef } from 'react';

const ImageCarousel = ({ images }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory"
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full snap-start">
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 opacity-75 hover:opacity-100"
      >
        &#8592;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 opacity-75 hover:opacity-100"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;