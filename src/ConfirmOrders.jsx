import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ConfirmOrders.css';

const ConfirmOrders = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Handle Back Button Click
  const handleBack = () => {
    navigate('/'); // Navigate to the landing page
  };

  return (
    <div className="confirm-orders">
      <h2>Confirm Order Details</h2>
      <p>This is the placeholder for the Confirm Order Details page.</p>

      {/* Back Button */}
      <button className="back-btn" onClick={handleBack}>
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmOrders;
