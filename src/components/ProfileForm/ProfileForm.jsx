import React, { useContext } from "react";
import "./ProfileForm.css";
import { useForm } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ProfileForm = ({ onLogOut, onUpdateUser }) => {
  const user = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onUpdateUser(values);
      resetForm()
    }
    return
  };

  return (
    <form className="profile-form" noValidate onSubmit={handleSubmit}>
      <h1 className="profile-form__title">{`Привет, ${user.name}!`}</h1>
      <label className="profile-form__label" htmlFor="name">
        Имя
        <input
          className={`profile-form__input ${errors?.name && 'form__input_type_error'}`}
          placeholder={user.name}
          name="name"
          required
          minLength="2"
          maxLength="30"
          type="text"
          value={values.name || ""}
          onChange={handleChange}
        />
      </label>
      <span
        className={`profile-form__span ${errors?.name && 'form__error_type_active'}`}>{errors?.name}</span>
      <label className="profile-form__label" htmlFor="email">
        E-mail
        <input
          className={`profile-form__input ${errors?.email && 'form__input_type_error'}`}
          placeholder={user.email}
          name="email"
          type="email"
          value={values.email || ""}
          onChange={handleChange}
        />
      </label>
      <span className={`profile-form__span ${errors?.email && 'form__error_type_active'}`}>{errors?.email}</span>
      <button disabled={!isValid} type="submit" className={`profile-form__button-submit ${!isValid && 'profile-form__button-submit_type_disabled'}`}>Редактировать</button>

      < button className="profile-form__button-logout" type="button" onClick={onLogOut}>Выйти из аккаунта</button>
    </form>
  );
};

export default ProfileForm;
