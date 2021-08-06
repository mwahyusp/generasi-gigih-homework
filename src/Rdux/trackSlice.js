import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/sampleData";

const initialState = {
  track: Data
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    storeTrack: (state, action) => {
      state.track = action.payload;
    }
  }
});

export const { storeTrack } = trackSlice.actions;
export default trackSlice.reducer;