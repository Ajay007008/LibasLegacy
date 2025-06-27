import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section with Dark Background */}
      <div className="bg-[#1b1e28] text-white py-12 px-4 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif border-b border-gray-600 inline-block pb-4">
          TERMS AND CONDITIONS
        </h1>
      </div>

      {/* Main White Section */}
      <div className="px-6 py-10 md:px-20 max-w-5xl mx-auto leading-relaxed text-sm md:text-base space-y-6">
        <p>
          <strong>Lebas Legacy Garments Trading LLC</strong> maintains the 
          <a href="https://lebaslegacy.com" className="text-[#B8954A] underline ml-1">https://lebaslegacy.com</a> Website (“Site”).
        </p>

        <p>
          United Arab Emirates is our country of domicile and the governing law is the local law of the UAE.
        </p>

        <p>
          Any purchase, dispute or claim arising out of or in connection with this website shall be governed and construed in accordance with the laws of UAE.
        </p>

        <p>
          Visa or MasterCard debit and credit cards in AED will be accepted for payment.
        </p>

        <p>
          The displayed price and currency at the checkout page will match the amount shown on the transaction receipt and will be charged in your card's currency.
        </p>

        <p>
          We will not trade with or provide any services to OFAC-sanctioned countries.
        </p>

        <p>
          Customers under the age of 18 shall not register or transact on the website.
        </p>

        <p>
          Cardholders must retain a copy of transaction records and all policies and rules of Lebas Legacy.
        </p>

        <p>
          Users are responsible for maintaining the confidentiality of their account.
        </p>

        <h2 className="text-2xl font-bold font-serif mt-10 mb-4 text-[#1b1e28] text-center">DELIVERY POLICY</h2>

        <p>
          Lebas Legacy delivers products both within the UAE and internationally. Deliveries are fulfilled by third-party couriers.
        </p>

        <p>
          Delivery within UAE cities typically takes 1–2 working days. International delivery may take between 4–10 working days depending on the destination.
        </p>

        <p>
          UAE deliveries are charged at a flat rate of AED 100. International delivery fees vary based on country and location.
        </p>

        <p>
          To avoid delivery delays, please provide a complete and accurate address along with active contact details.
        </p>

        <h2 className="text-2xl font-bold font-serif mt-10 mb-4 text-[#1b1e28] text-center">PAYMENT CONFIRMATION</h2>

        <p>
          A confirmation notice will be sent to the customer via email within 24 hours of successful payment receipt.
        </p>
      </div>
    </div>
  );
};

export default Terms;
