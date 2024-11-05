import React, { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-30 bg-green-600 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300">
      {message}
    </div>
  );
};

export default Toast;
