import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import FavoriteMovies from './pages/FavoriteMovies';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <nav className="bg-black p-4 flex justify-between items-center">
        <div>
          <Link to="/" className="text-white rounded-md bg-red-800 p-4 mr-4">Movies</Link>
          <Link to="/favorites" className="text-white">Favorites</Link>
        </div>
        <SearchBar onSearch={handleSearch} />
      </nav>
      <Routes>
        <Route exact path="/" element={<MovieList searchQuery={searchQuery} />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </Router>
  );
};

export default App;
