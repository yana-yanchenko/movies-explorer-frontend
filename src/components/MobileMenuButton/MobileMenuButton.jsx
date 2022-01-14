import React from "react";
import "./MobileMenuButton.css";

const MobileMenuButton = ({ handleMobileMenu }) => {
  return (
    <button className="button-menu" onClick={handleMobileMenu}>
      <span className="button-menu__line"></span>
    </button>
  );
};

export default MobileMenuButton;
