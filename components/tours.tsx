'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

const Tours = () => {
  const [activeFilter, setActiveFilter] = useState('traditional')

  const tourData = [
    {
      id: 1,
      destination: 'Kenya',
      image: '/kenya-tour.jpg',
      rating: 5,
      badge: 'CULTURAL',
      badgeColor: 'bg-gray-200 text-gray-800'
    },
    {
      id: 2,
      destination: 'Tanzania',
      image: '/tanzania-tour.jpg',
      rating: 5,
      badge: 'SAFARI',
      badgeColor: 'bg-gray-200 text-gray-800'
    },
    {
      id: 3,
      destination: 'Angola',
      image: '/angola-tour.jpg',
      rating: 5,
      badge: 'SALE',
      badgeColor: 'bg-red-500 text-white'
    }
  ]

  const filters = ['TRADITIONAL', 'CULTURAL', 'SAFARI']

  return (
    <section className="min-h-screen justify-center items-center  relative overflow-hidden bg-[url('/bg-patterns.png')] bg-cover bg-center">
      {/* Pattern Background */}
     
      

      <div className=" container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Section - Filters */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h1 className="text-5xl md:text-6xl font-playfair font-light text-white mb-2">
                  TOURS
                </h1>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-8">
                  TYPES | COUNTRIES
                </p>
                
                {/* Filter Buttons */}
                <div className="space-y-3">
                  {filters.map((filter) => (
                    <Button
                      key={filter}
                      onClick={() => setActiveFilter(filter.toLowerCase())}
                      className={`w-full justify-start px-6 py-4 rounded-lg text-left transition-all duration-200 ${
                        activeFilter === filter.toLowerCase()
                          ? 'bg-primary text-white shadow-lg'
                          : 'bg-gray-200/10 text-gray-300 hover:bg-gray-200/20 border border-gray-700'
                      }`}
                    >
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Tour Cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tourData.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-96"
                  >
                    {/* Card Image */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-300 to-gray-400">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Destination Name */}
                      <div className="absolute top-4 left-4 z-10">
                        <h3 className="text-white font-semibold text-lg">{tour.destination}</h3>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(tour.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${tour.badgeColor}`}>
                          {tour.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex-1 flex flex-col justify-end">
                      <Button 
                        className="w-full bg-black text-white hover:bg-gray-800 rounded-none rounded-br-lg transition-all duration-200"
                      >
                        BOOK THIS TRIP
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tours