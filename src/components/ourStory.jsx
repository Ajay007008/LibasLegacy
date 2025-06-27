import React from 'react';
import img1 from '../assets/ourStory/img1.png';

const OurStory = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Main 2-column Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2 px-2 text-center md:text-left">
          <h2 className="text-3xl font-serif sm:text-4xl md:text-5xl font-bold mb-6">OUR STORY</h2>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Established in 1986, our journey began with a passion for tailoring and vision for timeless
            elegance. Over the decades, we've preserved craftsmanship while embracing innovation, making
            every stitch tell a story of heritage and excellence.
            <br /><br />
            From our humble beginnings, we have evolved into a symbol of refined sophistication—where
            classic design meets modern sensibilities. Our artisans, guided by tradition yet inspired by
            the future, pour dedication into every detail, ensuring that each garment not only fits
            impeccably but also resonates with character.
            <br /><br />
            With a commitment to sustainability, personalized service, and timeless style, we continue
            to redefine what it means to dress with distinction.
          </p>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={img1}
            alt="Our Story"
            className="w-full max-w-[320px] h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-16 flex flex-col items-center">
        {/* Dots */}
        <div className="flex items-center justify-center space-x-6 mb-4">
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
          <div className="w-4 h-4 bg-black rotate-45 transform rounded-sm" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
          <div className="w-3 h-3 bg-gray-400 rounded-full" />
        </div>

        {/* Years */}
        <div className="flex justify-center space-x-8 sm:space-x-12 md:space-x-16 text-sm sm:text-base text-gray-600">
          <span>1986</span>
          <span>1987</span>
          <span className="font-bold text-black">1988</span>
          <span>1989</span>
          <span>1990</span>
        </div>
      </div>
    </section>
  );
};

export default OurStory;