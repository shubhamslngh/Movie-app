import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStar as outlineStar } from '@fortawesome/free-solid-svg-icons'; // Using the same icon for solid and outline for demonstration
import { toggleFavorite } from '../redux/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);
  const isFavorite = favorites.find((fav) => fav.id === movie.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Prevent triggering the click event on the movie card
    dispatch(toggleFavorite(movie));
  };

  const starIcon = isFavorite ? solidStar : outlineStar;

  const generateStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating / 2);
    const halfStars = Math.ceil(rating % 2);
    const emptyStars = totalStars - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} className="text-yellow-500" />);
    }

    if (halfStars === 1) {
      stars.push(<FontAwesomeIcon key="half" icon={solidStar} className="text-yellow-500" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={outlineStar} className="text-gray-400" />);
    }

    return stars;
  };
    const handleImageError = (e) => {
    e.target.src = 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioUPyn34M7Hc/v0/-1x-1.jpg'; // Path to your fallback image
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer" onClick={() => window.open(movie.imdb_url, '_blank')}>
      <img src={movie.image} alt={movie.title} onError={handleImageError} />
      <div className="px-6 flex-wrap place-content-evenly py-4">
        <div className="font-bold text-xl mb-2">{movie.movie}</div>
        <div className="text-gray-700 text-base">
          <FontAwesomeIcon icon={starIcon} className={`scale-2 text-${isFavorite ? 'yellow' : 'yellow'}-500`} />Rating: {(movie.rating)}/10
        </div>
        <button
          className="mt-4 px-4 py-2 rounded bg-transparent"
          onClick={handleFavoriteClick}
        >
          <FontAwesomeIcon icon={starIcon} className={`text-${isFavorite ? 'yellow' : 'gray'}-500`} />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
