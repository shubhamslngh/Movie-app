import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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
          <NavLink to="/" className="text-white hover:bg-sky-700  rounded-md p-4 mr-4" activeClassName="bg-red-400">Movies</NavLink>
          <NavLink to="/favorites" className="text-white hover:bg-sky-700 rounded-md p-4 mr-4 " activeClassName="bg-red-500">Favorites</NavLink>
        </div>
        {/* <SearchBar onSearch={handleSearch} /> */}
      </nav>
      <Routes>
        <Route exact path="/" element={<MovieList searchQuery={searchQuery} />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </Router>
  );
};

export default App;
