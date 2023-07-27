import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListHead.css";

const ListHead = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Watchlist</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watchlists">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default ListHead;
