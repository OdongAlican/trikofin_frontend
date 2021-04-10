import { combineReducers } from 'redux';
import individualCustomersReducer from './individualCustomers';

const rootReducer = combineReducers({
  individualCustomersReducer,
});

export default rootReducer;
