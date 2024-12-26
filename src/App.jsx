import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PendingOrders from './PendingOrders'; // Your existing PendingOrders component
import ConfirmOrders from './ConfirmOrders'; // New component for Confirm Orders
import LandingPage from './LandingPage'; // New LandingPage component
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pending-orders" element={<PendingOrders />} />
        <Route path="/confirm-orders" element={<ConfirmOrders />} />
      </Routes>
    </Router>
  );
};

export default App;
