import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TicketPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { seats, busName = "KPN Travels", from = "Chennai", to = "Bangalore", date = "2025-09-18" } =
    location.state || {};

  const handlePrint = () => {
    window.print();
  };

  const handleSendEmail = () => {
    alert("Ticket will be sent to your registered email (to be integrated later).");
  };

  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-red-600 text-center mb-6">
          🎟️ Your Bus Ticket
        </h1>

        {/* Ticket Details */}
        <div className="border border-red-200 rounded-lg p-6 mb-6">
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Bus: <span className="text-red-600">{busName}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">From:</span> {from}
          </p>
          <p className="mb-2">
            <span className="font-semibold">To:</span> {to}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Date:</span> {date}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Seats:</span>{" "}
            {seats?.join(", ") || "Not selected"}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Passenger:</span> John Doe
          </p>
          <p className="mb-2">
            <span className="font-semibold">Ticket ID:</span>{" "}
            #{Math.floor(Math.random() * 1000000)}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrint}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Print Ticket
          </button>
          <button
            onClick={handleSendEmail}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Send via Email
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-red-600 underline hover:text-red-800"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
