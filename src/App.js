import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import FavoriteMovies from './pages/FavoriteMovies';
import './App.css';

const App = () => {
  const [isNavSticky, setNavSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavSticky(true);
    } else {
      setNavSticky(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <Router>
      <nav className={`bg-black p-4 text-white flex justify-between items-center ${isNavSticky ? 'sticky top-0 ' : ''}`}>
        <div>
          <Link to="/" className="rounded-md p-4 mr-4 ">Movies</Link>
          <Link to="/favorites" className="rounded-md p-4 mr-4">Favorites</Link>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<MovieList />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
      </Routes>
    </Router>
  );
};

export default App;
