import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatched, addToWatchlist } from "../../slices/watchSlice";

const ResultCard = ({ movie }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchState.watchlist);
  const watched = useSelector((state) => state.watchState.watched);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div>
        <div className="info">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => dispatch(addToWatchlist(movie))}
          >
            Add to Watchlist
          </button>
          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => dispatch(addToWatched(movie))}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
