import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/moviesSlice';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const status = useSelector((state) => state.movies.status);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = movies.filter((movie) =>
    movie.movie.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center text-red-500">Error loading movies</div>;
  }

  return (
    <div className="container text-center align-center mx-auto px-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearch}
        className="p-2 my-4 border bg-grey-300 text-white border-red-300 shadow-lg rounded-md"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
