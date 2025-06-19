import React, { useState } from 'react';
import img2 from '../assets/header2/suit1.avif';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <div className="head">
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          {/* Top Nav */}
          <div className="flex items-center justify-between text-white">
            {/* Logo or Title */}
            <div className="text-center">
            <h1 className="text-xl sm:text-4xl md:text-5xl font-serif font-bold text-white">Libas Legacy</h1>  <div className="h-[1px] w-20 bg-yellow-500 mx-auto my-1" />
  <p className="text-sm tracking-widest text-white">BESPOKE.DUBAI</p>
</div>
            {/* Hamburger - Mobile Only */}
            <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Menu - Desktop */}
            <div className="hidden md:flex space-x-6 items-center">
              <Dropdown />
              <NavItem label="FEATURE" />
              <NavItem label="ABOUT" />
              <ServicesDropdown />
              <NavItem label="SUITS" />
              <NavItem label="CONTACTS" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black/70 p-4 rounded-lg space-y-4 text-white">
              <Dropdown />
              <NavItem label="FEATURE" />
              <NavItem label="ABOUT" />

              {/* OUR SERVICES toggle for mobile */}
              <div>
                <div
                  className="cursor-pointer"
                  onClick={toggleServices}
                >
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

              <NavItem label="SUITS" />
              <NavItem label="CONTACTS" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// === Reusable Components ===

const NavItem = ({ label }) => (
  <div className="cursor-pointer hover:text-yellow-400 transition">{label}</div>
);

const Dropdown = () => (
  <div className="relative group cursor-pointer">
    <div className="hover:text-yellow-400 transition">HOME</div>
    <div className="absolute hidden group-hover:block mt-2 bg-gray-800 text-white rounded shadow-lg z-10 min-w-[200px]">
      <div className="p-3 hover:bg-gray-700">HOMEPAGE FULLWIDTH</div>
      <div className="p-3 hover:bg-gray-700">HOMEPAGE BOXED</div>
      <div className="p-3 hover:bg-gray-700">HOMEPAGE SHOP</div>
    </div>
  </div>
);

const ServicesDropdown = () => (
  <div className="relative group cursor-pointer">
    <div className="hover:text-yellow-400 transition">OUR SERVICES</div>
    <div className="absolute hidden group-hover:block mt-2 bg-gray-800 text-white rounded shadow-lg z-10 min-w-[200px]">
      <div className="p-3 hover:bg-gray-700">Uniform</div>
      <div className="p-3 hover:bg-gray-700">Bespoke Suits</div>
      <div className="p-3 hover:bg-gray-700">Tailored Trousers</div>
      <div className="p-3 hover:bg-gray-700">Custom Shirts</div>
      <div className="p-3 hover:bg-gray-700">Safari Suits</div>
      <div className="p-3 hover:bg-gray-700">Tuxedo Suits</div>
      <div className="p-3 hover:bg-gray-700">Fabrics</div>
    </div>
  </div>
);

export default Header2;