import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import { convertMovies, filterMoviesShorts } from "../../utils/movies-services";
import localServices from "../../utils/local-services";
import LocalServices from "../../utils/local-services";
import Popup from "../Popup/Popup";
import { messages } from "../../utils/messages";
import { config } from "../../utils/config";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [movies, setMovies] = useState({ items: [], itemsShort: [], isLoading: false, });
  const [moviesSaved, setMoviesSaved] = useState({ items: [], itemsShort: [], isLoading: false });
  const [isCurrentWidth, setIsCurrentWidth] = useState(window.innerWidth);
  const [isMoviesConfig, setIsMoviesConfig] = useState({ number: config.NUMBER_DESKTOP, increment: config.INCREMENT_DESKTOP, });
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isTooltipPopup, setIsTooltipPopup] = useState({ isOpen: false, status: true, message: '' })
  const mobileSize = isCurrentWidth <= config.IS_MOBILE;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkAuth(token)
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token && isLoggedIn && (location.pathname === '/movies' || location.pathname === '/saved-movies')) {
      getMovies()
      getSavedMoviesUser(token)
    }
  }, [location.pathname, isLoggedIn]);

  useEffect(() => {
    let timer = null;
    const resize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsCurrentWidth(window.innerWidth);
        if (window.innerWidth <= config.IS_MIN_WIDTH) {
          setIsMoviesConfig({ number: config.NUMBER_MOBILE, increment: config.INCREMENT_MOBILE });
        } else if (window.innerWidth <= config.IS_MOBILE) {
          setIsMoviesConfig({ number: config.NUMBER_MIDDLE, increment: config.INCREMENT_MIDDLE });
        } else {
          setIsMoviesConfig({ number: config.NUMBER_DESKTOP, increment: config.INCREMENT_DESKTOP });
        }
      }, config.IS_TIMEOUT);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  const getMovies = () => {
    const beatMovies = LocalServices.getItem('beatMovies')
    const beatShortsMovies = LocalServices.getItem('beatShortsMovies')
    setMovies({ ...movies, isLoading: true })
    if (beatMovies && beatShortsMovies) {
      setMovies({ items: beatMovies, itemsShort: beatShortsMovies, isLoading: false })
    } else {
      moviesApi
        .getMovies()
        .then((data) => {
          const beatMovies = convertMovies(data)
          const shortMovies = filterMoviesShorts(beatMovies)
          setMovies({ items: beatMovies, itemsShort: shortMovies, isLoading: false })
          localServices.setItem('beatMovies', beatMovies)
          localServices.setItem('beatShortsMovies', shortMovies)
        })
        .catch((err) => {
          console.error(err);
          setMovies({ ...movies, isLoading: false })
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_MOVIES_ERR })
        });
    }
  }

  const getSavedMoviesUser = (token) => {
    setMoviesSaved({ ...moviesSaved, isLoading: true })
    const savedMovies = LocalServices.getItem('savedMovies')
    const savedShortsMovies = LocalServices.getItem('savedShortsMovies')
    if (savedMovies && savedShortsMovies) {
      setMoviesSaved({ items: savedMovies, itemsShort: savedShortsMovies, isLoading: false })
    } else {
      mainApi.getSavedMovies(token)
        .then((movies) => {
          const shortMovies = filterMoviesShorts(movies)
          setMoviesSaved({ items: movies, itemsShort: shortMovies, isLoading: false })
          localServices.setItem('savedMovies', movies)
          localServices.setItem('savedShortsMovies', shortMovies)
        })
        .catch((err) => {
          console.error(err);
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_MOVIES_SAVED_ERR })
          setMoviesSaved({ ...moviesSaved, isLoading: false })
        })
    }

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
        handleLogin(res.email, data.password);
        setIsTooltipPopup({ isOpen: true, status: true, message: messages.IS_REGISTER_OK })
      })
      .catch((err) => {
        console.error(err);
        if (err === 400 || err === 404) {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_LOGIN_BAD })
        } else if (err === 409) {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_REGISTER_CONFLICT })
        } else {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_REGISTER_ERR })
        }
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
        setIsTooltipPopup({ isOpen: true, status: true, message: messages.IS_LOGIN_OK })
        navigate("/movies");
      })
      .catch((err) => {
        console.error(err);
        if (err === 400 || err === 404) {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_LOGIN_BAD })
        } else if (err === 401) {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_LOGIN_UNAUTH })
        } else {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_LOGIN_ERR })
        }
      });
  };

  const handleSavedMovies = (data) => {
    const token = localStorage.getItem('token')
    mainApi.setMovieUser(data, token)
      .then((data) => {
        const newMovies = [...moviesSaved.items, data]
        const shortMovies = filterMoviesShorts(newMovies)
        setMoviesSaved({ items: newMovies, itemsShort: shortMovies, isLoading: false })
        localServices.setItem('savedMovies', newMovies)
        localServices.setItem('savedShortsMovies', shortMovies)
        setIsTooltipPopup({ isOpen: true, status: true, message: messages.IS_MOVIES_LIKE_OK })
      }).catch((err) => {
        console.error(err)
        if (err === 400 || err === 404) {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_MOVIES_LIKE_BAD })
        } else {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_MOVIES_LIKE_ERR })
        }
      })
  }

  const handleDeleteMovies = (data) => {
    const movieDelete = moviesSaved.items.find(item => item.movieId === data.movieId)
    const token = localStorage.getItem('token')
    mainApi.deleteMovieUser(movieDelete._id, token)
      .then((res) => {
        if (res) {
          const newMovies = moviesSaved.items.filter((c) => c._id !== movieDelete._id)
          const shortMovies = filterMoviesShorts(newMovies)
          setMoviesSaved({ items: newMovies, itemsShort: shortMovies, isLoading: false })
          localServices.setItem('savedMovies', newMovies)
          localServices.setItem('savedShortsMovies', shortMovies)
          setIsTooltipPopup({ isOpen: true, status: true, message: messages.IS_MOVIES_DELETE_OK })
        }
      }).catch((err) => {
        console.error(err)
        if (err === 400 || err === 404) {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_MOVIES_DELETE_BAD })
        } else {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_MOVIES_DELETE_ERR })
        }
      })
  }

  const handleUpdateUser = (data) => {
    const token = localStorage.getItem('token')
    mainApi.updateMe(data, token)
      .then((res) => {
        setCurrentUser({ name: res.name, email: res.email, id: res.id });
        setIsTooltipPopup({ isOpen: true, status: true, message: messages.IS_UPDATE_USER_OK })
      })
      .catch((err) => {
        console.error(err);
        if (err === 400 || err === 404) {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_UPDATE_USER_BAD })
        } else if (err === 409) {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_UPDATE_USER_CONFLICT })
        } else {
          setIsTooltipPopup({ isOpen: true, status: false, message: messages.IS_UPDATE_USER_ERR })
        }
      })
  }

  const handleLogOut = () => {
    localStorage.clear()
    navigate("/");
    setIsLoggedIn(false)
    setCurrentUser(null)
    setIsTooltipPopup({ isOpen: true, status: true, message: messages.IS_LOGOUT_OK })
  }

  const handlePopup = () => {
    setIsTooltipPopup({ ...isTooltipPopup, isOpen: !isTooltipPopup.isOpen })
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
          element={isLoggedIn ? <NotFound onBack={handleBackHistory} /> : <Register onSubmit={handleRegister} />}
        />
        <Route path="/signin" element={isLoggedIn ? <NotFound onBack={handleBackHistory} /> : <Login onSubmit={handleLogin} />} />
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
                  moviesSaved={moviesSaved}
                  isLoggedIn={isLoggedIn}
                  isMoviesConfig={isMoviesConfig}
                  handleCardsIncreases={handleCardsIncreases}
                  mobileSize={mobileSize}
                  handleMobileMenu={handleMobileMenu}
                  handleSavedMovies={handleSavedMovies}
                  handleDeleteMovies={handleDeleteMovies}
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
                  movies={movies}
                  moviesSaved={moviesSaved}
                  isLoggedIn={isLoggedIn}
                  isMoviesConfig={isMoviesConfig}
                  mobileSize={mobileSize}
                  handleMobileMenu={handleMobileMenu}
                  handleDeleteMovies={handleDeleteMovies}
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
      <Popup isOpen={isTooltipPopup.isOpen} status={isTooltipPopup.status} message={isTooltipPopup.message} onToggle={handlePopup} />
    </CurrentUserContext.Provider>
  );
};

export default App;
