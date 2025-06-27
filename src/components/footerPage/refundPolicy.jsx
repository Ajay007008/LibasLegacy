import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen py-12 px-6 md:px-20 text-white" style={{ backgroundColor: '#1b1e28' }}>
      <div className="bg-white text-black p-6 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">
          REFUND POLICY
        </h1>

        <div className="space-y-6 leading-relaxed text-sm md:text-base">
          <p>
            We accept returns within 7 days of receipt, only if their delivery packaging has not been opened or the products are damaged or the wrong product was delivered. Please notify us and return the box in its original packaging.
          </p>

          <p>
            In such instances, we will endeavour to send you another or refund the payment. We can only accept returns of products that have not been tampered with, are sealed, and remain in the original packaging.
          </p>

          <p>
            If all these conditions are met, please ship your products back to us using a registered courier service and we will issue a full refund.
          </p>

          <p>
            Please note that we reserve the right to refuse any returned shipments if the product has been used or tampered with.
          </p>

          <p>
            <strong>Shipping & Handling fees are non-refundable.</strong>
          </p>

          <p>
            Refunds will be done only through the Original Mode of Payment and will be processed within 10 to 45 days depending on the issuing bank of the credit card.
          </p>

          <h2 className="text-2xl font-bold font-serif mt-10 mb-4">CANCELLATION POLICY</h2>

          <p>
            Lebas Legacy has <strong>NO cancellation policy</strong>. Tailored suits are customised to the client’s requirements and measurements, therefore the client is encouraged to commit and decide fully before placing a custom suit order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
