import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../redux/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.find((fav) => fav.id === movie.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent triggering the click event on the movie card
    dispatch(toggleFavorite(movie));
  };

  const handleImageError = (e) => {
    e.target.src = 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioUPyn34M7Hc/v0/-1x-1.jpg'; // Path to your fallback image
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer" onClick={() => window.open(movie.imdb_url, '_blank')}>
      <img className="w-full" src={movie.image} alt={movie.movie} onError={handleImageError} />
      <div className="px-6 flex-wrap place-content-evenly py-4">
        <div className="font-bold text-xl mb-2">{movie.movie}</div>
        <p className="text-gray-700 text-base">Rating: {movie.rating}</p>
        <button
          className={`mt-4 px-4 py-2 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
