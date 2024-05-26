import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loadState } from './localStorage';

const MOVIES_API_URL = process.env.REACT_APP_MOVIES_API_URL;

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(MOVIES_API_URL);
  return response.data;
});

const initialState = {
  movies: [],
  favorites: loadState() || [],
  status: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const movie = action.payload;
      const isFavorite = state.favorites.find((fav) => fav.id === movie.id);
      if (isFavorite) {
        state.favorites = state.favorites.filter((fav) => fav.id !== movie.id);
      } else {
        state.favorites.push(movie);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.sort((a, b) => b.rating - a.rating);
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
