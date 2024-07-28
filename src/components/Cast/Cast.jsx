import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb";
import "../../styles.css"; // Importowanie stylów

const Cast = () => {
  const { movieId } = useOutletContext();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getMovieCredits(movieId);
        setCast(castData);
      } catch (error) {
        setError(error);
      }
    };

    fetchCast();
  }, [movieId]);

  if (error) {
    return <p className="error">Failed to load cast: {error.message}</p>;
  }

  return (
    <div className="castContainer">
      <ul className="castList">
        {cast.map((actor) => (
          <li key={actor.cast_id} className="castItem">
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className="actorImage"
              />
            ) : (
              <div className="noImage">No Image</div>
            )}
            <p className="actorName">{actor.name}</p>
            <p className="characterName">as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
