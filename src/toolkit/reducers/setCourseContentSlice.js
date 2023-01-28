import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useFetchAsyncCollection } from "../fetchCollection/fetchCollection";

export const getCoursesAsync = createAsyncThunk(
  "getCoursesAsync",
  async (cl) => {
    return await useFetchAsyncCollection(cl);
  }
);

const initialState = {
  data: [],
};

export const collectionSlice = createSlice({
  name: "get_collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCoursesAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const selectCurrentUser = (state) => state.user;

export default collectionSlice.reducer;
