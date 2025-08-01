'use client'

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TweetImages() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1515657834497-26509e295154?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Maasai warrior interaction",
      title: "Private Safaris",
      subtitle: "Tailor Made",
      height: "h-80"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1723780874149-6919f51f22d0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91cnNpbSUyMHRyYXZlbCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      alt: "SUVs and pyramids",
      title: "Navigating Access",
      subtitle: "To Challenging Destinations",
      height: "h-80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-lg overflow-hidden shadow-2xl">
      {/* Slider Container */}
      <div className="relative">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative group">
              <div className={`w-full ${slide.height} overflow-hidden`}>
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-playfair text-xl sm:text-2xl font-light mb-1">{slide.title}</p>
                  <p className="text-primary font-playfair text-lg sm:text-xl font-medium">{slide.subtitle}</p>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-semibold text-gray-900">Premium Experience</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 