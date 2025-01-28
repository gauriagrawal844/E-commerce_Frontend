import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "https://elements-resized.envatousercontent.com/elements-cover-images/ca7fcee9-7f6e-48c2-b74e-450b71d0b511?w=1200&h=630&cf_fit=crop&q=85&format=jpeg&s=a7c9ddaa4efd88b4e07ae2a4e9549fd0702f3d1772e06843b2c46e40d167c988",
    "https://media.istockphoto.com/id/1067448968/photo/full-length-body-size-portrait-of-careless-carefree-trendy-stylish-elegant-chic-lady-wearing.jpg?s=612x612&w=0&k=20&c=B9wMreW5hjoek8dUEtMGIKL_SGmOd-fX6TIfYhzPne8=",
    "https://img.freepik.com/premium-psd/fabstyle-cheerful-rainbow-clothing-store-hero-image_637394-850.jpg?semt=ais_hybrid",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="p-6">
      {/* Main Section */}
      <div className="flex justify-between items-center mb-8">
        {/* Left Side: Text */}
        <div className="w-1/2 pr-8">
          <h1 className="text-6xl font-bold mb-4 text-center text-black animate-fade-slide-up">Welcome to</h1>
          <h2 className="text-7xl font-bold mb-6 text-center text-blue-500 animate-fade-slide-up">Trendzy</h2>
          <p className="text-lg text-center text-gray-700 leading-relaxed animate-fade-slide-up">
            Discover the latest trends in fashion, style, and lifestyle. At <strong className="text-blue-500">Trendzy</strong>, we bring you the most stylish and trendy collections to elevate your wardrobe and your confidence. Explore our website to find something that’s uniquely you!
          </p>
        </div>

        {/* Right Side: Image Carousel */}
        <div className="w-1/2 max-w-lg">
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{transform: `translateX(-${currentIndex * 100}%)`}}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-[1000px] h-[400px] object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;