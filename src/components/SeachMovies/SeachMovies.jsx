import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import css from "./SeachMovies.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovie } from "../../redux/movies/operations.js";

export default function SeachMovies() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const queryMovie = event.target.elements.query.value;

    if (!queryMovie) {
      return;
    } else {
      dispatch(fetchSearchMovie(queryMovie));
      navigate("/");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          className={css.input}
          placeholder="Search"
        />

        <button className={css.button} type="submit">
          <LuSearch className={css.iconSearch} />
        </button>
      </form>
    </div>
  );
}
