import React from "react";

function Button({ label, onClick }) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="bg-sky-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition duration-200"
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
