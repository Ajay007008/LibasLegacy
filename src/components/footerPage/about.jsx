import React from 'react';
import img1 from './about/img1.avif';   // background for About Us
import img2 from './about/img2.jpg';    // image of founders for Our History
import img3 from './about/img3.jpg';    // image for Our Team section
import img4 from './about/img4.jpg';    // first team member
import img5 from './about/img5.jpg';    // second team member
import img6 from './about/img6.jpg';    // third team member

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
              Founded on a passion for impeccable tailoring, Lebas Legacy<br />
              blends traditional British tailoring with contemporary flair, crafting<br />
              bespoke suits that are sure to leave a lasting impression.
            </p>

            <button className="bg-[#1c2331] text-white px-8 py-3 tracking-widest text-sm hover:bg-[#1e1933] transition duration-300">
              BOOK YOUR APPOINTMENT
            </button>
          </div>
        </div>
      </section>

      {/* OUR HISTORY SECTION */}
      <section className="flex flex-col md:flex-row">
        <div className="md:w-1/2 h-[600px]">
          <img
            src={img2}
            alt="Founders"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 bg-[#1c2331] text-white flex items-center p-8 md:p-16">
          <div>
            <h2 className="text-4xl font-serif mb-6">Our History</h2>
            <p className="text-lg leading-relaxed mb-4">
             In 2017, the founders of Lebas Legacy came together with one key<br />
              focus in mind. Identifying a clear gap in the region for a premium<br />
              bespoke product with an exceptional level of service, they set out<br />
              to transform the way you experience tailoring in the UK.
            </p>
            <p className="text-lg leading-relaxed">
              Since then, the brand has been committed to providing the<br />
              highest quality of tailored garments, which combine traditional<br />
              craftsmanship with a modern, sartorial twist.
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
              With a wide variety of backgrounds and skill sets, the team at
              Lebas Legacy is a group of dedicated professionals who are
              committed to providing each client with an exceptional level
              of service and support throughout their tailoring journey.
            </p>
            <p className="text-lg leading-relaxed">
              We take the time to listen to our customers, answer their
              questions, and provide guidance and support throughout the
              entire tailoring process. Whether you’re a first-time customer
              or a long-time client, our team is here to help you find the
              perfect outfit for any event.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 h-[600px]">
          <img
            src={img3}
            alt="Our Team"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

   


         {/* MEET THE TEAM SECTION */}
      <section className="flex flex-col md:flex-row h-[600px] bg-white">
        {/* Left Text */}
        <div className="md:w-1/3 flex items-center justify-center p-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2F254D] leading-tight text-center md:text-left">
            Meet The<br />Team
          </h2>
        </div>

        {/* Right Images */}
        <div className="md:w-2/3 flex flex-row justify-center items-center">
          <div className="w-1/3 h-full">
            <img
              src={img4}
              alt="Team Member 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/3 h-full">
            <img
              src={img5}
              alt="Team Member 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-1/3 h-full">
            <img
              src={img6}
              alt="Team Member 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>





    </>
  );
};

export default About;
