// src/pages/HospitalDashboard.js
import React from 'react';

const HospitalDashboard = () => {
  return (
    <div>
      <h2>Hospital Dashboard</h2>
      <ul>
        <li><a href="/inventory">View Inventory</a></li>
        <li><a href="/orders">Manage Orders</a></li>
        <li><a href="/shipments">Track Shipments</a></li>
      </ul>
    </div>
  );
};

export default HospitalDashboard;
