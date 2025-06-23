import React from 'react';
import img1 from '../assets/WeddingPage/img1.avif'
import img2 from '../assets/WeddingPage/img2.avif'
import img3 from '../assets/WeddingPage/img3.JPG'
import img4 from '../assets/WeddingPage/img4.avif'



const WeddingPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Fullscreen Image */}
      <img
        src={img1}
        alt="Wedding Suit"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content Fixed to Top */}
      <div className="absolute top-0 left-0 w-full bg-black/50 text-white text-center py-4">
        <h1 className="text-2xl md:text-4xl font-serif font-semibold uppercase tracking-widest drop-shadow-lg">Weddings</h1>
        <p className="text-sm md:text-base text-gray-200 italic mt-1">
          Discover Our Signature Wedding Bespoke Collection
        </p>
      </div>









               {/*Ladies Bespoke Business Suits Section */}
                 <div className="flex flex-col md:flex-row w-full h-auto md:h-[90vh] bg-[#1c2331] text-white">
                   {/* Left Image */}
                   <div className="w-full md:w-1/2 h-80 md:h-full overflow-hidden">
                     <img
                       src={img2}
                       alt="Tailored Suit In Progress"
                       className="w-full h-full object-cover scale" 
                     />
                   </div>
           
           
                   {/* Right Text Content */}
                   <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center bg-gradient-to-b from-[#1c2331] to-[#1c2331]">
                     <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                     Bespoke Wedding Suits
                     </h2>
              
                    <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed">
                    Your wedding suit is the most important suit that you will ever wear, which is why you need to feel comfortable and look stylish in it. 
                    At Legas Legacy, we have a wide selection of wedding suit ideas for you to choose from, whether you are the main man of the hour or a guest of honour. 
                    Discover sharply cut wedding suits in various styles, fabrics and colours to suit you and your wedding party at Legas Legacy.</p>
           
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
                          Bespoke Wedding Attire
                          </h2>
                          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                          Whether it’s a traditional morning dress, a formal lounge suit or something more colourful, 
                          Legas Legacy makes bespoke wedding suits in keeping with a customer’s style to make sure they look their absolute best on the big day.                          </p>
                          
                
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
                            src={img3}
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
                            src={img4}
                            alt="Tailor Details Closeup"
                            className="w-full h-full object-cover"
                          />
                        </div>
                
                        {/* Right Text Content */}
                        <div className="w-full md:w-1/2 px-8 py-12 md:px-16 md:py-24 flex flex-col justify-center bg-gradient-to-b from-[#1c2331] to-[#1c2331]">
                          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                          Bridal Bespoke Elegance
                          </h2>
                          <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                          A true once-in-a-lifetime experience, it’s the ideal opportunity to treat yourself to an amazing one-off creation for the occasion. By far the most popular colours for bespoke wedding suits are still the classic plain blue and grey shades.
                              <br></br>
                              <br></br>
                          My bespoke wedding suits take approximately 8 weeks to create so it’s a good idea to plan it early.
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

export default WeddingPage;