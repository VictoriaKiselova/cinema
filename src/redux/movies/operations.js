import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "79bc965924c60d0b86ffb372b447b6a3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWJjOTY1OTI0YzYwZDBiODZmZmIzNzJiNDQ3YjZhMyIsInN1YiI6IjY2Mjk2YjhiNGE0YmY2MDE2NTc3MzM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U56bJIvuSOUCVgwoHyqgj3hZcnL4Lz7uwx9H-RLHMwA",
  },
};

export const fetchTrendingMovies = createAsyncThunk(
  "movies/fetchTrendingMovies",
  async (_, thunkAPI) => {
    try {
      const url = `trending/movie/day?language=en-US&api_key=${API_KEY}`;
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchLatestMovies = createAsyncThunk(
  "movies/LatestMovies",
  async (_, thunkAPI) => {
    try {
      const url = `movie/upcoming?language=en-US&api_key=${API_KEY}`;
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
 
    }
  }
);

export const fetchSearchMovie = createAsyncThunk(
  "movies/fetchSearchMovie",
  async (queryMovie, thunkAPI) => {
    try {
      const url = `search/movie?query=${queryMovie}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchDetailsMovies = createAsyncThunk(
  "movies/fetchDetailsMovies",
  async (movieId, thunkAPI) => {
    try {
      const url = `movie/${movieId}?language=en-US&api_key=${API_KEY}`;
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchMovieCast = createAsyncThunk(
  "movies/fetchMovieCast",
  async (movieId, thunkAPI) => {
    try {
      const url = `movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`;
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchMovieReviews = createAsyncThunk(
  "movies/fetchMovieReviews",
  async (movieId, thunkAPI) => {
    try {
      const url = `movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`;
      const response = await axios.get(url, options);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
