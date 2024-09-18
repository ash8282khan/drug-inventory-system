// src/components/ResponsiveButton.js
import React from 'react';

const ResponsiveButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 sm:bg-green-500 md:bg-purple-500 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-opacity-90"
    >
      {children}
    </button>
  );
};

export default ResponsiveButton;
