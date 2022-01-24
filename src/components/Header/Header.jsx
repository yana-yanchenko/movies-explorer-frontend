import React from "react";
import AuthPromo from "../AuthPromo/AuthPromo";
import Logo from "../Logo/Logo";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import MobileMenuButton from "../MobileMenuButton/MobileMenuButton";

const Header = ({ type, isLoggedIn, mobileSize, handleMobileMenu }) => {
  return (
    <header className={`header header_theme_${type}`}>
      <Logo />
      {!mobileSize && isLoggedIn && <Navigation navColumn={false} />}

      {mobileSize && isLoggedIn ? (
        <MobileMenuButton handleMobileMenu={handleMobileMenu} />
      ) : (
        <AuthPromo isLoggedIn={isLoggedIn} />
      )}
    </header>
  );
};

export default Header;
