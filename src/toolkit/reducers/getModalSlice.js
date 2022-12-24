import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const getModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    getModalData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getModalData } = getModalSlice.actions;

export default getModalSlice.reducer;
