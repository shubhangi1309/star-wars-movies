import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movieList = action.payload;
    }
  },
});

export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;