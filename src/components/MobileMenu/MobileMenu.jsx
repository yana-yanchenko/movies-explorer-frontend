import React from "react";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen, handleMobileMenu }) => {
  return (
    <aside
      className={`menu ${isOpen ? "menu_type_visible" : "menu_type_hidden"}`}
    >
      <div className="menu__lens" onClick={handleMobileMenu}></div>
      <div className="menu__bar"></div>
    </aside>
  );
};

export default MobileMenu;
