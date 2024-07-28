import React, { useState } from "react";
import { searchMovies } from "../../api/tmdb";
import { Link } from "react-router-dom";
import "../../styles.css"; // Importowanie stylów

const Movies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="moviesContainer">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      <ul className="movieList">
        {movies.map((movie) => (
          <li key={movie.id} className="movieItem">
            <Link to={`/movies/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
