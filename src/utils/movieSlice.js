import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRated: null,
        upcoming: null,
        anyMovieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        addTopRated: (state,action) => {
            state.topRated = action.payload;
        },
        addUpcoming: (state,action) => {
            state.upcoming = action.payload;
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload;
        },
        addMovieTrailer: (state,action) => {
            state.anyMovieTrailer = action.payload;
        },
        removeMovieTrailer: (state,action) => {
            state.anyMovieTrailer = null;
        },
       
    },
})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpcoming,addMovieTrailer,removeMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer;