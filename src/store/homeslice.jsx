import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    reset: (state) => {
      state.url = {}
      state.genres = {}
    },
    getapiConfiguration: (state, action) => {
        state.url = action.payload;
    },
    getGenres: (state, action) => {
        state.genres = action.payload
    },

  },
  
});

export const { reset,getapiConfiguration,getGenres } = homeSlice.actions;
export default homeSlice.reducer;
