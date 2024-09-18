// src/components/FormInput.js
import React from 'react';

const FormInput = ({ label, value, onChange, type = 'text', placeholder }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input"
      />
    </div>
  );
};

export default FormInput;
