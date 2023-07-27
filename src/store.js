import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./slices/authSlice";
import watchReducer from "./slices/watchSlice";

const reducer = combineReducers({
  authState: authReducer,
  watchState: watchReducer,
});

const store = configureStore({
  reducer,
  middleware: [thunk],
});

export default store;
