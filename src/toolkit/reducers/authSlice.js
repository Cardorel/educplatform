import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAsyncCollection } from "../fetchCollection/fetchCollection";

export const getUserAsync = createAsyncThunk("getUserAsync", async (id) => {
  const users = await fetchAsyncCollection(`users`);
  return id && users.find((user) => user?.id === id);
});

const initialState = {
  status: "idle",
  user: {},
};

export const userSlice = createSlice({
  name: "get_user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "idle";
      });
  },
});

export const selectCurrentUser = (state) => state.user;

export default userSlice.reducer;
