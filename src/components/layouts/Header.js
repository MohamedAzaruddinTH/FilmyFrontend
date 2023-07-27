import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Image, Figure } from "react-bootstrap";
import { logout } from "../../actions/userActions";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout);
  };

  return (
    <nav className="navbar row header">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to={"/"}>
            <img width="100px" src="/images/icon2.png" alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0 headerLeft">
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/now_playing" style={{ textDecoration: "none" }}>
          <span>Now Playing</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center headerRight">
        {isAuthenticated ? (
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              variant="default text-white pr-5"
              id="dropdown-basic"
            >
              <Figure className="avatar avatar-nav avatar-round">
                <Image
                  width="50px"
                  src={
                    user && user.avatar
                      ? user.avatar
                      : "./images/default_avatar.png"
                  }
                />
              </Figure>
              <span>{user && user.name}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  navigate("/myProfile");
                }}
                className="text-dark"
              >
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={logoutHandler} className="text-danger">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Link to={"/login"} className="Btn" id="login_btn">
            Login
          </Link>
        )}
      </div>
      <div className="col-12 mt-4 mb-4 text-center">
        <Link to="/watchlist" className="Btn" id="watchlist_btn">
          watchlist
        </Link>
      </div>
    </nav>
  );
};
export default Header;
