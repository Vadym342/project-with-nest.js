import { combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import { helperReducer } from './helperReducer';


const rootReducer = combineReducers({
  user: userReducer,
  helpers: helperReducer,
});

export default rootReducer;