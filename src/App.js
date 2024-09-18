// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import HospitalDashboard from './pages/HospitalDashboard';
import VendorDashboard from './pages/VendorDashboard';
import InventoryOverview from './pages/InventoryOverview';
import AddDrug from './pages/AddDrug';
import EditDrug from './pages/EditDrug';
import OrderList from './pages/OrderList';
import NewOrder from './pages/NewOrder';
import ShipmentList from './pages/ShipmentList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/hospital-dashboard" element={<HospitalDashboard />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/inventory" element={<InventoryOverview />} />
        <Route path="/add-drug" element={<AddDrug />} />
        <Route path="/edit-drug/:id" element={<EditDrug />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/new-order" element={<NewOrder />} />
        <Route path="/shipments" element={<ShipmentList />} />
      </Routes>
    </Router>
  );
};

export default App;
