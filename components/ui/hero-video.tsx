'use client'
import { CldVideoPlayer } from 'next-cloudinary'
import React from 'react'

const HeroVideo = () => {
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const cloudBaseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_BASE_URL


  // Cloudinary video URL
  const videoUrl = `${cloudBaseUrl}/${cloudName}/video/upload/v1753888001/Homepage_pqtobz.mp4`
  const posterUrl = `${cloudBaseUrl}/${cloudName}/video/upload/v1753888001/Homepage_pqtobz.mp4`


  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        onError={(e) => {
          console.error('Video error:', e)
        }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <CldVideoPlayer
        width="100%"
        height="100%"
        src="Homepage_pqtobz"
        poster="Screenshot_2025-07-31_at_10.12.13_dkfwni"
        controls={false}
      />
      
     
    </div>
  )
}

export default HeroVideo 