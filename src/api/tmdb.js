import axios from "axios";

const API_KEY = "80e7407b63bcc4d9fa17b3561e7337b1";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
  );
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
  );
  return response.data.cast;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
  );
  return response.data.results;
};
