import React from 'react';
import { Link } from 'react-router-dom';

import img4 from '../assets/banner3/img4b.jpg';
import img5 from '../assets/banner3/img7a.png';
import img6 from '../assets/banner3/img8a.png';

const Banner3 = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <h2 className="text-4xl font-serif font-light">Discover Our Bespoke Services</h2>
        <p className="max-w-xl text-gray-700 text-sm">
          Discover the epitome of sartorial excellence at Libas Legacy. Our bespoke suits redefine sophistication, meticulously tailored by a single artisan. With precision in every cut, trim, stitch, and press, we set the standard for high-end elegance.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {/* Card 1 */}
        <div className="flex flex-col h-full">
          <img src={img4} alt="Mens Bespoke Suits" className="w-full h-[550px] object-contain" />
          <div className="flex flex-col flex-grow mt-6">
            <h3 className="text-lg font-medium mb-2">Mens Bespoke Suits</h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">
              At Libas Legacy, we believe that every man deserves a suit that is tailored to his unique style and body shape. Our bespoke process allows you to customise every detail, ensuring a perfect fit and a suit that reflects your individuality.
            </p>
            <Link
              to="/men" onClick={() => window.scrollTo(0, 0)}
              className="text-xs uppercase tracking-widest border-b border-black hover:text-[#820D23] transition self-start"
            >
              Explore Mens Bespoke Suits
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col h-full">
          <img src={img5} alt="Ladies Bespoke Suits" className="w-full h-[550px] object-contain" />
          <div className="flex flex-col flex-grow mt-6">
            <h3 className="text-lg font-medium mb-2">Ladies Bespoke Suits</h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">
              Our ladies bespoke tailoring lets us create you a stylish, fully bespoke wardrobe that’s exclusively designed for you and your unique lifestyle.
              
            </p>
            <Link
              to="/women" onClick={() => window.scrollTo(0, 0)}
              className="text-xs uppercase tracking-widest border-b border-black hover:text-[#820D23] transition self-start"
            >
              Explore Ladies Bespoke Suits
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col h-full">
          <img src={img6} alt="Remote Suit Service" className="w-full h-[550px] object-contain" />
          <div className="flex flex-col flex-grow mt-6">
            <h3 className="text-lg font-medium mb-2">Remote Suit Service</h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">
              With decades of expertise, Libas Legacy offers a superior experience for those seeking bespoke garments but unable to visit in person. Our remote suit service is tailored to meet your unique style needs and preferences.
            </p>
            <Link to="/tuxedos" onClick={() => window.scrollTo(0, 0)}
                    className="text-xs uppercase tracking-widest border-b border-black hover:text-[#820D23] transition self-start">
                          Explore Remote Suit Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
