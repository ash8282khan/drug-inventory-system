// src/pages/AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        <li><a href="/inventory">Manage Inventory</a></li>
        <li><a href="/orders">Manage Orders</a></li>
        <li><a href="/users">Manage Users</a></li>
        <li><a href="/reports">View Reports</a></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
