import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import FavoriteMovies from './pages/FavoriteMovies';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Movies</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </Router>
  );
};

export default App;
