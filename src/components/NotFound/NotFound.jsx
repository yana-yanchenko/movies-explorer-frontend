import React from 'react';
import './NotFound.css'

const NotFound = () => {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__button">Назад</button>
    </section>
  );
}

export default NotFound;
