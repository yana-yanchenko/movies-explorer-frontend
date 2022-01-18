import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className="form form_type_signin">
      <h1 className="form__title">Рады видеть!</h1>
      <label className="form__label" htmlFor="email">
        E-mail
        <input
          className="form__input"
          required="true"
          type="email"
          name="email"
        />
      </label>
      <span className="form__error">error</span>
      <label className="form__label" htmlFor="password">
        Пароль
        <input
          className="form__input"
          required="true"
          type="password"
          name="password"
          minLength="7"
        />
      </label>
      <span className="form__error ">error</span>
      <button type="submit" className="form__button form__button_type_signin">
        Войти
      </button>
      <Link to="/signup" className="form__link">
        Ещё не зарегистрированы?
        <p className="form__link-value">Регистрация</p>
      </Link>
    </form>
  );
};

export default LoginForm;
