import React from "react";
import { useLocation } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const seats = location.state?.seats || [];

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Payment Page
        </h1>
        <p className="mb-2">Seats Selected:</p>
        <p className="font-semibold text-red-500 mb-6">
          {seats.join(", ") || "No seats selected"}
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
