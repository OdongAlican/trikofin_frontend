import {
  FetchIndividualCustomersRequest,
  PostIndividualCustomersRequest,
  GetIndividualCustomersRequest,
} from '../utils/api';

export const FETCH_INDIVIDUAL_CUSTOMER_SUCCESS = 'FETCH_INDIVIDUAL_CUSTOMER_SUCCESS';
export const POST_INDIVIDUAL_CUSTOMER_SUCCESS = 'POST_INDIVIDUAL_CUSTOMER_SUCCESS';
export const GET_INDIVIDUAL_CUSTOMER_SUCCESS = 'GET_INDIVIDUAL_CUSTOMER_SUCCESS';

export const individualCustomersSuccessFetch = data => ({
  type: FETCH_INDIVIDUAL_CUSTOMER_SUCCESS,
  payload: data,
});

export const individualCustomersSuccessPost = data => ({
  type: POST_INDIVIDUAL_CUSTOMER_SUCCESS,
  payload: data,
});

export const individualCustomersSuccessGet = data => ({
  type: GET_INDIVIDUAL_CUSTOMER_SUCCESS,
  payload: data,
});

export const fetchIndividualCustomers = () => async dispatch => {
  const method = 'get';
  const path = '/api/Customers/GetIndividualCustomers';
  try {
    const response = await FetchIndividualCustomersRequest(method, path);
    dispatch(individualCustomersSuccessFetch(response.data));
  } catch (error) {
    console.log(error, 'post errors');
  }
};

export const postIndividualCustomers = (values, history) => async dispatch => {
  const data = {
    title: values.title,
    surName: values.surname.toUpperCase(),
    foreName1: values.forenameone.toUpperCase(),
    foreName2: values.forenametwo,
    foreName3: values.forenamethree,
    dateofbirth: values.birthday,
    genderID: values.gender,
    nationalityID: values.nationality,
    rAddress: values.residential.toUpperCase(),
    maritalStatusID: parseInt(values.status, 10),
    custTypeID: values.customer,
    riskProfileID: values.profile,
    phone1: values.phoneone,
    phone2: values.phonetwo,
    phone3: values.phonethree,
    emailID1: values.emailone,
    emailID2: values.emailtwo,
    createdOn: (new Date()).toISOString(),
    createdBy: 'BENVIK',
    modifiedOn: (new Date()).toISOString(),
    modifiedBy: 'BENVIK',
  };

  const method = 'post';
  const path = '/api/Customers/SaveIndividualCustomer';
  try {
    const response = await PostIndividualCustomersRequest(method, data, path);
    dispatch(individualCustomersSuccessPost(response.data));
    history.push(`/viewindividualcustomerform/${response.data.custID}`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleIndividualCustomer = CustId => async dispatch => {
  const method = 'get';
  const path = `/api/Customers/GetIndividualCustomer/${CustId}`;
  try {
    const response = await GetIndividualCustomersRequest(method, path);
    dispatch(individualCustomersSuccessGet(response.data));
  } catch (error) {
    console.log(error);
  }
};
