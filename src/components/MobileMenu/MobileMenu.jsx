import React from "react";
import AuthPromo from "../AuthPromo/AuthPromo";
import Navigation from "../Navigation/Navigation";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen, handleMobileMenu, isLoggedIn }) => {
  return (
    <aside
      className={`menu ${isOpen ? "menu_type_visible" : "menu_type_hidden"}`}
    >
      <div className="menu__lens" onClick={handleMobileMenu}></div>
      <div className="menu__bar">
        <button
          className="menu__button-cross"
          onClick={handleMobileMenu}
        ></button>
        <Navigation navColumn={true} handleMobileMenu={handleMobileMenu} />
        <AuthPromo
          isLoggedIn={isLoggedIn}
          mobileMenuLocation={true}
          handleMobileMenu={handleMobileMenu}
        />
      </div>
    </aside>
  );
};

export default MobileMenu;
