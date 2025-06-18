import React from 'react'

import img1 from "../assets/services/img1.jpg";
import img2 from "../assets/services/img2.jpg";
import img3 from "../assets/services/img3.jpg";
import img4 from "../assets/services/img4.jpg";


const servicesData = [
    {
      image: img1,
      title: "Custom Accessories",
      description:
        "We have a wide range of bow ties which fit everyday fashion as well as special occasions",
    },
    {
      image: img2,
      title: "Custom Tailoring",
      description:
        "You can choose all details you want, from buttons to pockets and lapels, we can do everything.",
    },
    {
      image: img3,
      title: "Suit Resizing",
      description:
        "Each our suit is made to your exact measurements and fit your specific body type",
    },
    {
      image: img4,
      title: "Wedding Services",
      description:
        "You and your groomsmen deserve the sharpest suits. Let us help you create suits for your day.",
    },
  ];
  
  const services = () => {
    return (
      <section className="w-full bg-[#FAF9F7] py-20 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-12">
            <h3 className="text-sm tracking-widest text-[#B29277] mb-2">OUR SERVICES</h3>
            <div className="w-20 h-[1px] bg-[#B29277] mx-auto mb-2" />
          </div>
  
          {/* Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {servicesData.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-40 h-40 object-cover rounded-full mb-6"
                />
                <h4 className="text-xl font-serif  uppercase mb-4 tracking-wide">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 mb-6 max-w-[220px]">
                  {service.description}
                </p>
                <button className="border border-[#B29277] text-[#B29277] px-6 py-2 text-sm uppercase tracking-widest hover:bg-[#B29277] hover:text-white transition">
                  Discover
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default services;