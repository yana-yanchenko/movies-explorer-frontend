import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

const LoginForm = ({ onSubmit }) => {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(values.email, values.password);
      resetForm()
    }
    return
  };

  return (
    <form className="form form_type_signin" noValidate onSubmit={handleSubmit}>
      <h1 className="form__title">Рады видеть!</h1>
      <label className="form__label" htmlFor="email">
        E-mail
        <input
          className={`form__input ${errors?.email && 'form__input_type_error'}`}
          required
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChange}
        />
      </label>
      <span className={`form__error ${errors?.email && 'form__error_type_active'}`}>{errors?.email}</span>
      <label className="form__label" htmlFor="password">
        Пароль
        <input
          className={`form__input ${errors?.password && 'form__input_type_error'}`}
          required
          type="password"
          name="password"
          minLength="7"
          value={values.password || ""}
          onChange={handleChange}
        />
      </label>
      <span className={`form__error ${errors?.password && 'form__error_type_active'}`}>{errors?.password}</span>
      <button disabled={!isValid} type="submit" className={`form__button form__button_type_signin ${!isValid && 'form__button_type_disabled'}`}>
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
