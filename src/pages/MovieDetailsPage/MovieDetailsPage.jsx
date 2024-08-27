import { useEffect, useState, Suspense, useRef } from "react";
import { fetchDetailsMovies } from "../../redux/movies/operations.js";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import { ImArrowLeft2 } from "react-icons/im";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import css from "./MovieDetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectDetails } from "../../redux/movies/selectors.js";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const locationDetailsPage = useLocation();
  const locationStateRef = useRef(locationDetailsPage.state);
  const dispatch = useDispatch();
  const movie = useSelector(selectDetails);

  useEffect(() => {
    dispatch(fetchDetailsMovies(movieId));
  }, [dispatch, movieId]);

  return (
    <div className={css.container}>
      <Link to={locationStateRef.current || "/"} className={css.buttonBack}>
        <ImArrowLeft2 className={css.icon} /> Go back
      </Link>

      {movie && (
        <ul className={css.listDitailsContainer}>
          <li key={nanoid()} className={css.listStyle}>
            <div className={css.wrapper}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="image movie"
                className={css.image}
              />

              <div className={css.fff}>
                <h2 className={css.title}>
                  {movie.original_title}
                  <span className={css.year}>
                    ({movie.release_date.toString().substring(0, 4)})
                  </span>
                </h2>
                <p className={css.movieDescription}>
                  User Score: {movie.popularity.toString().substring(0, 2)}%
                </p>
                <h5 className={css.subtitle}>Overview</h5>
                <p className={css.movieDescription}>{movie.overview}</p>
                <h5 className={css.subtitle}>Genres</h5>
                <ul className={css.list}>
                  {movie.genres.map(elem => (
                    <li key={elem.id}>{elem.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <hr />
            <div>
              <p className={css.infoMovie}>Additional information</p>
              <ul className={css.infoLink}>
                <li>
                  <Link
                    to="cast"
                    state={locationStateRef.current}
                    className={css.link}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link
                    to="reviews"
                    state={locationStateRef.current}
                    className={css.link}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <hr />
          </li>
        </ul>
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
