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
    e.target.src = 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg.jpg'; // Path to your fallback image
  };

  return (
    <div className="movie-card" onClick={() => window.open(movie.imdb_url, '_blank')}>
    <img src={movie.image} alt={movie.title} onError={handleImageError} />
      <h3>{movie.movie}</h3>
      <p>Rating: {movie.rating}</p>
      <button onClick={handleFavoriteClick}>    
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
};

export default MovieCard;
