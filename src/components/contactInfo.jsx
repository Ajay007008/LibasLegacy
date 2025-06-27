import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10 text-black">
      
      {/* Left: Contact Info */}
      <div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">CONTACT INFO</h2>

        <div className="space-y-4 text-gray-800 text-sm sm:text-base">
          <div>
            <p>Capitol Compound ZAQ Warehouse No: 4,</p>
            <p>Street No: 10, Near Emirates Glass</p>
            <p>Alquoz 4, Dubai</p>
          </div>

          <div>
            <p>Monday - Friday: 10 am - 10 pm</p>
            <p>Sunday: 11 am - 9 pm</p>
          </div>

          <div>
            <p>+971543191992</p>
          </div>
        </div>
      </div>

      {/* Right: Quick Links and Newsletter */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        
        {/* Quick Links */}
        <div className="space-y-2 text-sm sm:text-base tracking-wider">
          <h4 className="text-md font-serif font-bold text-gray-900 mb-3">QUICK LINKS</h4>
          <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:underline block">ABOUT US</Link>
          <a href="tel:+971543191992" className="hover:underline block" aria-label="Call Now">CONTACT US</a>          <Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:underline block">TERMS</Link>
          <Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="hover:underline block">PRIVACY</Link>
          <Link to="/refund" onClick={() => window.scrollTo(0, 0)} className="hover:underline block">REFUND POLICY</Link>
        </div>

        {/* Email Subscription */}
        <div>
          <h3 className="text-lg sm:text-2xl font-serif font-bold mb-4">STAY INSPIRED</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
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
              className="bg-[#B8954A] hover:bg-[#a8863e] text-white px-6 py-2 tracking-widest text-sm"
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
