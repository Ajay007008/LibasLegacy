import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/customCollection/img1.jpg';

const CustomCollections = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white h-[400px] flex items-center"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="bg-opacity-60 w-full h-full absolute top-0 left-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">THE LATEST STYLES & TRENDS</h2>
          <p className="text-yellow-600 flex items-center gap-2">
            <span className="w-8 h-px bg-yellow-700"></span>
            From shirts to formal wear we customize everything imaginable!
          </p>
        </div>

        <Link
          to="/tuxedos"
          className="mt-6 md:mt-0 bg-yellow-600 hover:bg-yellow-600 text-white px-6 py-3 font-semibold tracking-wide"
        >
          VIEW OUR CUSTOM COLLECTIONS
        </Link>
      </div>
    </div>
  );
};

export default CustomCollections;
