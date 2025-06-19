import React from 'react'
import img1 from '../assets/header2/retina-logo-1.webp';
import img from '../assets/header2/logo.png';
import img3 from '../assets/header2/logo3.png';

import img2 from '../assets/header2/suit1.avif';



const header2 = () => {
  return (
 <div className="head ">
      
        <div className="w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${img2})` }}>          <div className="secondnav flex justify-around mx-12 text-center items-center text-white relative">
            {/* Dropdown Wrapper */}
            <div className="relative group">
              <div className="element p-3 cursor-pointer">HOME</div>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-1 hidden group-hover:block bg-gray-800 text-white shadow-md rounded z-10">
                <div className="p-2 hover:bg-gray-700">HOMEPAGE FULLWIDTH</div>
                <div className="p-2 hover:bg-gray-700">HOMEPAGE BOXED</div>
                <div className="p-2 hover:bg-gray-700">HOMEPAGE SHOP</div>
              </div>
            </div>

            <div className="mark">|</div>
            <div className="element p-3">FEATURE</div>
            <div className="mark">|</div>
            <div className="element p-3">ABOUT</div>
            <div className="mark">|</div>
            <div className="element p-3">NEWS</div>
            <div className="mark">|</div>
            <div className="element p-3">SUITS</div>
            <div className="mark">|</div>
            <div className="element p-3">CONTACTS</div>
          </div>
        </div>
        
      </div>  )
}

export default header2