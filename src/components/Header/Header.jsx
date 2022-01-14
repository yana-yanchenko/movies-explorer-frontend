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
      {/* <Navigation/> */}
      <AuthPromo isLoggedIn={isLoggedIn} />
      {mobileSize && <MobileMenuButton handleMobileMenu={handleMobileMenu} />}
    </header>
  );
};

export default Header;
