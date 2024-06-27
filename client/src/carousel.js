import React, { useRef } from 'react';

const ImageGrid = ({ images }) => {
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
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={carouselRef}
        className="grid grid-cols-3 gap-4 p-4 overflow-x-auto scroll-smooth"
      >
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
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

export default ImageGrid;