import React from 'react';
import img1 from '../assets/autoSlider/img1a.jpg';
import img2 from '../assets/autoSlider/img2a.png';
import img3 from '../assets/autoSlider/img3a.jpg';
import img4 from '../assets/autoSlider/img4a.jpg';
import img5 from '../assets/autoSlider/img5.png';
import img6 from '../assets/autoSlider/img6a.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const AutoSlider = () => {
  return (
    <div className="overflow-hidden w-full relative">
      <div
        className="flex w-max animate-[scrollLeft_30s_linear_infinite]"
        style={{
          animation: 'scrollLeft 30s linear infinite',
          willChange: 'transform', // performance hint
        }}
      >
        {/* Repeat images once for infinite loop effect */}
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className="h-[400px] min-w-[300px] object-cover block"
            loading="lazy"
          />
        ))}
      </div>

      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AutoSlider;
