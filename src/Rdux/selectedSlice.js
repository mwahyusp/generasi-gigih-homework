<<<<<<< HEAD
=======
  
>>>>>>> e1cefb1914cf7740000a3037d0c5e43d4a99379b
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
<<<<<<< HEAD
export default selectedTrack.reducer;
=======
export default selectedTrack.reducer;
>>>>>>> e1cefb1914cf7740000a3037d0c5e43d4a99379b
