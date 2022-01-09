import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { moviesApi } from '../../utils/MoviesApi';
import NotFound from '../NotFound/NotFound';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Movies from '../pages/Movies';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import SavedMovies from '../pages/SavedMovies';
import './App.css'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isCurrentWidth, setIsCurrentWidth] = useState(window.innerWidth)
  const navigate = useNavigate()
  const handleBackHistory = () => {
    navigate(-1)
  }
useEffect(() => {
  let timer = null;
  const resize = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      console.log(window.innerWidth);
        setIsCurrentWidth(window.innerWidth)
    }, 800)
  }
  window.addEventListener('resize', resize)
  return () => {
    window.removeEventListener('resize', resize)
  }
});

  useEffect(() => {
    moviesApi.getMovies()
    .then((data) =>{
      setMovies(data)
    })
  }, []);
  const user  = {name : "Виталий"}
  return (
    <>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn}/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} user={user}/>}/>
        <Route path="/movies" element={<Movies movies={movies} isLoggedIn={isLoggedIn}/>}/>
        <Route path="/saved-movies" element={<SavedMovies isLoggedIn={isLoggedIn}/>}/>
        <Route path="*" element={<NotFound onBack={handleBackHistory}/>}/>
      </Routes>
    </>
  );
};


export default App;

