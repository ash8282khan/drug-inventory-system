// src/components/Button.js
import React from 'react';

const Button = ({ children, onClick, color = 'blue' }) => {
  const buttonClasses = `bg-${color}-500 text-white py-2 px-4 rounded-md hover:bg-${color}-600 transition duration-200`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
