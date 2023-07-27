import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import store from "./store";
import { Provider } from "react-redux";
import Footer from "./components/layouts/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { loadUser } from "./actions/userActions";
import Profile from "./components/user/Profile";
import ProtectedRoute from "./components/route/ProtectedRoute";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import ResetPassword from "./components/user/ResetPassword";
import ListHead from "./components/watchlist/ListHead";
import Add from "./components/watchlist/Add";
import Watched from "./components/watchlist/Watched";
import Watchlist from "./components/watchlist/WatchLists";

function App() {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);
  const backendUrl = process.env.BACKEND_URL; // Access the backend URL from the environment variables

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header backendUrl={backendUrl} />
          {/* Pass the backend URL as a prop */}
          <ToastContainer theme="dark" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/myProfile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/myProfile/update"
              element={
                <ProtectedRoute>
                  <UpdateProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/myProfile/update/password"
              element={
                <ProtectedRoute>
                  <UpdatePassword />
                </ProtectedRoute>
              }
            />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="password/reset/:token" element={<ResetPassword />} />
            <Route
              path="/movie/:id"
              element={
                <ProtectedRoute>
                  <Movie />
                </ProtectedRoute>
              }
            />
            <Route path="/movies/:type" element={<MovieList />} />
            <Route path="/watchlist" element={<ListHead />} />
            <Route path="/add" element={<Add />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/watchlists" element={<Watchlist />} />
            <Route path="/*" element={<h1>Error Page</h1>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
