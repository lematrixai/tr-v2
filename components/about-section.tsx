'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Star } from 'lucide-react'
import { TweetImages } from '@/components/tweet-images'

const AboutSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
   

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Section - Image Gallery */}
            <div className="relative order-2 lg:order-1">
              {/* Main Image - Hidden on small screens */}
              <div className="relative group hidden lg:block">
                <div className="w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] max-w-lg lg:max-w-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1515657834497-26509e295154?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Maasai warrior interaction"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div> */}
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="text-sm font-semibold text-gray-900">Premium Experience</span>
                    </div>
                  </div>
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-playfair text-xl sm:text-2xl font-light mb-1">Private Safaris</p>
                    <p className="text-primary font-playfair text-lg sm:text-xl font-medium">Tailor Made</p>
                  </div>
                </div>
              </div>

              {/* Secondary Image - Hidden on small screens */}
              <div className="absolute -bottom-8 -right-8 lg:-bottom-12 lg:-right-12 group hidden lg:block">
                <div className="w-64 sm:w-72 md:w-80 lg:w-96 h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden shadow-xl">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1683133799197-acecde6a1afe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG91cmlzdCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D" 
                    alt="SUVs and pyramids" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Text Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-playfair text-lg font-light mb-1">Navigating Access</p>
                    <p className="text-primary font-playfair text-base font-medium">To Challenging Destinations</p>
                  </div>
                </div>
              </div>

              {/* Tweet Content - Only visible on small screens */}
              <div className="lg:hidden">
                <TweetImages />
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              {/* Subtitle */}
              <div>
                <span className="text-gray-900 font-bold text-base sm:text-lg">WHY CHOOSE </span>
                <span className="text-primary font-bold text-base sm:text-lg">LUXURY ADVENTURE TOURS</span>
              </div>

              {/* Main Heading */}
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[31px] max-w-lg font-playfair font-light text-gray-900 leading-tight">
                  EXCLUSIVE JOURNEYS AND SELECT DEPARTURES TO REMOTE CORNERS OF{' '}
                  <span className="text-primary">AFRICA</span>
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 font-inter text-sm sm:text-base leading-relaxed">
                  We specialise in providing curious travellers with access to regions and communities that would otherwise prove challenging.<br/>
                  We are committed to offering unique travel opportunities, to unusual destinations, that are mutually beneficial to all involved.
                </p>
              </div>

              {/* Call to Action Button */}
              <Button 
                className="group bg-primary text-white hover:bg-primary/80 px-4 sm:px-6 md:px-3 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium rounded-none rounded-br-2xl relative hover:translate-x-2 transition-all duration-200 before:absolute before:inset-0 before:bg-secondary before:rounded-none before:rounded-br-2xl before:translate-x-[2px] before:translate-y-[2px] before:-z-10 before:content-['']"
              >
                <span className="flex items-center gap-1">
                  CONTACT US
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-all duration-200" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 