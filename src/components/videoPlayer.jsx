import React from 'react'
import videoFile from '../assets/video.mp4'

const videoPlayer = () => {
  return (
    <div className="w-full h-auto">
    <video
      className="w-full h-auto  shadow-lg"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src={videoFile} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  )
}

export default videoPlayer
