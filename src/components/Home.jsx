import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIndividualCustomers } from '../actions/individualCustomer';
import Navbar from './Navbar';

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
      <p>Home section</p>
    </div>
  );
};

export default Home;
