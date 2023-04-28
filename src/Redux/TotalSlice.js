import { createSlice } from "@reduxjs/toolkit";

export const totalSlice = createSlice({
  name: "total",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    refresh: (state) => {
      state.value = 0;
      localStorage.setItem("cardItems", JSON.stringify(state.cardItems));
    },
    
  },
});

export const { increment, decrement, refresh } = totalSlice.actions;

export default totalSlice.reducer;
