import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import "./Forms.css";

const RegisterForm = ({ onSubmit }) => {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(values);
      resetForm()
    }
    return
  };

  return (
    <form className="form form_type_signup" noValidate onSubmit={handleSubmit}>
      <h1 className="form__title">Добро пожаловать!</h1>
      <label className="form__label" htmlFor="name">
        Имя
        <input
          className={`form__input ${errors?.name && 'form__input_type_error'}`}
          minLength="2"
          maxLength="30"
          name="name"
          required={true}
          type="text"
          value={values.name || ""}
          onChange={handleChange}
        />
      </label>
      <span className={`form__error ${errors?.name && 'form__error_type_active'}`}>{errors?.name}</span>
      <label className="form__label" htmlFor="email">
        E-mail
        <input
          className={`form__input ${errors?.email && 'form__input_type_error'}`}
          name="email"
          required={true}
          type="email"
          pattern="^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$"
          value={values.email || ""}
          onChange={handleChange}
        />
      </label>
      <span className={`form__error ${errors?.email && 'form__error_type_active'}`}>{errors?.email}</span>
      <label className="form__label" htmlFor="password">
        Пароль
        <input
          className={`form__input ${errors?.password && 'form__input_type_error'}`}
          name="password"
          required={true}
          minLength="7"
          type="password"
          value={values.password || ""}
          onChange={handleChange}
        />
      </label>
      <span className={`form__error ${errors?.password && 'form__error_type_active'}`}>
        {errors?.password}
      </span>
      <button disabled={!isValid} type="submit" className={`form__button form__button_type_signup ${!isValid && 'form__button_type_disabled'}`}>
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
