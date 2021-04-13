/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */

import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchCustomer = () => {
  const [searchedCustomer, setSearchedCustomer] = useState('');
  const [finalSortedList, setFinalSortedList] = useState([]);
  const [testState, settestState] = useState([]);
  const sortedCustomersList = [];

  const searchIndividualCustomer = e => {
    const { value } = e.target;
    displaySortedList(testState, value);
    setSearchedCustomer(value);
  };

  useEffect(async () => {
    console.log('inside useeffect timer');
    try {
      const response = await axios.get('https://tricoapi.azurewebsites.net/api/Customers/GetIndividualCustomers');
      settestState(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const displaySortedList = (data, value) => {
    console.log(data, value);
    data.forEach(customer => {
      Object.values(customer).forEach(element => {
        if (isNaN(element)) {
          if (element.indexOf(value.toLocaleUpperCase()) !== -1) {
            sortedCustomersList.push(customer);
          }
        }
      });
    });

    setFinalSortedList(sortedCustomersList);
  };

  return {
    searchIndividualCustomer,
    searchedCustomer,
    finalSortedList,
  };
};

export default SearchCustomer;
