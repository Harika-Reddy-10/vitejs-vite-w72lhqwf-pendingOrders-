import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './App.css';

const PendingOrders = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [orders, setOrders] = useState([
    {
      id: 1,
      mobileNumber: '0148240143',
      orderType: 'SERVICES & PERKS',
      lineStatus: 'OK - LINE READY TO GOTO',
      details: 'Additional details for order 1.',
    },
    {
      id: 2,
      mobileNumber: '6147904556',
      orderType: 'PLAN CHANGE',
      lineStatus: 'OK - LINE READY TO GOTO',
      details: 'Additional details for order 2.',
    },
    {
      id: 3,
      mobileNumber: '6147904585',
      orderType: 'PLAN CHANGE',
      lineStatus: 'OK - LINE READY TO GOTO',
      details: 'Additional details for order 3.',
    },
  ]);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedOrders(!selectAll ? orders.map((order) => order.id) : []);
  };

  const handleSelectOrder = (id) => {
    setSelectedOrders((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((orderId) => orderId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDelete = () => {
    if (selectedOrders.length > 0) {
      setShowConfirmation(true);
    }
  };

  const confirmDelete = () => {
    setOrders(orders.filter((order) => !selectedOrders.includes(order.id)));
    setSelectedOrders([]);
    setSelectAll(false);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  // Handle Back Button Click
  const handleBack = () => {
    navigate('/'); // Navigate to the landing page
  };

  if (showConfirmation) {
    return (
      <div className="confirmation-screen">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {selectedOrders.length} item(s)?</p>
        <div className="confirmation-actions">
          <button className="confirm-btn" onClick={confirmDelete}>
            Confirm Delete
          </button>
          <button className="cancel-btn" onClick={cancelDelete}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pending-orders">
      <h3>Pending Order View Details</h3>

      {/* Back Button */}
      <div
        className="back-btn"
        style={{ textAlign: 'right' }}
        onClick={handleBack}
      >
        Back to Home
      </div>

      <div className="order-info">
        <span>Total Lines: {orders.length}</span>
        <span>Order Number: 383317150</span>
        <span>Effective Date: 03/13/2024</span>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>Mobile Number</th>
            <th>Order Type</th>
            <th>Line Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <React.Fragment key={order.id}>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedOrders.includes(order.id)}
                    onChange={() => handleSelectOrder(order.id)}
                  />
                </td>
                <td>{order.mobileNumber}</td>
                <td>{order.orderType}</td>
                <td>{order.lineStatus}</td>
                <td>
                  <button
                    className="expand-btn"
                    onClick={() => toggleExpand(order.id)}
                  >
                    {expandedRow === order.id ? 'Collapse' : 'Expand'}
                  </button>
                </td>
              </tr>
              {/* Details Row */}
              <tr
                style={{
                  display: expandedRow === order.id ? 'table-row' : 'none',
                }}
              >
                <td colSpan="5">
                  <div className="order-details">{order.details}</div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="actions">
        {/* <button className="modify-btn">Modify</button> */}
        <button
          className="delete-btn"
          onClick={handleDelete}
          disabled={selectedOrders.length === 0}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};
export default PendingOrders;
