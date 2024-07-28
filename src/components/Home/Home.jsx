import React, { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/tmdb";
import { Link } from "react-router-dom";
import "../../styles.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trendingMovies = await getTrendingMovies();
      setMovies(trendingMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-item">
            <Link to={`/movies/${movie.id}`} className="movie-link">
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
