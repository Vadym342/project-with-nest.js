import { combineReducers } from '@reduxjs/toolkit';
import helperReducer from './helperReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  helpers: helperReducer,
});

export default rootReducer;