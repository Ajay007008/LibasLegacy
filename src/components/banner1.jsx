import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/banner1/img1.webp';
import img2 from '../assets/banner1/img2.png';

const Banner1 = () => {
  const navigate = useNavigate();

const goToWomenPage = () => {
  navigate('/women');
  window.scrollTo(0, 0);
};

 const goToMenPage = () => {
  navigate('/men');
  window.scrollTo(0, 0);
};


  return (
    <div className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden ">
      {/* Left Panel - WOMEN */}
      <div className="group relative flex-1 overflow-hidden cursor-pointer" onClick={goToWomenPage}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${img1})` }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-2 text-white">
          <h2 className="text-4xl font-semibold">WOMEN</h2>
          <div className="absolute bottom-14 left-0 right-0 text-center">
            <div className="text-white text-xs italic tracking-widest uppercase inline-block pt-2 px-4 transition-all duration-300 transform hover:scale-105 hover:border-b-2 hover:border-white">
              BESPOKE SERVICES
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - MEN */}
      <div className="group relative flex-1 overflow-hidden cursor-pointer" onClick={goToMenPage}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${img2})` }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center space-y-2 text-white">
          <h2 className="text-4xl font-semibold">MEN</h2>
          <div className="absolute bottom-14 left-0 right-0 text-center">
            <div className="text-white text-xs italic tracking-widest uppercase inline-block pt-2 px-4 transition-all duration-300 transform hover:scale-105 hover:border-b-2 hover:border-white">
              BESPOKE SERVICES
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Button */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 origin-top-right z-20">
        <button className="bg-[#820D23] text-white px-4 py-2 tracking-widest text-sm">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Banner1;
