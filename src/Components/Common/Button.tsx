import React from "react";

interface ButtonProps {
  label : string;
  onClick: () => void;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = "" }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`bg-sky-700 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition duration-200 ${className}`}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
