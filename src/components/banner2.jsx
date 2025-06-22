import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../assets/banner2/img1.avif';

const Banner2 = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/tuxedos');
  };

  return (
    <div
      onClick={handleNavigate}
      className="relative w-full h-screen bg-cover bg-center flex items-center overflow-hidden cursor-pointer"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-8 text-white space-y-5">
        <motion.p
          className="uppercase italic text-5xl md:text-6xl font-serif text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Libas Legacy
        </motion.p>

        <motion.h1
          className="text-xl md:text-3xl font-semibold leading-tight hover:text-[#820D23] transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Casual Tuxedos
        </motion.h1>

        <motion.p
          className="text-md text-gray-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A versatile wardrobe for weekday commutes<br />
          and weekend commitments
        </motion.p>

        <motion.button
          className="mt-4 inline-block cursor-pointer uppercase tracking-widest border-b-2 border-white text-sm hover:opacity-80 transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

export default Banner2;
