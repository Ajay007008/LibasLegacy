import React from 'react'
import img1 from '../assets/contactInfo/img1.jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiClock, FiSmartphone } from "react-icons/fi";



const contactInfo = () => {
  return (

  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
    

 {/* Image Section */}
        <div>
        <img src={img1} alt="Tailored Suit" className=" shadow-lg w-full h-120 object-cover" />
      </div>




      {/* Google Map */}
      <div>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1807.7822622286854!2d55.2275556!3d25.1176944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA3JzAzLjciTiA1NcKwMTMnMzkuMiJF!5e0!3m2!1sen!2sin!4v1718631123456"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>

{/* Contact Information */}
<div className="flex flex-col justify-start">
  <h2 className="text-4xl font-serif font-bold mb-6">CONTACT INFO</h2>
  <p className="text-gray-600 mb-4">
    Have a question? Our team is always ready to help. Feel free to come to us anytime —
    we are glad to see you at our studio.
  </p>

  <div className="space-y-5 text-gray-700">
    {/* Location */}
    <div className="flex items-start space-x-3">
      <HiOutlineLocationMarker className="text-yellow-600 text-2xl mt-1" />
      <span>Plot 369-207, Al Quoz Industrial Area 4, Dubai</span>
    </div>

    {/* Hours */}
    <div className="flex items-start space-x-3">
      <FiClock className="text-yellow-600 text-2xl mt-1" />
      <div>
        <p>Monday - Friday: 10 am - 10 pm</p>
        <p>Sunday: 11 am - 9 pm</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start space-x-3">
      <FiSmartphone className="text-yellow-600 text-2xl mt-1" />
      <span>123 - 456 - 7890</span>
    </div>
  </div>
  
</div>






        </div>
  )
}

export default contactInfo