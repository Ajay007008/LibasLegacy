import React from 'react';
import { Link } from 'react-router-dom';



const ContactInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 p-8 text-black">
      
      {/* Left: Contact Info */}
      <div>
        <h2 className="text-4xl font-serif font-bold mb-6">CONTACT INFO</h2>
       

        <div className="space-y-2 text-gray-800">
          <div className="flex items-start space-x-3">
            <span>Capitol Compound ZAQ Warehouse No: 4, <br></br>Street No: 10,Near Emirates Glass Alquoz 4, Dubai</span>
            
          </div>

          <div className="flex items-start space-x-3 mt-3">
            <div>
              <p>Monday - Friday: 10 am - 10 pm</p>
              <p>Sunday: 11 am - 9 pm</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 mt-3">
            <span>+971543191992</span>
          </div>
        </div>
      </div>

      {/* Right: Footer-style Links and Newsletter */}
      <div className="grid grid-cols-1 sm:grid-cols-2 -ml-18 gap-10">
        {/* Left links */}
      <div className="space-y-1 font-light tracking-widest text-md">
       <h4 className="text-md font-serif font-bold text-gray-900 mb-4">QUICK LINKS</h4>
       <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:underline">ABOUT US</Link>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:underline block">CONTACT US</Link>
        <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:underline block">TERMS</Link>
        <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="hover:underline block">PRIVACY</Link>
        <Link to="/refund" onClick={() => window.scrollTo(0, 0)} className="hover:underline block">REFUND POLICY</Link>

     </div>

        {/* Email Subscription */}
        <div>
          <h3 className="text-lg sm:text-2xl  font-serif font-bold  mb-4">STAY INSPIRED</h3>
          <p className="text-gray-700 mb-6">
            Sign up to our email newsletter to keep up to date with our latest news and special offers
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="w-full px-4 py-2 bg-transparent border-b border-gray-400 focus:outline-none text-sm tracking-wider"
            />
            <button
              type="submit"
              className="bg-[#B8954A] hover:bg-[#a8863e] text-white px-6 py-2 tracking-widest"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
