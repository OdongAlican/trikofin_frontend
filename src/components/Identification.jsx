import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import UserAcces from '../images/bank.svg';

const Identification = () => (
  <>
    <Navbar />
    <div className="lower-form-section">

      <div className="lower-downer-section">
        <div className="left-inner-form-section">
          <Sidebar />
        </div>
        <div className="submit-form-top-section new-height">
          <div className="maintenance-customer-info">
            <span>Customer Maintenance Personal Information</span>
          </div>
          <div className="welcome-page">
            <h1>Identification</h1>
          </div>
          <div className="banking-logo">
            <img src={UserAcces} alt="Access User Portal" />
            <Link to="/individualcustomerform">Go Back Home</Link>
          </div>
        </div>
      </div>

    </div>
  </>
);

export default Identification;
