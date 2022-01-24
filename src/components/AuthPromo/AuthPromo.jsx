import React from "react";
import AccountButton from "../AccountButton/AccountButton";
import AuthButtons from "../AuthButtons/AuthButtons";
import "./AuthPromo.css";

const AuthPromo = ({ isLoggedIn, mobileMenuLocation, handleMobileMenu }) => {
  return (
    <div className="auth-promo">
      {isLoggedIn ? (
        <AccountButton
          mobileMenuLocation={mobileMenuLocation}
          handleMobileMenu={handleMobileMenu}
        />
      ) : (
        <AuthButtons />
      )}
    </div>
  );
};

export default AuthPromo;
