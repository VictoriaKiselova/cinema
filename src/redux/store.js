import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movies/slice.js";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfigMovies = {
  key: "movies",
  storage,
  whitelist: ["moviesTrand", "moviesSearch", "latestMovies","movieDetails"],
};

const pMovieReducer = persistReducer(persistConfigMovies, movieReducer);

export const store = configureStore({
  reducer: {
    movies: pMovieReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
