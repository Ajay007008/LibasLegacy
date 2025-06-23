import React from 'react';
import img1 from '../assets/WomenPage/img1.png';
import img2 from '../assets/WomenPage/img2.webp';
import img3 from '../assets/WomenPage/img3.png';
import img4 from '../assets/WomenPage/img4.jpg';
import img5 from '../assets/WomenPage/img5.jpg';
import img6 from '../assets/WomenPage/img6.jpg';


const WomenPage = () => {
  const data = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
  ];

  return (
    <div className="relative">
     
     
      {/* Top Heading */}
      <div className="bg-black/80 text-white py-2 text-center">
        <h1 className="text-xl font-serif font-semibold uppercase tracking-widest drop-shadow-lg">Women</h1>
        <p className="text-sm text-gray-300 italic tracking-wide">
          Explore Our Exclusive Bespoke Collection
        </p>
      </div>







      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {data.map((item, idx) => (
          <div key={idx} className="relative w-full h-screen overflow-hidden">
            <img
              src={item.img}
              alt={`Women's Suit ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm text-white text-justify leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>



      

         {/*Ladies Bespoke Business Suits Section */}
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
               Ladies Bespoke Business Suits
               </h2>
        
              <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
                 Choose from our collection of ladies bespoke suits to put your best foot forward and dress with intent. We provide numerous methods to capture your measurements in order to create your bespoke business suits.
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
                    Ladies Bespoke Designer Suits                    </h2>
                    <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                    From classically simple to the gloriously complex, above all we approach each commission as a unique design project, collaborating closely with our client to produce something exceptional.
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
                    Ladies Bespoke Shooting Suits
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                    We carry a vast selection of women’s bespoke country cloths from cavalry twill to corduroy and tweeds. And we can offer customers full shooting looks: from jackets and vests complete with gun pleats, patch and bellows pockets, through to shooting breeches and matching caps.                    </p>
                    
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

export default WomenPage;
