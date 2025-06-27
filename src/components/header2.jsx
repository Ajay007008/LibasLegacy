import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img3 from '../assets/header2/logo4.png';
import img4 from '../assets/header2/logo2.png';
import img5 from '../assets/header2/logo5.png';



import video from '../assets/header2/video.mp4';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAlterationOpen, setIsAlterationOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleAlteration = () => setIsAlterationOpen(!isAlterationOpen);

  return (
    <div className="relative w-full min-h-screen overflow-hidden head">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 w-full min-h-screen bg-black/50">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          {/* Top Nav */}
          <div className="flex items-center justify-between text-white">
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center w-full">
              {/* Left Nav */}
              <div className="flex space-x-12 items-center">
                <Link to="/men" className="transition duration-300">
                  MEN
                </Link>
                <Link to="/women" className="transition duration-300">
                  WOMEN
                </Link>
                <Link to="/wedding" className="transition duration-300">
                  WEDDING
                </Link>
              </div>




              {/* Logo Centered */}
              <div className="w-[100px] sm:w-[160px] md:w-[270px] flex justify-center">
                <img src={img5} alt="Libas Legacy Logo" className="w-full h-auto object-contain" />
              </div>





              {/* Right Nav */}
              <div className="flex space-x-12 items-center">
                <Link to="/fabric" className="transition duration-300">
                  FABRIC
                </Link>

                <AlterationDropdown />

                <ServicesDropdown />
              </div>
            </div>

        
            {/* Hamburger + Mobile Logo */}
<div className="md:hidden flex items-center space-x-4">
  <div className="text-xl cursor-pointer" onClick={toggleMenu}>
    {isMenuOpen ? <FaTimes /> : <FaBars />}
  </div>
  <div className="w-[350px] flex justify-center ml-2">
    <img src={img5} alt="Libas Legacy Logo" className="w-full h-auto object-contain" />
  </div>
</div>



          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black/70 p-4 rounded-lg space-y-4 text-white">
              <Link to="/men" className="block hover:text-[#820D23]" onClick={() => setIsMenuOpen(false)}>
                MEN
              </Link>
              <Link to="/women" className="block hover:text-[#820D23]" onClick={() => setIsMenuOpen(false)}>
                WOMAN
              </Link>
              <Link to="/wedding" className="block hover:text-[#820D23]" onClick={() => setIsMenuOpen(false)}>
                WEDDING
              </Link>
              <Link to="/tuxedos" className="block hover:text-[#820D23]" onClick={() => setIsMenuOpen(false)}>
                TUXEDOS
              </Link>

              {/* ALTERATION Dropdown */}
              <div>
                <div className="cursor-pointer" onClick={toggleAlteration}>
                  ALTERATION
                </div>
                {isAlterationOpen && (
                  <div className="pl-4 space-y-2 text-sm text-gray-300 mt-2">
                    <Link to="/alteration/men" onClick={() => setIsMenuOpen(false)}>Men</Link>
                    <Link to="/alteration/women" onClick={() => setIsMenuOpen(false)}>Women</Link>
                  </div>
                )}
              </div>

              {/* OUR SERVICES toggle for mobile */}
              <div>
                <div className="cursor-pointer" onClick={toggleServices}>
                  OUR SERVICES
                </div>
                {isServicesOpen && (
                  <div className="pl-4 space-y-2 text-sm text-gray-300 mt-2">
                    <div>Uniform</div>
                    <div>Bespoke Suits</div>
                    <div>Tailored Trousers</div>
                    <div>Custom Shirts</div>
                    <div>Safari Suits</div>
                    <div>Tuxedo Suits</div>
                    <div>Fabrics</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// === Dropdown Components ===

const AlterationDropdown = () => (
  <div className="relative group cursor-pointer">
    <div className="transition duration-300">ALTERATION</div>
    
    {/* FIX: Add group-hover to parent and keep dropdown visible when hovering inside it */}
    <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 mt-2 bg-gray-800 text-white rounded shadow-lg z-10 min-w-[150px]">
      <Link to="/alteration?type=men" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Men/Women
      </Link>
      
      <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Trousers
      </Link>

        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        T-Shirt
      </Link>


        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Business Suit
      </Link>


        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Wedding Suit
      </Link>

        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Wedding Dress
      </Link>



       <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Skirts
      </Link>


        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Evening Dress
      </Link>

        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Waist Coat
      </Link>




        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Shirts
      </Link>



       <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Jacket
      </Link>


        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Jeans
      </Link>

        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        Abaya
      </Link>



        <Link to="/alteration?type=women" className="block p-3 hover:bg-[#820D23] transition duration-200">
        And More...
      </Link>











    </div>
  </div>
);

const ServicesDropdown = () => (
  <div className="relative group cursor-pointer">
    <div className="transition duration-300">OUR SERVICES</div>
    <div className="absolute hidden group-hover:block mt-2 bg-gray-800 text-white rounded shadow-lg z-10 min-w-[200px]">
      <div className="p-3 hover:bg-[#820D23] transition duration-200">Uniform</div>
      <div className="p-3 hover:bg-[#820D23] transition duration-200">Bespoke Suits</div>
      <div className="p-3 hover:bg-[#820D23] transition duration-200">Tailored Trousers</div>
      <div className="p-3 hover:bg-[#820D23] transition duration-200">Custom Shirts</div>
      <div className="p-3 hover:bg-[#820D23] transition duration-200">Safari Suits</div>
      <div className="p-3 hover:bg-[#820D23] transition duration-200">Tuxedo Suits</div>
      <div className="p-3 hover:bg-[#820D23] transition duration-200">Fabrics</div>
    </div>
  </div>
);

export default Header2;
