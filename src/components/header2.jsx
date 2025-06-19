import React, { useState } from 'react';
import img2 from '../assets/header2/suit1.avif';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


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
            <div className="text-2xl font-bold">LIBAS LEGACY</div>

            {/* Hamburger - Mobile Only */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Menu - Desktop */}
            <div className="hidden md:flex space-x-6 items-center">
              <Dropdown />
              <NavItem label="FEATURE" />
              <NavItem label="ABOUT" />
              <NavItem label="NEWS" />
              <NavItem label="SUITS" />
              <NavItem label="CONTACTS" />
            </div>
          </div>

          {/* Menu - Mobile */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-black/70 p-4 rounded-lg space-y-4 text-white">
              <Dropdown />
              <NavItem label="FEATURE" />
              <NavItem label="ABOUT" />
              <NavItem label="NEWS" />
              <NavItem label="SUITS" />
              <NavItem label="CONTACTS" />
            </div>
          )}
        </div>
      </div>
    </div>
      
    );
};

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

export default Header2