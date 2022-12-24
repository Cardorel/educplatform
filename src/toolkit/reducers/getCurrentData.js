import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const getCurrentDataSlice = createSlice({
  name: "currentData",
  initialState,
  reducers: {
    getCurrentUserData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getCurrentUserData } = getCurrentDataSlice.actions;

export default getCurrentDataSlice.reducer;
