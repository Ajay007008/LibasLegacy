import React from 'react';
import { useNavigate } from 'react-router-dom';

import img3 from '../assets/customCollection/img3.png';
import { motion } from 'framer-motion';

const CustomeCollection3 = () => {
  const navigate = useNavigate();
  

    const handleNavigate = () => {
    navigate('/alteration');
    setTimeout(() => {
      window.scrollTo(0, 0); // Ensures scroll happens after navigation renders
    }, 0);
  };

  
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img src={img3} alt="Alteration Service" className="w-full h-full object-cover" />

      {/* Overlay (dark layer for contrast) */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-start pb-65 px-8">
        <motion.div
          className="text-white max-w-2xl space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold">Expert Alteration</h2>
          <p className="text-md text-gray-200 leading-relaxed">
            Whether it's a minor tweak or a major transformation,<br />
            our expert tailoring ensures your garments fit like a dream.
          </p>
       
          <button
           onClick={handleNavigate}
            className="uppercase tracking-widest border-b-2 border-white text-sm transition cursor-pointer">
            Book Alteration
          </button>



        </motion.div>
      </div>
    </div>
  );
};

export default CustomeCollection3;
