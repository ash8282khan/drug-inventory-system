// src/pages/ShipmentList.js
import React, { useEffect, useState } from 'react';

const ShipmentList = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    // Fetch shipments from API
    setShipments([
      { shipmentId: 1, orderId: 1, status: 'In Transit' },
      { shipmentId: 2, orderId: 2, status: 'Delivered' },
    ]);
  }, []);

  return (
    <div>
      <h2>Shipment List</h2>
      <table>
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Order ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment, index) => (
            <tr key={index}>
              <td>{shipment.shipmentId}</td>
              <td>{shipment.orderId}</td>
              <td>{shipment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShipmentList;
