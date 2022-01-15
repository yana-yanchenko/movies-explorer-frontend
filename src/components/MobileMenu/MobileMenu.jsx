import React from "react";
import AuthPromo from "../AuthPromo/AuthPromo";
import Navigation from "../Navigation/Navigation";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen, handleMobileMenu }) => {
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
        <Navigation navColumn={true} />
        <AuthPromo />
      </div>
    </aside>
  );
};

export default MobileMenu;
