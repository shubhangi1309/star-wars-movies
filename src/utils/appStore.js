import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slices/moviesSlice"

const appStore = configureStore({
    reducer: {
        movies: movieReducer
    }
})

export default appStore;