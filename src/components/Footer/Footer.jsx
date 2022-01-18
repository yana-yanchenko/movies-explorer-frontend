import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__copy">&copy; 2020</p>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              href="https://practicum.yandex.ru/profile/web/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://github.com/yana-yanchenko"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className="footer__list-item">
            <a
              href="https://github.com/yana-yanchenko"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
