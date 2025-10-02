import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FinalizePayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const seats = location.state?.seats || [];
  const passengerDetails = location.state?.passengerDetails || [];

  const seatPrice = 500;
  const totalAmount = seats.length * seatPrice;
  const discount = (totalAmount * 2) / 100;
  const finalAmount = totalAmount - discount;

  // encode data into query string (for QR code)
  const qrData = encodeURIComponent(
    JSON.stringify({ seats, passengerDetails, amount: finalAmount })
  );

  // using goqr.me API to generate QR code as image
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`;

  // fallback simulate button
  const handleSimulateScan = () => {
    navigate("/ticket", {
      state: { seats, passengerDetails, amount: finalAmount },
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Finalize Payment
        </h1>
        <p className="mb-2">Seats Selected: {seats.join(", ")}</p>
        <p className="mb-2">Price per Seat: ₹{seatPrice}</p>
        <p className="mb-2">Total: ₹{totalAmount}</p>
        <p className="mb-2 text-green-600">
          Discount (2%): -₹{discount.toFixed(2)}
        </p>
        <p className="text-xl font-semibold text-blue-700 mb-6">
          Final Amount: ₹{finalAmount.toFixed(2)}
        </p>

        <div className="flex flex-col items-center">
          <img src={qrUrl} alt="QR Code" />
          <p className="mt-3 text-gray-500">
            Scan this QR with your phone to confirm payment
          </p>
        </div>

        <button
          onClick={handleSimulateScan}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Simulate Scan → Get Ticket
        </button>
      </div>
    </div>
  );
};

export default FinalizePayment;
