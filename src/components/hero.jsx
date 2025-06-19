import React from 'react';
import img1 from "../assets/hero/img3.png";
import img2 from "../assets/hero/img5.png";

const Hero = () => {
  return (
    <section className="w-full px-6 sm:px-10 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT: Images */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={img2}
              alt="Suit"
              className="w-48 sm:w-64 rounded shadow-lg"
            />
            <img
              src={img1}
              alt="Tailor"
              className="w-40 sm:w-56 rounded shadow-lg absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20"
            />
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wider mb-4 leading-tight">
            DISCOVER <br /> TRUE QUALITY
          </h2>

          <p className="text-xs uppercase text-yellow-700 tracking-[0.3em] mb-4 flex items-center justify-center md:justify-start gap-4">
            Handcrafted Suit
            <span className="block w-20 sm:w-24 h-[1px] bg-yellow-300"></span>
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            We provide you with great suits that befit you and your lifestyle. Our suits are made from
            the highest quality fabrics and guaranteed to give you functionality, durability and comfort.
            Our skilled master tailors handle all of our cutting and sewing, ensuring precision in all
            production processes and paying attention to the details. Come to us and choose the best suit
            for your lifestyle.
          </p>

          <button className="bg-yellow-700 text-white px-6 py-3 rounded hover:bg-yellow-800 transition">
            LEARN ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;