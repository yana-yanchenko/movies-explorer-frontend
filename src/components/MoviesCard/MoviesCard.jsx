import React from 'react';
import ButtonMoviLike from '../ButtonMoviLike/ButtonMoviLike';
import './MoviesCard.css'

const MoviesCard = ({movie}) => {
  return (
    <article className="card">
      <a className="card__link">
        <img className="card__image" src={`https://api.nomoreparties.co/${movie.image.url}`}></img>
      </a>
      <h2 className="card__title">{movie.nameRU}<ButtonMoviLike/></h2>
      <p className="card__time">{movie.duration}</p>
    </article>
  );
}

export default MoviesCard;
