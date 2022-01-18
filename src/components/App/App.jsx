import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { moviesApi } from "../../utils/MoviesApi";
import MobileMenu from "../MobileMenu/MobileMenu";
import NotFound from "../NotFound/NotFound";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Movies from "../pages/Movies";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import SavedMovies from "../pages/SavedMovies";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState({ items: [], isLoading: false });
  const [moviesSaved, setMoviesSaved] = useState({
    items: [],
    isLoading: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isCurrentWidth, setIsCurrentWidth] = useState(window.innerWidth);
  const [isMoviesConfig, setIsMoviesConfig] = useState({
    number: 16,
    increment: 4,
  });
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const mobileSize = isCurrentWidth <= 800;
  const navigate = useNavigate();
  const handleBackHistory = () => {
    navigate(-1);
  };
  useEffect(() => {
    let timer = null;
    const resize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsCurrentWidth(window.innerWidth);
        if (window.innerWidth <= 450) {
          setIsMoviesConfig({ number: 5, increment: 2 });
        } else if (window.innerWidth <= 800) {
          setIsMoviesConfig({ number: 8, increment: 2 });
        } else {
          setIsMoviesConfig({ number: 16, increment: 4 });
        }
      }, 800);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  useEffect(() => {
    setMovies({ items: [], isLoading: true });
    setMoviesSaved({ items: [], isLoading: true });
    moviesApi
      .getMovies()
      .then((data) => {
        setMovies({ items: data, isLoading: false });
        setMoviesSaved({ items: data.slice(0, 3), isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        setMovies({ items: [], isLoading: false });
        setMoviesSaved({ items: [], isLoading: false });
      });
  }, []);
  const user = { name: "Виталий", email: "pochta@yandex.ru" };
  const handleCardsIncreases = () => {
    setIsMoviesConfig({
      number: isMoviesConfig.increment + isMoviesConfig.number,
      increment: isMoviesConfig.increment,
    });
  };
  const handleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoggedIn={isLoggedIn}
              mobileSize={mobileSize}
              handleMobileMenu={handleMobileMenu}
            />
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="/profile"
          element={
            <Profile
              isLoggedIn={isLoggedIn}
              mobileSize={mobileSize}
              handleMobileMenu={handleMobileMenu}
              user={user}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              movies={movies}
              isLoggedIn={isLoggedIn}
              isMoviesConfig={isMoviesConfig}
              handleCardsIncreases={handleCardsIncreases}
              mobileSize={mobileSize}
              handleMobileMenu={handleMobileMenu}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              movies={moviesSaved}
              isLoggedIn={isLoggedIn}
              isMoviesConfig={isMoviesConfig}
              mobileSize={mobileSize}
              handleMobileMenu={handleMobileMenu}
            />
          }
        />
        <Route path="*" element={<NotFound onBack={handleBackHistory} />} />
      </Routes>
      {mobileSize && (
        <MobileMenu
          isOpen={isOpenMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isLoggedIn={isLoggedIn}
        />
      )}
    </>
  );
};

export default App;
