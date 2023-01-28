import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useFetchAsyncCollection } from "../fetchCollection/fetchCollection";

export const getDataAsync = createAsyncThunk("getDataAsync", async () => {
  return await useFetchAsyncCollection("users");
});

const initialState = {
  data: null,
};

export const dataSlice = createSlice({
  name: "get_data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default dataSlice.reducer;
