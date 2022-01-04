import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Movies from '../pages/Movies';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import SavedMovies from '../pages/SavedMovies';
import './App.css'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate()
  const handleBackHistory = () => {
    navigate(-1)
  }
  const user  = {name : "Виталий"}
  return (
    <>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn}/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} user={user}/>}/>
        <Route path="/movies" element={<Movies isLoggedIn={isLoggedIn}/>}/>
        <Route path="/saved-movies" element={<SavedMovies isLoggedIn={isLoggedIn}/>}/>
        <Route path="*" element={<NotFound onBack={handleBackHistory}/>}/>
      </Routes>
    </>
  );
};


export default App;

