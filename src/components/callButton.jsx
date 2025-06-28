import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  return (
    <a
      href="tel:+971543191992"
      className="fixed left-10 md:left-20 bottom-20 bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-700 transition z-50"
      aria-label="Call Now"
    >
      <FaPhoneAlt className="w-5 h-5" />
    </a>
  );
}

export default CallButton;
