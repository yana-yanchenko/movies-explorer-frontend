import React from 'react';
import './NavTab.css'

const NavTab = () => {
  return (
    <section className="nav-tab">
      <a href="/" className="nav-tab__link">О проекте</a>
      <a href="/" className="nav-tab__link">Технологии</a>
      <a href="/" className="nav-tab__link">Студент</a>
    </section>
  );
}

export default NavTab;
