import React from 'react'


import img1 from '../assets/tailor/img1.jpg';
import img2 from '../assets/tailor/img2.jpg';
import img3 from '../assets/tailor/img3.jpg';

import { FaFacebookF, FaInstagram, FaTimes } from "react-icons/fa";



const TailorCard = ({ image, name, title }) => {
    return (
        <div className="text-center transform transition duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white">
        <img src={image} alt={name} className="w-full object-cover rounded-t-md" />
        <p className="text-sm tracking-widest mt-4 text-gray-500 uppercase">{title}</p>
        <h3 className="text-2xl font-serif font-semibold tracking-wide text-black mt-1">{name}</h3>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="border border-[#884B00] p-2 hover:bg-[#884B00] hover:text-white transition rounded">
            <FaFacebookF />
          </div>
          <div className="border border-[#884B00] p-2 hover:bg-[#884B00] hover:text-white transition rounded">
            <FaTimes />
          </div>
          <div className="border border-[#884B00] p-2 hover:bg-[#884B00] hover:text-white transition rounded">
            <FaInstagram />
          </div>
        </div>
      </div>
    );
  };


const tailor = () => {
  return (
 
 <section className="py-16 bg-white text-center">
      <h2 className="text-xl tracking-widest text-gray-500 mb-2 relative inline-block">
        <span className="relative z-10 px-4 bg-white">OUR TAILORS</span>
        <span className="absolute left-0 top-1/2 w-full h-px bg-gray-300 -z-0"></span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 max-w-6xl mx-auto px-4">
        <TailorCard name="PETER MASON" title="Master Tailor" image={img1} />
        <TailorCard name="POLLY WIRE" title="Tailor" image={img2} />
        <TailorCard name="REBECCA OGLE" title="Tailor" image={img3} />
      </div>
    </section>
  )
}

export default tailor