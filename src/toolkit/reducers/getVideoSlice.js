import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: null,
};

export const getVideolice = createSlice({
  name: "video",
  initialState,
  reducers: {
    getVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { getVideo } = getVideolice.actions;

export default getVideolice.reducer;
