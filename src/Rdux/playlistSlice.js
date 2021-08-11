import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    playlist: {}
}

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {
        getPlaylist: (state, action) => {
            state.playlist = action.payload;
        }
    }
})

export const { getPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;