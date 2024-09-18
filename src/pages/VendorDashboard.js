// src/pages/VendorDashboard.js
import React from 'react';

const VendorDashboard = () => {
  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <ul>
        <li><a href="/incoming-orders">View Incoming Orders</a></li>
        <li><a href="/shipments">Manage Shipments</a></li>
        <li><a href="/performance">Monitor Performance</a></li>
      </ul>
    </div>
  );
};

export default VendorDashboard;
