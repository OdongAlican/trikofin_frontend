import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIndividualCustomers } from '../actions/individualCustomer';
import Navbar from './Navbar';
import UserAcces from '../images/bank.svg';

const Home = () => {
  const dispatch = useDispatch();
  const individualCustomers = useSelector(state => state.individualCustomersReducer);

  useEffect(() => {
    dispatch(fetchIndividualCustomers());
  }, []);

  console.log(individualCustomers.individualCustomers, 'inside data');
  return (
    <div className="home-section">
      <Navbar />
      <div className="welcome-page">
        <h1>Welcome To Tricofin</h1>
      </div>
      <div className="banking-logo">
        <img src={UserAcces} alt="Access User Portal" />
        <Link to="/individualcustomerform">Manage Users</Link>
      </div>
    </div>
  );
};

export default Home;
