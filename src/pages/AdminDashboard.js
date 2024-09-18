// src/pages/AdminDashboard.js
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="section-title">Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/inventory" className="block bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition">
          Manage Inventory
        </a>
        <a href="/orders" className="block bg-green-500 text-white p-6 rounded-lg shadow-lg hover:bg-green-600 transition">
          Manage Orders
        </a>
        <a href="/users" className="block bg-purple-500 text-white p-6 rounded-lg shadow-lg hover:bg-purple-600 transition">
          Manage Users
        </a>
        <a href="/reports" className="block bg-yellow-500 text-white p-6 rounded-lg shadow-lg hover:bg-yellow-600 transition">
          View Reports
        </a>
      </div>
    </div>
  );
};

export default AdminDashboard;
