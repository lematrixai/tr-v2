import Image from "next/image"
import { MapPin, Sun, Star, Edit3, ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  return (
    <div className="min-h-screen p-6 py-32">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section - Separate Container */}
        <div className=" p-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left - Location Label */}
            <div className="lg:col-span-1">
              <p className="text-gray-600 text-sm font-medium">The Luxury adventure tour</p>
            </div>

            {/* Center - Main Heading */}
            <div className="lg:col-span-1">
              <h1 className="text-4xl lg:text-5xl font-serif leading-tight text-gray-900">
                The Unmatched Beauty of the Zanzibar
              </h1>
            </div>

            {/* Right - Description */}
            <div className="lg:col-span-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                Luxury adventure tour with its unparalleled natural beauty, offers a spectacular panoramic view of the Zanzibar,
                captivating visitors with its awesome natural wonders and incredible underwater treasures.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section - Separate Container with Custom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Map Card */}
          <div className="lg:col-span-1 relative bg-gray-900 rounded-3xl p-6 text-white overflow-hidden h-80">
            <div className="absolute top-4 right-4">
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <Edit3 className="w-4 h-4" />
              </button>
            </div>

            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-medium mb-4">See a true location</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Wayag</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">Pulau Wajag</span>
                </div>
              </div>
            </div>

            {/* Map visualization */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-green-900"></div>
            </div>
          </div>

          {/* Weather/Lagoon Card */}
          <div className="lg:col-span-1 relative rounded-3xl overflow-hidden h-80">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=280&h=320&fit=crop&crop=center"
              alt="Zanzibar turquoise waters"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4">
              <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Edit3 className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-6 h-6" />
                <span className="text-sm">Sunny</span>
              </div>
              <div className="text-4xl font-light">32°</div>
            </div>
          </div>

          {/* Rating Card */}
          <div className="lg:col-span-1 bg-white rounded-3xl p-6 h-80 flex flex-col justify-between">
            <div className="flex -space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-pink-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-purple-400 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white"></div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <span className="text-3xl font-light text-gray-900">46 K</span>
              </div>

              <p className="text-gray-900 font-medium text-lg leading-tight">
                The most beautiful diving destinations in Zanzibar
              </p>
            </div>
          </div>

          {/* Beach Card - Double Width */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden h-80">
            <Image
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=560&h=320&fit=crop&crop=center"
              alt="Beautiful beaches of Zanzibar"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-xl font-medium leading-tight mb-4">
                The most beautiful beaches on the island of Zanzibar
              </h3>

              <div className="flex gap-2">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
