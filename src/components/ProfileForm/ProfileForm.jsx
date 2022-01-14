import React from "react";
import "./ProfileForm.css";

const ProfileForm = ({ user }) => {
  return (
    <form className="profile-form">
      <h1 className="profile-form__title">{`Привет, ${user.name}!`}</h1>
      <label className="profile-form__label">
        Имя
        <input className="profile-form__input"></input>
      </label>
      <span className="profile-form__span"></span>
      <label className="profile-form__label">
        E-mail
        <input className="profile-form__input"></input>
      </label>
      <span className="profile-form__span"></span>
      <button className="profile-form__button-submit">Редактировать</button>
      <button className="profile-form__button-logout">Выйти из аккаунта</button>
    </form>
  );
};

export default ProfileForm;
