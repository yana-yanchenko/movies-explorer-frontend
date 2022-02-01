import React, { useContext, useState } from "react";
import "./ProfileForm.css";
import { useForm } from "../../hooks/useForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ProfileForm = ({ onLogOut, onUpdateUser }) => {
  const user = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useForm();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid || (user.name === values.name || user.email === values.email)) {
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
          name="name"
          minLength="2"
          maxLength="30"
          type="text"
          value={values.name || name}
          onChange={(e) => {
            handleChange(e)
            setName(e.target.value)
          }}
        />
      </label>
      <span
        className={`profile-form__span ${errors?.name && 'form__error_type_active'}`}>{errors?.name}</span>
      <label className="profile-form__label" htmlFor="email">
        E-mail
        <input
          className={`profile-form__input ${errors?.email && 'form__input_type_error'}`}
          name="email"
          type="email"
          value={email}
          pattern="^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$"
          onChange={(e) => {
            handleChange(e)
            setEmail(e.target.value)
          }}
        />
      </label>
      <span className={`profile-form__span ${errors?.email && 'form__error_type_active'}`}>{errors.email}</span>
      <button disabled={!isValid || (user.name === values.name || user.email === values.email)} type="submit"
        className={`profile-form__button-submit ${(!isValid || (user.name === values.name || user.email === values.email)) && 'profile-form__button-submit_type_disabled'}`}>Редактировать</button>
      < button className="profile-form__button-logout" type="button" onClick={onLogOut}>Выйти из аккаунта</button>
    </form>
  );
};

export default ProfileForm;
