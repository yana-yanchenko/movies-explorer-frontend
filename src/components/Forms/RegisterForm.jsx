import React from "react";
import { Link } from "react-router-dom";
import "./Forms.css";

const RegisterForm = () => {
  return (
    <form className="form form_type_signup">
      <h1 className="form__title">Добро пожаловать!</h1>
      <label className="form__label" htmlFor="name">
        Имя
        <input
          className="form__input"
          minLength="2"
          maxLength="30"
          name="name"
          required="true"
          type="text"
        />
      </label>
      <span className="form__error">error</span>
      <label className="form__label" htmlFor="email">
        E-mail
        <input
          className="form__input"
          name="email"
          required="true"
          type="email"
        />
      </label>
      <span className="form__error">error</span>
      <label className="form__label" htmlFor="password">
        Пароль
        <input
          className="form__input form__input_type_error"
          name="password"
          required="true"
          minLength="7"
          type="password"
        />
      </label>
      <span className="form__error form__error_type_active">error</span>
      <button type="submit" className="form__button form__button_type_signup">
        Зарегистрироваться
      </button>
      <Link to="/signin" className="form__link">
        Уже зарегистрированы?
        <p className="form__link-value">Войти</p>
      </Link>
    </form>
  );
};

export default RegisterForm;
