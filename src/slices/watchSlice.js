import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchlist: JSON.parse(localStorage.getItem("watchlist")) || [],
  watched: JSON.parse(localStorage.getItem("watched")) || [],
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchlist(state, action) {
      const movie = action.payload;
      if (!state.watchlist.some((item) => item.id === movie.id)) {
        state.watchlist.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
      }
    },
    removeFromWatchlist(state, action) {
      const movieId = action.payload;
      state.watchlist = state.watchlist.filter((item) => item.id !== movieId);
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    },
    addToWatched(state, action) {
      const movie = action.payload;
      state.watchlist = state.watchlist.filter((item) => item.id !== movie.id);
      if (!state.watched.some((item) => item.id === movie.id)) {
        state.watched.push(movie);
        localStorage.setItem("watched", JSON.stringify(state.watched));
      }
    },
    moveToWatchlist(state, action) {
      const movie = action.payload;
      state.watched = state.watched.filter((item) => item.id !== movie.id);
      if (!state.watchlist.some((item) => item.id === movie.id)) {
        state.watchlist.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
      }
    },
    removeFromWatched(state, action) {
      const movieId = action.payload;
      state.watched = state.watched.filter((item) => item.id !== movieId);
      localStorage.setItem("watched", JSON.stringify(state.watched));
    },
  },
});

const { actions, reducer } = watchlistSlice;
export const {
  addToWatchlist,
  removeFromWatchlist,
  addToWatched,
  moveToWatchlist,
  removeFromWatched,
} = actions;

export default reducer;
