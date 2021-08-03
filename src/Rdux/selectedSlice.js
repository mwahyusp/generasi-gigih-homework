import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: []
};

const selectedTrack = createSlice({
  name: "Track Selected",
  initialState,
  reducers: {
    trackSelect: (state, action) => {
      state.selected = action.payload;
    },
    trackDeselect: (state, action) => {
      state.selected = action.payload;
    }
  }
});

export const { trackSelect, trackDeselect } = selectedTrack.actions;
export default selectedTrack.reducer;
