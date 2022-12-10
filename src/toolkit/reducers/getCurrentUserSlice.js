import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const getCurrentUserSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getCurrentUser } = getCurrentUserSlice.actions;

export default getCurrentUserSlice.reducer;
