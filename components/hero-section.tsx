import React from 'react'
import { CldVideoPlayer } from 'next-cloudinary'

const HeroSection = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
              <CldVideoPlayer
          width="100%"
          height="100%"
          src="andbeyondtravel/video/upload/v1727727683/Videos/Homepage"
          poster="andbeyondtravel/image/upload/v1/andbeyond/Cyber-monday-2022"
          className="absolute inset-0 w-full h-full object-cover"
          controls={false}
          loop
          autoPlay
          muted
          playsinline
        />
      
      {/* Optional overlay for text content */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to AndBeyond</h1>
          <p className="text-xl md:text-2xl">Discover extraordinary experiences</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection