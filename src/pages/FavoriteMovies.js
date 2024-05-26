import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteMovies = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="container text-center align-center mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favorites.length === 0 && <p className="text-center w-full">No favorite movies.</p>}
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      </div>
      </div>
  );
};

export default FavoriteMovies;
