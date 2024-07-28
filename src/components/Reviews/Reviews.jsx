import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getMovieReviews } from "../../api/tmdb";
import "../../styles.css"; // Importowanie stylów

const Reviews = () => {
  const { movieId } = useOutletContext();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        setError(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (error) {
    return <p className="error">Failed to load reviews: {error.message}</p>;
  }

  return (
    <div className="reviewsContainer">
      <ul className="reviewList">
        {reviews.map((review) => (
          <li key={review.id} className="reviewItem">
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
