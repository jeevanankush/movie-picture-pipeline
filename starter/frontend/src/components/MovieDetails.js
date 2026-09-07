import React from 'react';

export default function MovieDetails({ movie }) {
  return (
    <div>
      <p>
        <strong>Title:</strong> {movie.title}
      </p>
      <p>
        <strong>ID:</strong> {movie.id}
      </p>
    </div>
  );
}
