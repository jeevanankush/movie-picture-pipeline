import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_MOVIE_API_URL || 'http://localhost:5000';

export default function MovieList({ onMovieClick }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/movies`)
      .then((response) => {
        setMovies(response.data.movies || []);
      })
      .catch(() => {
        setError('Unable to load movies.');
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <button
          key={movie.id}
          type="button"
          onClick={() => onMovieClick(movie)}
          style={{ display: 'block', marginBottom: '10px' }}
        >
          {movie.title}
        </button>
      ))}
    </div>
  );
}
