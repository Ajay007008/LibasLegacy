import React from 'react'
import logo from "../assets/header/logo.png";

import suit1 from "../assets/header/suit1.avif"

import { FaPhoneAlt, FaEnvelope, FaShoppingCart } from "react-icons/fa";


const header = () => {
  return (

    <div className="relative w-full h-[1000px] bg-cover bg-no-repeat  bg-center" style={{ backgroundImage: `url(${suit1})` }}>

      {/* Top Bar */}
      
      <div className="absolute top-0 left-0 w-full z-10 flex justify-between items-center px-6 py-2 bg-black bg-opacity-60 text-white text-sm">
        
        



        {/* Left Side */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-yellow-500" />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-yellow-500" />
            <span>info@yoursite.com</span>
          </div>
        </div>


      {/* Right Side */}
      <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaShoppingCart className="text-yellow-500" />
            <span>0 items - $0.00</span>
          </div>
          <button className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-400 transition">
            MAKE AN APPOINTMENT
          </button>
        </div>
      </div>

 {/* Navigation Bar (just below top bar) */}
 <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
    <ul className="flex space-x-8 text-white uppercase tracking-widest text-sm font-light">
      <li className="text-yellow-500 border-b border-yellow-500 pb-1">Home</li>
      <li className="hover:text-yellow-500">Features</li>
      <li className="hover:text-yellow-500">About</li>
      <li className="hover:text-yellow-500">Suits</li>
      <li className="hover:text-yellow-500">News</li>
      <li className="hover:text-yellow-500">Contacts</li>
    </ul>
  </div>


 {/* Centered Logo */}
 <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={logo} alt="Logo" className="w-10" />
      </div>

      </div>
    
  
  );
};

export default header