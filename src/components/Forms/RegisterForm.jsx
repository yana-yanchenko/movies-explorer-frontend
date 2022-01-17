import React from "react";
import { Link } from "react-router-dom";
import "./Forms.css";

const RegisterForm = () => {
  return (
    <form className="form form_type_signup">
      <h1 className="form__title">Добро пожаловать!</h1>
      <label className="form__label">
        Имя
        <input className="form__input" />
      </label>
      <span className="form__error"></span>
      <label className="form__label">
        E-mail
        <input className="form__input" />
      </label>
      <span className="form__error"></span>
      <label className="form__label">
        Пароль
        <input className="form__input" />
      </label>
      <span className="form__error">frf</span>
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
