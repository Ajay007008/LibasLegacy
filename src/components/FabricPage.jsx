import React from 'react';
import { Link } from 'react-router-dom';

import video1 from '../assets/FabricPage/Fabric1.mp4';
import img1 from '../assets/FabricPage/img1.JPG';
import img2 from '../assets/FabricPage/img2.jpeg';
import img3 from '../assets/FabricPage/img3.jpeg';
import img4 from '../assets/FabricPage/img4.jpg';
import img5 from '../assets/FabricPage/img5.jpg';
import img6 from '../assets/FabricPage/img6.jpg';
import img7 from '../assets/FabricPage/img7.jpg';
import img8 from '../assets/FabricPage/img8.jpg';
import img9 from '../assets/FabricPage/img9.jpg';
import img10 from '../assets/FabricPage/img10.jpg';
import img11 from '../assets/FabricPage/img11.jpg';

const FabricPage = () => {
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
        <div className="absolute top-0 left-0 w-full bg-black/50 text-white text-center py-4">
          <h1 className="text-2xl md:text-4xl font-serif font-semibold uppercase tracking-widest drop-shadow-lg">
            Bespoke Fabrics
          </h1>
          <p className="text-sm md:text-base text-gray-200 italic mt-1">
            Explore Our Signature Collection of Finest Fabrics
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-1 md:order-1 w-full md:w-1/2 h-80 md:h-[90vh] overflow-hidden">
          <img src={img1} alt="Tailored Suit In Progress" className="w-full h-full object-cover" />
        </div>
        <div className="order-2 md:order-2 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl font-serif font-medium mb-6">
            A Legacy Woven in the World’s Finest Mills
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
            From the soft drape of Super 150s wool to the subtle sheen of mohair blends and the breathable elegance of linen,
            each fabric we offer is hand-selected from the most prestigious mills in Italy and England.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-2 md:order-1 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Where Tradition Meets Tailoring
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            We source our fabrics from heritage mills like Vitale Barberis Canonico, Scabal, and Loro Piana —
            renowned for turning weaving into an art passed down through generations.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img2} alt="Fabric Patterns" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-1 md:order-1 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img3} alt="Tailor Details Closeup" className="w-full h-full object-cover" />
        </div>
        <div className="order-2 md:order-2 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Tradition, Thread by Thread
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            Our fabrics tell stories — of ancient looms, Alpine pastures, and families who have mastered their craft for centuries.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-2 md:order-1 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Engineered for the Modern Gentleman
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            Today’s world demands more from luxury. That’s why we offer cloths that don’t just look refined — they breathe, stretch, and move effortlessly with you.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img4} alt="Fabric Patterns" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Section 5 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-1 md:order-1 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img5} alt="Tailor Details Closeup" className="w-full h-full object-cover" />
        </div>
        <div className="order-2 md:order-2 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Italian Soul, Global Appeal
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            We collaborate with artisans who weave elegance into every fiber. Their signature lies in fabrics that feel weightless yet structured, smooth yet expressive — giving every suit the quiet confidence of true Italian tailoring.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-2 md:order-1 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            The British Standard of Elegance
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            There’s a reason the world looks to British tailoring for formality and tradition.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img6} alt="Fabric Patterns" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Section 7 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-1 md:order-1 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img7} alt="Tailor Details Closeup" className="w-full h-full object-cover" />
        </div>
        <div className="order-2 md:order-2 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Crafted to Be Remembered
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            Some fabrics whisper luxury; others command it. We choose only those that do both — materials that age with the grace of a well-told story.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-2 md:order-1 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Tailored for the Seasons
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            Luxury should feel right, year-round. That’s why our offerings evolve with the weather.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img8} alt="Fabric Patterns" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Section 9 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-1 md:order-1 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img9} alt="Tailor Details Closeup" className="w-full h-full object-cover" />
        </div>
        <div className="order-2 md:order-2 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Woven with Purpose, Chosen with Care
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            Before the needle meets the cloth, we invest in the source. Every fabric is the product of passion, tradition, and tireless refinement.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>

      {/* Section 10 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-2 md:order-1 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Quiet Luxury, Woven to Perfection
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            True luxury isn’t loud — it’s felt. Our fabrics embody subtle sophistication designed to be lived in and admired quietly.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
        <div className="order-1 md:order-2 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img10} alt="Fabric Patterns" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Section 11 */}
      <div className="flex flex-col md:flex-row w-full bg-[#1c2331] text-white">
        <div className="order-1 md:order-1 w-full md:w-1/2 h-80 md:h-[100vh] overflow-hidden">
          <img src={img11} alt="Tailor Details Closeup" className="w-full h-full object-cover" />
        </div>
        <div className="order-2 md:order-2 w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Designed by Nature, Perfected by Hand
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            There’s something unmistakable about the right fabric — the way it feels against the skin, moves with grace, and elevates presence.
          </p>
          <div className="w-fit">
            <Link to="/book" className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
              Book an Appointment →
            </Link>
            <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricPage;
