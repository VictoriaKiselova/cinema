import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTrendingMovies,
  fetchSearchMovie,
  fetchDetailsMovies,
  fetchMovieCast,
  fetchMovieReviews,
  fetchLatestMovies,
} from "./operations.js";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesTrand: [],
    moviesSearch: [],
    latestMovies: [],
    movieDetails: null,
    movieCast: [],
    movieReviews: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTrendingMovies.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesTrand = action.payload.results;
      })
      .addCase(fetchTrendingMovies.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchSearchMovie.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchSearchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.latestMovies = [];
        state.moviesSearch = action.payload.results;
      })
      .addCase(fetchSearchMovie.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchLatestMovies.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchLatestMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesSearch = [];
        state.latestMovies = action.payload.results;
      })
      .addCase(fetchLatestMovies.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchDetailsMovies.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchDetailsMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;
      })
      .addCase(fetchDetailsMovies.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchMovieCast.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchMovieCast.fulfilled, (state, action) => {
        state.loading = false;
        state.movieCast = action.payload;
      })
      .addCase(fetchMovieCast.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(fetchMovieReviews.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchMovieReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.movieReviews = action.payload;
      })
      .addCase(fetchMovieReviews.rejected, state => {
        state.error = true;
        state.loading = false;
      }),
});

export default movieSlice.reducer;
