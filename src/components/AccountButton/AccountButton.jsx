import React from "react";
import { Link } from "react-router-dom";
import "./AccountButton.css";
import accountImg from "../../images/account.svg";

const AccountButton = ({ handleMobileMenu, mobileMenuLocation }) => {
  return (
    <Link
      className="account-button"
      to="/profile"
      onClick={mobileMenuLocation ? handleMobileMenu : undefined}
    >
      <p className="account-button__title">Аккаунт</p>
      <div
        className="account-button__icon"
        style={{ backgroundImage: `url(${accountImg})` }}
      ></div>
    </Link>
  );
};

export default AccountButton;
