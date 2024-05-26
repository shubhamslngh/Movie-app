import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import { loadState, saveState } from './localStorage';

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().movies.favorites);
});

export default store;
