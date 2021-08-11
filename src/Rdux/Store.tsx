import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenSlice";
import trackSlice from "./trackSlice";
import playlistSlice from "./playlistSlice";

export default configureStore({
  reducer: {
    token: tokenSlice,
    track: trackSlice,
    playlist: playlistSlice,
  },
});
