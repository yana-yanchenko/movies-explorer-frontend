import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  const routersLinks = [
    { name: "Главная", path: "/", id: "1" },
    { name: "Фильмы", path: "/movies", id: "2" },
    { name: "Сохраненные фильмы", path: "/saved-movies", id: "3" },
  ]
  return (
    <nav className={`navigation`}>
      <ul className={`navigation__list`}>
        {
          routersLinks.map((item) =>
            <li key={item.id} className={`navigation__list-element`}>
            <NavLink to={item.path} className={({ isActive }) => isActive ? "navigation__link navigation__link_type_active" : "navigation__link"}>
              {item.name}
            </NavLink>
          </li>
          )
        }
      </ul>
    </nav>
  );
}

export default Navigation;
