import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import './App.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main isLoggedIn={isLoggedIn}/>}/>
      </Routes>
    </>
  );
};


export default App;

