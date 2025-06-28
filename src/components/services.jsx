import React from 'react';
import { FaRulerCombined } from "react-icons/fa";
import { FaScissors, FaUserTie, FaHandshake, FaCheck } from "react-icons/fa6";

import img1 from '../assets/services/img4.png';
import img2 from '../assets/services/img5.png';
import img3 from '../assets/services/img6.png';

const processSteps = [
  {
    title: 'MEASUREMENT',
    icon: <FaRulerCombined size={32} className="text-white" />,
    image: img1,
    description:
      'Visit our store or book an appointment and our tailoring consultant will visit you at your preferred place to take your measurements, choose the fabric, model and note your custom requirements.',
  },
  {
    title: 'ADJUSTMENTS',
    icon: <FaScissors size={32} className="text-white" />,
    image: img2,
    description:
      'You will try on the skeleton of your suit for the first time. It is not fully constructed. Instead, it is basted together to allow us to mould the suit to you before it is completed.',
  },
  {
    title: 'READY TO GO',
    icon: <FaUserTie size={32} className="text-white" />,
    image: img3,
    description:
      'You will try on your fully constructed suit for the first time. Your tailoring consultant will assess whether the suit needs any alterations. If your suit doesn’t need alterations, you may take it home.',
  },
];

const coreValues = [
  {
    icon: <FaHandshake size={30} className="text-[#29494C]" />,
    label: 'TRUST',
  },
  {
    icon: <FaScissors size={30} className="text-[#29494C]" />,
    label: 'EXPERTISE',
  },
  {
    icon: <FaCheck size={30} className="text-[#29494C]" />,
    label: 'PERFECTION',
  },
];

const Services = () => {
  return (
    <section className="bg-white py-5 px-4 md:px-12 text-center">
      <h2 className="text-4xl font-serif text-[#002B36] mb-12 tracking-wide">OUR PROCESS</h2>

      {/* Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-300 rounded-lg shadow-sm p-6 pt-16 text-center min-h-[410px] w-80 mx-auto"
          >
            {/* Icon Circle */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#002B36] p-4 rounded-full shadow-lg">
              {step.icon}
            </div>

            {/* Step Title */}
            <h3 className="text-xl font-bold tracking-wide mb-1 mt-4">{step.title}</h3>
            <div className="w-10 h-[2px] bg-[#002B36] mx-auto mb-4"></div>

            {/* Step Image */}
            <img
              src={step.image}
              alt={`Step ${index + 1}`}
              className="w-8 h-8 mx-auto mb-4"
            />

            {/* Description */}
            <p className="text-md text-[#002b36] leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>



      {/* Culture Section */}
      <div className="mt-11">
        <p className="text-sm text-[#002b36] tracking-[0.2em] mb-2">THE CULTURE</p>
        <h2 className="text-4xl font-serif text-[#002B36] mb-6">HOW WE PURSUE PERFECTION</h2>

        {/* Divider with scissors */}
        <div className="flex justify-center items-center mb-10">
          <div className="border-t border-dashed border-[#002b36] w-48" />
          <FaScissors className="mx-4 text-[#002b36]" />
          <div className="border-t border-dashed border-[#B29277] w-48" />
        </div>

        {/* Icons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {coreValues.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 border-2 border-[#29494C] rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <p className="text-[#002b36] text-sm tracking-[0.2em] font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
