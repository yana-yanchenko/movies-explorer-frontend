import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Main from '../pages/Main';
import './App.css'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
};


export default App;

