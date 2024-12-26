import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Your custom styles for the landing page

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Order Management</h1>
      <div className="buttons-container">
        <Link to="/pending-orders">
          <button className="option-btn">Pending Order Details</button>
        </Link>
        <Link to="/confirm-orders">
          <button className="option-btn">Confirm Order Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
