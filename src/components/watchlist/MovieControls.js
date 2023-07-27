import React from "react";
import "./MovieCard.css";
import { useDispatch } from "react-redux";
import {
  addToWatched,
  moveToWatchlist,
  removeFromWatched,
  removeFromWatchlist,
} from "../../slices/watchSlice";

const MovieControls = ({ movie, type }) => {
  const dispatch = useDispatch();

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => dispatch(addToWatched(movie))}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => dispatch(removeFromWatchlist(movie.id))}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => dispatch(moveToWatchlist(movie))}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => dispatch(removeFromWatched(movie.id))}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
