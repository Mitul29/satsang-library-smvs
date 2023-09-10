import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./slice/authSlice";
import baseAPI from "./api/baseApi";

const rootReducer = combineReducers({
  auth: authReducer,
  [baseAPI.reducerPath]: baseAPI.reducer,
});

export default rootReducer;
