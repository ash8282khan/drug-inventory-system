// src/pages/EditDrug.js
import React, { useState, useEffect } from 'react';

const EditDrug = ({ match }) => {
  const [drug, setDrug] = useState({});

  useEffect(() => {
    // Fetch drug by ID (match.params.id)
    setDrug({ drugName: 'Paracetamol', quantity: 100, expirationDate: '2025-12-31' });
  }, [match.params.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Drug Updated:', drug);
  };

  return (
    <div>
      <h2>Edit Drug</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={drug.drugName}
          onChange={(e) => setDrug({ ...drug, drugName: e.target.value })}
        />
        <input
          type="number"
          value={drug.quantity}
          onChange={(e) => setDrug({ ...drug, quantity: e.target.value })}
        />
        <input
          type="date"
          value={drug.expirationDate}
          onChange={(e) => setDrug({ ...drug, expirationDate: e.target.value })}
        />
        <button type="submit">Update Drug</button>
      </form>
    </div>
  );
};

export default EditDrug;
