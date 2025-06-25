import React from 'react';
import video1 from '../assets/texudoPage/video1.mp4';
import video2 from '../assets/texudoPage/video2.mp4';
import video3 from '../assets/texudoPage/video3.mp4';
import video4 from '../assets/texudoPage/video4.mp4';

const TuxedosPage = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Video */}
      <div className="relative w-full h-screen">
        <video
          className="w-full h-full object-cover"
          src={video1}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute top-0 left-0 w-full bg-black/50 text-white text-center py-4">
          <h1 className="text-2xl md:text-4xl font-serif font-semibold uppercase tracking-widest drop-shadow-lg">
            Timeless Tuxedos
          </h1>
          <p className="text-sm md:text-base text-gray-200 italic mt-1">
            Elegance Tailored for Your Finest Moments
          </p>
        </div>
      </div>

      {/* Section 1 – Video2 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="w-full md:w-1/2 h-80 md:h-[90vh] overflow-hidden">
          <video
            src={video2}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-2xl font-serif font-medium mb-6">
            The Pinnacle of Formal Elegance
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
            From the red carpet to your most celebrated milestones, our bespoke tuxedos are crafted 
            to make a lasting impression. With sharp lines, luxurious fabrics, and meticulous detailing, 
            every piece is a statement of grace and power.
          </p>
          <div className="w-fit">
            <button className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </button>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>

      {/* Section 2 – Video3 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Redefined Black-Tie Tailoring
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            Whether it’s a wedding, gala, or exclusive event, our tuxedos embody tradition with 
            a modern edge. We sculpt the suit to your proportions, ensuring you move 
            confidently and command attention with every step.
          </p>
          <div className="w-fit">
            <button className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </button>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <video
            src={video3}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section 3 – Video4 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <video
            src={video4}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-2xl font-serif font-medium mb-6">
            Crafted for Ceremony. Designed for You.
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            A tuxedo should do more than fit — it should elevate. 
            Our bespoke service ensures every lapel, cuff, and stitch mirrors your taste, 
            stature, and sophistication. Because when you wear custom, 
            you don’t just show up — you arrive.
          </p>
          <div className="w-fit">
            <button className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </button>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuxedosPage;
