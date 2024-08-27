import { Link, useLocation } from "react-router-dom";
import { nanoid } from "nanoid";
import css from "./MoviesPage.module.css";

export default function MoviePage({ listMovies }) {
  const locationListMovie = useLocation();
  return (
    <ul className={css.list}>
      {listMovies.length > 0 &&
        listMovies.map(elem => (
          <Link
            to={`/movies/${elem.id}`}
            state={locationListMovie}
            className={css.link}
            key={nanoid()}>
            <li className={css.listMov}>
              <img
                className={css.imageSearchMovie}
                src={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`}
                alt={elem.title}
              />
              <p className={css.overview}>{elem.release_date}</p>
              <h4 className={css.titleMovie}>{elem.title}</h4>
              <p className={css.overview}>{elem.overview}</p>
            </li>
          </Link>
        ))}
    </ul>
  );
}
