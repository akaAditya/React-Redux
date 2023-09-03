import { configureStore } from "@reduxjs/toolkit";
import { authReducer, counterReducer } from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
