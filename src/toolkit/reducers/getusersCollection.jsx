import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAsyncCollection } from "../fetchCollection/fetchCollection";

export const getDataAsync = createAsyncThunk("getDataAsync", async (id) => {
  return await fetchAsyncCollection("users");
});

const initialState = {
  status: "idle",
  data: [],
};

export const dataSlice = createSlice({
  name: "get_data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.data = action.payload.filter((d) => d.isActive);
        state.status = "idle";
      });
  },
});

export default dataSlice.reducer;
