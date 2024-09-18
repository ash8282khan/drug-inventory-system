// src/pages/NewOrder.js
import React, { useState } from 'react';

const NewOrder = () => {
  const [drugName, setDrugName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { drugName, quantity };
    console.log('New Order Placed:', newOrder);
  };

  return (
    <div>
      <h2>Place New Order</h2>
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
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default NewOrder;
