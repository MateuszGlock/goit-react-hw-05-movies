import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../api/tmdb";
import "../../styles.css"; // Importowanie stylów

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieData = await getMovieDetails(movieId);
      setMovie(movieData);
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movieDetailsContainer">
      <button className="goBack">
        <Link to="/">Go back</Link>
      </button>
      <div className="movie">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
        <div className="details">
          <h2>
            {movie.title} ({movie.release_date?.split("-")[0]})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div className="additional">
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet context={{ movieId: parseInt(movieId, 10) }} />
    </div>
  );
};

export default MovieDetails;
