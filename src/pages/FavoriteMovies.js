import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const FavoriteMovies = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="flex flex-wrap justify-center p-5">
      {favorites.length === 0 && <p className="text-center w-full">No favorite movies.</p>}
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default FavoriteMovies;
