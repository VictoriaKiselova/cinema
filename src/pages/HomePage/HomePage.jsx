import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import MovieTrand from "../../components/MovieTrand/MovieTrand.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import MoviePage from "../MoviesPage/MoviePage.jsx";
import css from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrendingMovies,
  fetchLatestMovies,
} from "../../redux/movies/operations.js";
import {
  selectTrand,
  selectListSearchMovie,
  selectLoading,
  selectError,
  selectLatestMovies,
} from "../../redux/movies/selectors.js";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const location = useLocation();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const selectTrandMov = useSelector(selectTrand);
  const listSearchMovies = useSelector(selectListSearchMovie);
  const latestMovies = useSelector(selectLatestMovies);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchLatestMovies());
  }, [dispatch]);

  return (
    <div className={css.homePageContainer}>
      {loading && (
        <b>
          <Loader />
        </b>
      )}

      {selectTrandMov && selectTrandMov.length > 0 && <MovieTrand />}

      {listSearchMovies.length > 0 ? (
        <>
          <h3 className={css.titlePage}>Query results</h3>
          <MoviePage listMovies={listSearchMovies} />
        </>
      ) : (
        <>
          <h3 className={css.titlePage}>Premieres</h3>
          <MoviePage listMovies={latestMovies} />
        </>
      )}
      {error && <NotFoundPage />}
    </div>
  );
}
