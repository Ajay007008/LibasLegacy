import React from 'react';
import img1 from '../assets/MenPage/img1.webp';
import img2 from '../assets/MenPage/img5.webp';
import img4 from '../assets/MenPage/img4b.JPG';

import img3 from '../assets/MenPage/img4.webp';
import img5 from '../assets/MenPage/img5.webp';
import img6 from '../assets/MenPage/img6.webp';

const MenPage = () => {
  const data = [
    {
      img: img1,
      text: `This peacoat is inspired by 'Legas Legacy' history as a tailor to the Royal Navy, but nonetheless looks modern and clean. With its rounded barrel silhouette, stand-and-fall collar and side slip pockets it feels tailored yet casual.`,
    },
    {
      img: img2,
      text: `This Alpine Jacket is designed as a tailored solution for après ski. It is cut in pure woollen cloth with a technical ‘storm system’ treatment to ensure that it is fully waterproofed, and the jacket is quilted for additional warmth.`,
    },
    {
      img: img3,
      text: `A recent experiment, this interpretation of a traditional cut uses a wool, silk and linen cloth for a rugged, masculine look, with soft shoulders and distinctive side pockets. It is an effortless design and easy to wear.`,
    },
  ];

  return (
    <div className="relative">
      {/* Top Heading */}
      <div className="absolute top-0 left-0 w-full z-20 bg-black/50 text-white py-1 text-center">
        <h1 className="text-xl font-serif font-semibold uppercase tracking-widest drop-shadow-lg">Men</h1>
        <p className="text-sm text-gray-300 italic tracking-wide">
          Explore Our Exclusive Bespoke Collection
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {data.map((item, idx) => (
          <div key={idx} className="relative w-full h-screen overflow-hidden">
            <img src={item.img} alt={`Suit ${idx + 1}`} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm text-white text-justify leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>


      

      {/* Legas Legacy' Reputation Section */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[90vh] bg-[#1c2331] text-white">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-80 md:h-full overflow-hidden">
          <img
            src={img4}
            alt="Tailored Suit In Progress"
            className="w-full h-full object-cover scale" 
          />
        </div>


        {/* Right Text Content */}
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center bg-gradient-to-b from-[#1c2331] to-[#1c2331]">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Legas &amp; Legacy' Reputation:
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            Our aim is to maintain the highest standards, from the hand-crafted quality of the tailoring, the individual cut and fit, to the timeless style and design.
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
            It is the unique relationship between our customers, cutters and tailors that drives our craft forward, and from which our reputation has been built. This consistency is achieved by the passing down of knowledge from our experienced tailors in our workshop and constantly perfecting the process of bespoke tailoring while being alert to the requirements and wishes of our customers.
          </p>

          {/* Button */}
          <div className="w-fit">
              <button className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
                Book an Appointment →
              </button>
              <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>
      </div>





       {/* Collaboration and Experience Section */}
       <div className="flex flex-col md:flex-row w-full h-auto md:h-[100vh] bg-[#1c2331] text-white">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center bg-gradient-to-b from-[#1c2331] to-[#1c2331]">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Collaboration and Experience:
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            The bespoke department is situated in-house at our flagship shop at No.1 Savile Row.
            Customers are met by their cutter, who’ll guide them through cloth choices, design of garments and take measurements.
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            Our collections of cloth range from luxurious cashmeres for overcoats to the lightest breathable wools for warmer climates, alongside a growing range of more rugged but soft linens, jersey, and cottons for the more versatile contemporary garments.
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
            The cutter will then create a personal paper pattern by hand, from which the cloth will be struck. This is passed on to the tailor who’ll start to construct the garments with the required fittings needed to complete the first commission. The pattern is updated after each fitting to ensure accuracy; it also means that subsequent orders will require fewer fittings.
          </p>

          {/* Button */}
          <div className="w-fit">
              <button className="uppercase text-xs tracking-widest hover:text-[#D0A85C] transition duration-300">
                Book an Appointment →
              </button>
              <div className="mt-2 border-b border-white w-full"></div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-80 md:h-full overflow-hidden">
          <img
            src={img5}
            alt="Fabric Patterns"
            className="w-full h-full object-cover"
          />
        </div>
      </div>





            {/* Attention to Details and Heritage Section */}
            <div className="flex flex-col md:flex-row w-full h-auto md:h-[100vh] bg-[#1c2331] text-white">
        {/* Left Image */}
        <div className="w-full md:w-1/2 h-80 md:h-full overflow-hidden">
          <img
            src={img6}
            alt="Tailor Details Closeup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center bg-gradient-to-b from-[#1c2331] to-[#1c2331]">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
            Attention to Details and Heritage:
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
            To maintain the consistency of this process, the garments are made in the workshop at No.1 Savile Row. The cutters, tailors, and finishers all work closely together as each specialised skill in creating a bespoke garment is intimately related.
          </p>
          <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
            From the measuring of the body, the design of a garment, how the pattern is created, to choices of cloth and construction. The tailor will mould and sculpt the cloth by shrinking, stretching, using multiple sewing techniques to create a unique three-dimensional garment, which is finished by an expert hand with the smallest most delicate but durable silk thread hand finishing.
          </p>

          {/* Button */}
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

export default MenPage;
