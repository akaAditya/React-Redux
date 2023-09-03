import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    incrementby2: (state) => {
      state.counter += 2;
    },
    decrementby2: (state) => {
      state.counter -= 2;
    },
    incrementby5: (state) => {
      state.counter += 5;
    },
    decrementby5: (state) => {
      state.counter -= 5;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const {
  incrementby2,
  decrementby2,
  incrementby5,
  decrementby5,
  increase,
  toggle,
} = counterSlice.actions;
export const { login, logout } = authSlice.actions;
export const counterReducer = counterSlice.reducer;
export const authReducer = authSlice.reducer;
