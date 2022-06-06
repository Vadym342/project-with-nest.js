import { combineReducers } from '@reduxjs/toolkit';
import helperReducer from './helperReducer';
import orderReducer from './orderReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  helpers: helperReducer,
  order: orderReducer
});

export default rootReducer;