import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    showCounter: true,
  },
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
    increase: (state, action)=>{
      state.counter = state.counter + action.counter
    },
    toggle: (state)=>{
      state.showCounter = !state.showCounter
    }
  },
});

export const { incrementby2, decrementby2, incrementby5, decrementby5, increase, toggle } = counterSlice.actions;

export default counterSlice.reducer;
