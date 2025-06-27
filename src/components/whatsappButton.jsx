import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


const whatsappButton = () => {
  return (
<a
      href="https://wa.me/971543191992"  // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-20 bottom-20 bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50"
      aria-label="WhatsApp Chat"
    >
      <FaWhatsapp className="w-9 h-9" />
    </a>  )
}

export default whatsappButton