import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data/sampleData";

const initialState = {
  track: Data,
  selected: [],
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    storeTrack: (state, action) => {
      state.track = action.payload;
    },
    trackSelect: (state, action) => {
      state.selected = action.payload;
    },
    trackDeselect: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { storeTrack, trackSelect, trackDeselect } = trackSlice.actions;
export default trackSlice.reducer;
