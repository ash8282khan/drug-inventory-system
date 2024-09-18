// src/pages/InventoryOverview.js
import React, { useEffect, useState } from 'react';

const InventoryOverview = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch inventory from API
    setInventory([
      { name: 'Paracetamol', quantity: 100, expirationDate: '2025-12-31' },
      { name: 'Ibuprofen', quantity: 50, expirationDate: '2024-05-10' },
    ]);
  }, []);

  return (
    <div>
      <h2>Inventory Overview</h2>
      <table>
        <thead>
          <tr>
            <th>Drug Name</th>
            <th>Quantity</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((drug, index) => (
            <tr key={index}>
              <td>{drug.name}</td>
              <td>{drug.quantity}</td>
              <td>{drug.expirationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryOverview;
