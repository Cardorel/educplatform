import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const setCourseDataSlice = createSlice({
  name: "courseData",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCourse } = setCourseDataSlice.actions;

export default setCourseDataSlice.reducer;
