import React from 'react';

import video from '../assets/WomenPage/video.mp4'
import img1 from '../assets/WomenPage/img1.png';
import img2 from '../assets/WomenPage/img2.webp';
import img3 from '../assets/WomenPage/img3.png';
import img4 from '../assets/WomenPage/img4.jpg';
import img5 from '../assets/WomenPage/img5.jpg';
import img6 from '../assets/WomenPage/img6.jpg';


import img7 from '../assets/WomenPage/img7.jpg';
import img8 from '../assets/WomenPage/img8.jpg';
import img9 from '../assets/WomenPage/img9.jpg';





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
     
     
{/* Fullscreen Video Banner */}
<div className="relative w-full h-[850px] overflow-hidden">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src={video}
    autoPlay
    muted
    loop
    playsInline
  />
<div className="absolute top-0 left-0 w-full bg-black/50 text-white text-center py-4">
        <h1 className="text-2xl md:text-4xl font-serif font-semibold uppercase tracking-widest drop-shadow-lg">
        Suits for Her
        </h1>
        <p className="text-sm md:text-base text-gray-200 italic mt-1">  
        Where Timeless Craft Meets the Modern Woman’s Wardrobe
             </p>
      </div>


</div>




<div className="grid grid-cols-1 md:grid-cols-3 w-full">
  {[img1, img2, img3].map((image, idx) => (
    <div key={idx} className="relative w-full h-[80vh] overflow-hidden">
      <img
        src={image}
        alt={`Women's Suit ${idx + 1}`}
        className={`w-full h-full object-cover ${idx === 0 || idx === 1 ? 'object-top' : ''}`}
      />
      <div className="absolute bottom-0 w-full z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
        <p className="text-sm text-white text-justify leading-relaxed"></p>
      </div>
    </div>
  ))}
</div>




                 {/*Ladies Bespoke Dress*/}
           <div className="flex flex-col md:flex-row w-full h-auto md:h-[90vh] bg-[#1c2331] text-white">
             {/* Left Image */}
             <div className="w-full md:w-1/2 h-80 md:h-full overflow-hidden">
               <img
                 src={img7}
                 alt="Tailored Suit In Progress"
                 className="w-full h-full object-cover scale" 
               />
             </div>
     
     
             {/* Right Text Content */}
             <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center bg-gradient-to-b from-[#1c2331] to-[#1c2331]">
               <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                      Timeless Bespoke Dresses            
                      </h2>
        
              <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
                  At Lebas Legacy, every bespoke dress is a reflection of elegance, precision, and personal style. Whether you seek a statement piece for a formal event or refined sophistication for daily wear, our artisans craft dresses tailored to your unique measurements and preferences.
                  From luxurious fabrics to couture-level finishes, we ensure each dress tells your story — beautifully and impeccably.                 
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
                          Elegantly Tailored Skirts

                                </h2>
                    <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                              Experience the art of custom tailoring with our bespoke skirts — crafted to complement your silhouette and elevate your wardrobe. 
                              At Lebas Legacy, we blend refined design with luxurious fabrics to create skirts that move with grace and confidence.
                               From classic pencil cuts to flowing A-lines, each piece is made-to-measure with meticulous attention to detail, ensuring timeless elegance with every wear.
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
                      src={img8}
                      alt="Fabric Patterns"
                      className="w-full h-full object-cover"
                    />
                  </div>
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





         {/* Collaboration and Experience Section */}
                 <div className="flex flex-col md:flex-row w-full h-auto md:h-[100vh] bg-[#1c2331] text-white">
                  {/* Left Text Content */}
                  <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center bg-gradient-to-b from-[#1c2331] to-[#1c2331]">
                    <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                    Signature Styles. Designed for You.                    </h2>
                    <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                      Rooted in tradition and refined for the modern woman, our bespoke suits embody the perfect balance between heritage and innovation. 
                      At Lebas Legacy, every stitch tells a story—crafted for comfort, confidence, and an enduring sense of style.


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
                      src={img9}
                      alt="Fabric Patterns"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
          







      
    </div>
  );
};

export default WomenPage;
