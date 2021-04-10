import { FETCH_INDIVIDUAL_CUSTOMER_SUCCESS } from '../actions/individualCustomer';

const initialState = {
  individualCustomers: [],
  error: '',
  loading: false,
};

const individualCustomersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INDIVIDUAL_CUSTOMER_SUCCESS:
      return {
        ...state,
        individualCustomers: action.payload,
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default individualCustomersReducer;
