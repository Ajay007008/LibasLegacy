import React from 'react';
import video1 from '../assets/AlterationPage/video5.mp4';
import video2 from '../assets/AlterationPage/video2.mp4';

import img1 from '../assets/AlterationPage/img1.jpeg';
import img3 from '../assets/AlterationPage/img3.jpg';

const AlterationPage = () => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* Video Section */}
      <div className="relative w-full h-screen">
        <video
          className="w-full h-full object-cover"
          src={video1}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Overlay Content Fixed to Top */}
        <div className="absolute top-0 left-0 w-full bg-black/50 text-white text-center py-4">
          <h1 className="text-2xl md:text-4xl font-serif font-semibold uppercase tracking-widest drop-shadow-lg">
          Redefining Fit
          </h1>
          <p className="text-sm md:text-base text-gray-200 italic mt-1">
          Because Every Inch Matters at Legas Legacy
</p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="w-full md:w-1/2 h-80 md:h-[90vh] overflow-hidden">
          <img
            src={img1}
            alt="Tailored Suit In Progress"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-2xl font-serif font-medium mb-6">
          A Personalized Experience to Refine Every Detail
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
          Alterations are not merely corrections — they are a continuation of the tailoring journey.
           In our studio, adjustments are treated with the same artistry and attention as a bespoke commission. 
           From the moment you step in, our specialists work closely with you to understand how your garment should 
           move with you, complement your posture, and reflect your personal style. It’s not just tailoring — 
           it’s an experience of refinement, ensuring every piece feels like a natural extension of you.
          </p>
          <div className="w-fit">
            <button className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </button>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>

      {/* Section 2 (Video instead of img2) */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
          The Art of the Perfect Fit
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
          True luxury lies in the details — and perfect fit is the final expression of craftsmanship. Whether you're refining the drape 
          of a jacket, shortening a hem, or reshaping a silhouette, our master tailors apply the same precision and care as a full bespoke commission. 
          Every adjustment is a quiet transformation, enhancing comfort, movement, and presence. Because when a garment fits flawlessly, 
          it doesn’t just look right — it feels like it was always meant to be yours.
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
            className="w-full h-full object-cover"
            src={video2}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img
            src={img3}
            alt="Tailor Details Closeup"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-2xl font-serif font-medium mb-6">
          Precision Alterations for the Modern Woman          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
          Every woman deserves a garment that moves with her — not against her. 
          Our expert alteration service ensures your suit, dress, or jacket fits not just your frame, but your presence. 
          From subtle nip-and-tucks to refined reshaping, each stitch honors the curves, confidence, and character of the woman who wears it.
           Because true elegance isn't bought — it's tailored.
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

export default AlterationPage;
