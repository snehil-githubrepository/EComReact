import React from "react";

function QnA() {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Customer Q&A</h2>
      <div>
        {/* Replace with actual Q&A data */}
        <p className="font-medium">Q: Is this product waterproof?</p>
        <p className="text-gray-700">
          A: Yes, it is rated for water resistance.
        </p>
        <p className="font-medium mt-4">
          Q: Can this product be used outdoors?
        </p>
        <p className="text-gray-700">
          A: Absolutely, it is designed for both indoor and outdoor use.
        </p>
        <button className="text-sky-600 font-semibold mt-4">
          See more answered questions
        </button>
      </div>
    </div>
  );
}

export default QnA;
