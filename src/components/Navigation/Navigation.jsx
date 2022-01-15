import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ navColumn }) => {
  const routersLinks = [
    { name: "Главная", path: "/", id: "1" },
    { name: "Фильмы", path: "/movies", id: "2" },
    { name: "Сохраненные фильмы", path: "/saved-movies", id: "3" },
  ];
  return (
    <nav className={`navigation ${navColumn && "navigation_type_column"}`}>
      <ul
        className={`navigation__list ${
          navColumn && "navigation__list_type_column"
        }`}
      >
        {routersLinks.map((item) => (
          <li key={item.id} className={`navigation__list-element`}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "navigation__link navigation__link_type_active"
                  : "navigation__link"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
