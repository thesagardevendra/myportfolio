import React, { useState, useEffect } from "react";
import Banner from "../assets/Banner.jpg";
import Logo from "../assets/banner2.jpg";
import Banner3 from "../assets/Captain/banner3.JPG"
import captainCrowd from"../assets/Captain/captainCrowd.JPG"
import Banner4 from"../assets/Captain/banner4.JPG"
import Banner5 from"../assets/Captain/banner5.jpg"
import { Bio } from "../constants";
import captainDCM from "../assets/Captain/captainDCM.JPG";
const images = [
  // {
  //   image: Banner5,
  //   content: "आपका विश्वास ही मेरी ताकत है!",
  //   description: "Content to displayed",
  //    language:'tamil'
  // },
  {
    image: captainCrowd,
    content: "आपका विश्वास ही मेरी ताकत है!",
    description: "Content to displayed",
     language:'tamil'
  },
  {
    image: captainDCM,
    content: "Committed to You!",
    description: "Content to displayed",
    language:'hindi'
  },
  {
    image: Banner,
    content: "Committed to You!",
    description: "Content to displayed",
    language:'hindi'
  },
  // {
  //   image: Logo,
  //   content: "People's MLA!",
  //   description: "Content to displayed",
  //    language:'english'
  // },
  // {
  //   image: Banner3,
  //   content: "Committed to You!",
  //   description: "Content to displayed",
  //    language:'tamil'
  // },
  // {
  //   image: Banner4,
  //   content: "Committed to You!",
  //   description: "Content to displayed",
  //    language:'tamil'
  // },
  
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
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
        <div className="flex  flex-col gap-2">
            {/* <img alt="" className="rounded-full w-28 bg-white "  src={Party} /> */}
          {images.map((item, index) => (
            <div className="flex flex-col">
              <div
                className={`  ${
                    currentIndex === index ? "flex flex-col gap-2 transition-all duration-300  text-white" : "hidden"
                  }`}
              >
                <span
                  className="md:text-6xl"
                >
                  {item.content}
                </span>
                <span className="md:text-3xl text-base">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex drop-shadow-2xl items-center gap-3 ml-5">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 w-4 rounded-full drop-shadow-2xl  hover:bg-orange-500 cursor-pointer ${
                currentIndex === index ? "bg-orange-500" : "bg-gray-100 "
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
