
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (query.trim() !== '') {
    onSearch(query.trim());
    setQuery('');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
        className="border align-middle border-red-700 rounded-lg p-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
