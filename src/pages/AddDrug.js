// src/pages/AddDrug.js
import React, { useState } from 'react';

const AddDrug = () => {
  const [drugName, setDrugName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDrug = { drugName, quantity, expirationDate };
    console.log('Drug Added:', newDrug);
  };

  return (
    <div>
      <h2>Add Drug</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Drug Name"
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="date"
          placeholder="Expiration Date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <button type="submit">Add Drug</button>
      </form>
    </div>
  );
};

export default AddDrug;
