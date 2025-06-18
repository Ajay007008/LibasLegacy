import React from 'react'
import img1 from '../assets/autoSlider/img1.jpg'
import img2 from '../assets/autoSlider/img2.jpg'
import img3 from '../assets/autoSlider/img3.jpg'
import img4 from '../assets/autoSlider/img4.jpg'
import img5 from '../assets/autoSlider/img5.jpg'
import img6 from '../assets/autoSlider/img6.jpg'


const images = [img1, img2, img3, img4, img5, img6];


const autoSlider = () => {
  return (
    <div className="overflow-hidden w-full relative">
  <div
    className="flex w-max animate-[scrollLeft_30s_linear_infinite]"
    style={{ animation: 'scrollLeft 30s linear infinite' }}
  >
    {[...images, ...images].map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`slide-${i}`}
        className="h-[400px] min-w-[300px] object-cover block"
      />
    ))}
  </div>

  <style>
    {`
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
  </style>
</div>
   )
}

export default autoSlider