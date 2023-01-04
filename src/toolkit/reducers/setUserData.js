import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const setUserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUser } = setUserDataSlice.actions;

export default setUserDataSlice.reducer;
