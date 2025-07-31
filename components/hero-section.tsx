import React from 'react'
import HeroVideo from './ui/hero-video'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
        <HeroVideo />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          {/* Main Title */}
          <div className="text-left mb-2 sm:mb-4">
            <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide mb-1 sm:mb-2">
              DESTINATION
            </h1>
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide">
              AFRICA
            </h2>
          </div>
          
          {/* Tagline */}
          <p className="font-inter text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light tracking-wider mb-4 sm:mb-6 md:mb-8">
            culture | nature | wildlife
          </p>
          
          {/* Explore Button */}
          <Button 
            className="bg-primary text-white hover:bg-primary/80 px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium rounded-none rounded-br-2xl relative hover:-translate-y-1 transition-all duration-200 before:absolute before:inset-0 before:bg-secondary before:rounded-none before:rounded-br-2xl before:translate-x-[2px] before:translate-y-[2px] before:-z-10 before:content-['']"
          >
            EXPLORE
          </Button>
        </div>
    </div>
  )
}

export default HeroSection