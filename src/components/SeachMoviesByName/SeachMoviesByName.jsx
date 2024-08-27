// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { fetchSearchMovie } from "../../articles-api.js";
// import { LuSearch } from "react-icons/lu";
// import { Link } from "react-router-dom";
// import Loader from "../Loader/Loader.jsx";
// import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
// import MovieList from "../MovieTrand/MovieList.js";
// import css from "./SeachMovies.module.css";

// export default function SeachMovies() {
//   const [searchMovie, setSearchMovie] = useState("");
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
  

//   const handleSubmit = event => {
//     event.preventDefault();
//     const queryMovie = event.target.elements.query.value;
//     setSearchParams({ query: queryMovie });
//   };

//   useEffect(() => {
//     async function getSearchMovies() {
//       const query = searchParams.get("query");
//       if (!query) {
//         return;
//       }
//       try {
//         setLoading(true);
//         const data = await fetchSearchMovie(query);
//         setSearchMovie(data.results);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getSearchMovies();
//   }, [searchParams]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className={css.form}>
//         <input
//           type="text"
//           name="query"
//           className={css.input}
//           placeholder="Search"
//         />
       
//         <button type="submit" className={css.button}>
//           <LuSearch className={css.iconSearch} />
//         </button>
//       </form>

//       {loading && (
//         <b>
//           <Loader />
//         </b>
//       )}

//       {searchMovie && searchMovie.length > 0 && (
//         <MovieList searchMovie={searchMovie} />
//       )}

//       {error && <NotFoundPage />}
//     </div>
//   );
// }
