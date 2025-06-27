import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <div className="bg-[#1b1e28] text-white py-12 px-4 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif border-b border-gray-600 inline-block pb-4">
          PRIVACY POLICY
        </h1>
      </div>

      {/* Main Content */}
      <div className="px-6 py-10 md:px-20 max-w-5xl mx-auto space-y-6 leading-relaxed text-sm md:text-base">
        <p>This privacy notice for <strong>Lebas Legacy</strong> ("Company", "we", "us", or "our") describes how and why we collect, store, use, and/or share your information when you use our services ("Services"), such as:</p>

        <ul className="list-disc list-inside space-y-2">
          <li>Visiting our website <a href="https://lebaslegacy.com" className="text-[#B8954A] underline">https://lebaslegacy.com</a></li>
          <li>Engaging with us via sales, marketing, or events</li>
        </ul>

        <p>Questions or concerns? If you do not agree with our policies and practices, please do not use our Services. For questions, contact us at info@lebaslegacy.com.</p>

        <h2 className="text-2xl font-bold font-serif mt-10 text-[#1b1e28] text-center">SUMMARY OF KEY POINTS</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>We collect personal info like names, email, and phone when voluntarily provided.</li>
          <li>We do NOT process sensitive information.</li>
          <li>No data is received from third parties.</li>
          <li>We use your data to improve our services, secure our systems, and comply with law.</li>
          <li>We implement technical and organizational safeguards to protect your data.</li>
        </ul>

        <h2 className="text-xl font-bold font-serif mt-10">WHAT INFORMATION DO WE COLLECT?</h2>
        <p>We collect information that you provide voluntarily, including:</p>
        <ul className="list-disc list-inside">
          <li>Names</li>
          <li>Email addresses</li>
          <li>Phone numbers</li>
        </ul>
        <p>Automatically collected data includes IP, device/browser details, usage, and cookies.</p>

        <h2 className="text-xl font-bold font-serif mt-10">HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p>We process your data to deliver and improve services, communicate with you, and comply with laws.</p>

        <h2 className="text-xl font-bold font-serif mt-10">LEGAL BASES FOR PROCESSING</h2>
        <p>We process data with your consent, to fulfill legal obligations, or for vital interests.</p>

        <h2 className="text-xl font-bold font-serif mt-10">DATA SHARING</h2>
        <p>Data may be shared with third-party service providers under strict confidentiality and purpose restrictions.</p>

        <h2 className="text-xl font-bold font-serif mt-10">COOKIES</h2>
        <p>We use cookies and similar tech. Users can manage cookie preferences in browser settings.</p>

        <h2 className="text-xl font-bold font-serif mt-10">DATA RETENTION</h2>
        <p>We retain personal data only as long as necessary or legally required.</p>

        <h2 className="text-xl font-bold font-serif mt-10">CHILDREN'S PRIVACY</h2>
        <p>We do not knowingly collect data from users under 18. Contact us to report any such cases.</p>

        <h2 className="text-xl font-bold font-serif mt-10">YOUR PRIVACY RIGHTS</h2>
        <p>Depending on location, you may request access, correction, or deletion of your data.</p>

        <h2 className="text-xl font-bold font-serif mt-10">UPDATES</h2>
        <p>This notice may be updated to comply with laws. Changes will be posted here.</p>

        <h2 className="text-xl font-bold font-serif mt-10">CONTACT</h2>
        <p>Email: info@lebaslegacy.com<br />Address: Ibri House, Level 1, Office 7, Dubai, UAE</p>

        <h2 className="text-xl font-bold font-serif mt-10">PAYMENT PRIVACY POLICY</h2>
        <p>We do not store or share credit/debit card information. Visit <a href="https://lebaslegacy.com" className="text-[#B8954A] underline">lebaslegacy.com</a> for updates to these policies.</p>
      </div>
    </div>
  );
};

export default Privacy;
