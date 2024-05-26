import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie-list">
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Failed to load movies.</p>}
      {status === 'succeeded' &&
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;
