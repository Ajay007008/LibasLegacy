import React from 'react';
import img1 from './about/img1.avif';   // background for About Us
import img2 from './about/img2.jpg';    
import img3a from './about/img3a.avif';    // image for Our Team section

import { Link } from "react-router-dom";



const About = () => {
  return (
    <>
      {/* ABOUT US SECTION */}
      <section
        className="relative bg-cover bg-center h-[600px] flex items-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="bg-black/50 absolute inset-0" />

        <div className="container relative z-10 mx-auto px-4 md:px-20">
          <div className="text-white max-w-2xl text-left">
            <h2 className="text-5xl font-serif mb-6">About Us</h2>

                  <p className="text-lg leading-relaxed mb-8">
                    At Lebas Legacy, every garment tells a story of heritage<br/> and elegance.
                    Our master tailors blend time-honored techniques<br /> with innovative design,
                    creating bespoke suits that redefine<br /> sophistication and celebrate your unique style.
                  </p>

        

      <Link
              to="/book"
              className="bg-[#1c2331] text-white px-8 py-3 tracking-widest text-sm hover:bg-[#1e1933] transition duration-300"
            >
              BOOK YOUR APPOINTMENT
            </Link>

          </div>
        </div>
      </section>

      {/* OUR HISTORY SECTION */}
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[600px]">
          <img
            src={img2}
            alt="Founders"
            className="object-top w-full h-full"
          />
        </div>


        <div className="md:w-1/2 bg-[#1c2331] text-white flex items-center p-8 md:p-16">
          <div>
            <h2 className="text-4xl font-serif mb-6">Our History</h2>
                <p className="text-lg leading-relaxed mb-4">
                        Established in 2015, Lebas Legacy was founded in Dubai with a vision<br />
                        to elevate bespoke tailoring across the region. Recognizing a need for<br />
                        a truly personalized and luxurious experience, the founders set out<br />
                        to craft garments that celebrate both heritage and contemporary style.
                      </p>
            <p className="text-lg leading-relaxed">
                    Since then, the brand has remained dedicated to delivering<br />
                    the finest tailored garments, blending timeless craftsmanship<br />
                    with contemporary design for the modern gentleman.
                  </p>
          </div>
        </div>
      </section>




      {/* OUR TEAM SECTION */}
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-[#1c2331] text-white flex items-center p-8 md:p-16">
          <div>
            <h2 className="text-4xl font-serif mb-6">Our Team</h2>
                <p className="text-lg leading-relaxed mb-4">
                    Bringing together diverse backgrounds and exceptional skills, the team at<br />
                    Lebas Legacy consists of dedicated professionals who are committed<br />
                    to delivering an unparalleled level of service and support<br />
                    throughout every step of the bespoke tailoring journey.
                  </p>
            <p className="text-lg leading-relaxed">
                    We take the time to truly listen to our clients, addressing their questions<br />
                    and offering expert guidance and support at every stage of the tailoring process.<br />
                    Whether you are visiting us for the first time or returning as a valued client,<br />
                    our team is dedicated to helping you discover the perfect ensemble for any occasion.
                  </p>

          </div>
        </div>
        <div className="md:w-1/2 h-[600px]">
          <img
            src={img3a}
            alt="Our Team"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

   


      





    </>
  );
};

export default About;
