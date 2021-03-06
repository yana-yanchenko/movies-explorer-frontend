import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButtons.css'

const AuthButtons = () => {

  return (
    <>
      <Link className="auth-link" to='/signup'>
        <button className="auth-button">Регистрация</button>
      </Link>
      <Link className="auth-link" to='/signin'>
        <button className="auth-button auth-button_theme_green">Войти</button>
      </Link>
    </>
  );
}

export default AuthButtons;
