import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};

export const getUserIDSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getUserID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { getUserID } = getUserIDSlice.actions;

export default getUserIDSlice.reducer;
