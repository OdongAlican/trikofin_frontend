import { FetchIndividualCustomersRequest } from '../utils/api';

export const FETCH_INDIVIDUAL_CUSTOMER_SUCCESS = 'FETCH_INDIVIDUAL_CUSTOMER_SUCCESS';

export const individualCustomersSuccessFetch = data => ({
  type: FETCH_INDIVIDUAL_CUSTOMER_SUCCESS,
  payload: data,
});

export const fetchPosts = () => async dispatch => {
  const method = 'get';
  const path = '/api/Customers/GetIndividualCustomers';
  try {
    const response = await FetchIndividualCustomersRequest(method, path);
    dispatch(individualCustomersSuccessFetch(response.data));
  } catch (error) {
    console.log(error, 'post errors');
  }
};