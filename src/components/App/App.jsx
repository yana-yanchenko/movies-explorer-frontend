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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { mainApi } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import { convertMovies } from "../../utils/movies-services";

const App = () => {
  const [movies, setMovies] = useState({ items: [], isLoading: false });
  const [moviesSaved, setMoviesSaved] = useState({
    items: [],
    isLoading: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCurrentWidth, setIsCurrentWidth] = useState(window.innerWidth);
  const [isMoviesConfig, setIsMoviesConfig] = useState({
    number: 16,
    increment: 4,
  });
  const [currentUser, setCurrentUser] = useState({});
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const mobileSize = isCurrentWidth <= 800;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkAuth(token)
      getMovies()
      getSavedMoviesUser()
    }

  }, []);

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

  const getMovies = () => {
    setMovies({ items: [], isLoading: true });

    moviesApi
      .getMovies()
      .then((data) => {
        const BeatMovies = convertMovies(data)
        setMovies({ items: BeatMovies, isLoading: false });
      })
      .catch((err) => {
        console.log(err);
        setMovies({ items: [], isLoading: false });
      });
  }

  const getSavedMoviesUser = () => {
    setMoviesSaved({ items: [], isLoading: true });
    const token = localStorage.getItem('token')
    mainApi.getSavedMovies(token)
      .then((movies) => {
        setMoviesSaved({ items: movies, isLoading: false });
      })
      .catch((err) => {
        console.error(err);
        setMoviesSaved({ items: [], isLoading: false });
      })

  }

  const handleBackHistory = () => {
    navigate(-1);
  };

  const handleCardsIncreases = () => {
    setIsMoviesConfig({
      number: isMoviesConfig.increment + isMoviesConfig.number,
      increment: isMoviesConfig.increment,
    });
  };

  const handleMobileMenu = () => {
    setIsOpenMobileMenu(!isOpenMobileMenu);
  };

  const handleRegister = (data) => {
    mainApi
      .register(data.name, data.email, data.password)
      .then((res) => {
        handleLogin(data.email, data.password);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const checkAuth = (token) => {
    mainApi.getMe(token)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true)
          setCurrentUser({ name: res.name, email: res.email, id: res.id });
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email, id: data.id });
        setIsLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleUpdateUser = (data) => {
    const token = localStorage.getItem('token')
    mainApi.updateMe(data, token)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const handleLogOut = () => {
    localStorage.clear()
    navigate("/");
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
        <Route
          path="/signup"
          element={<Register onSubmit={handleRegister} />}
        />
        <Route path="/signin" element={<Login onSubmit={handleLogin} />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              children={
                <Profile
                  isLoggedIn={isLoggedIn}
                  mobileSize={mobileSize}
                  handleMobileMenu={handleMobileMenu}
                  onLogOut={handleLogOut}
                  onUpdateUser={handleUpdateUser}
                />
              }
            />

          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              children={
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
          }
        />
        <Route
          path="/saved-movies"
          element={
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              children={
                <SavedMovies
                  movies={moviesSaved}
                  isLoggedIn={isLoggedIn}
                  isMoviesConfig={isMoviesConfig}
                  mobileSize={mobileSize}
                  handleMobileMenu={handleMobileMenu}
                />
              }
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
    </CurrentUserContext.Provider>
  );
};

export default App;
