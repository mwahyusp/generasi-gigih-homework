import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import userSlice from "./userSlice";
import selectedSlice from "./selectedSlice";
import trackSlice from "./trackSlice";

export default configureStore({
  reducer: {
    token: tokenSlice,
    user: userSlice,
    track: trackSlice,
    selected: selectedSlice
  }
});