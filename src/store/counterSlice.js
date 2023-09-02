import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incrementby2: (state) => {
      state.value += 2;
    },
    decrementby2: (state) => {
      state.value -= 2;
    },
  },
});

export const { incrementby2, decrementby2 } = counterSlice.actions;

export default counterSlice.reducer;
