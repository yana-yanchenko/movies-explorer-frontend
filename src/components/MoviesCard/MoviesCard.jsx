import React from "react";
import ButtonMoviLike from "../ButtonMoviLike/ButtonMoviLike";
import "./MoviesCard.css";

const MoviesCard = ({ movie }) => {
  const timeConventer = (data) => {
    const hour = Math.floor(data / 60);
    const minutes = data % 60;
    let time = ``;
    if (hour > 0) {
      time += hour + "ч ";
    }
    if (minutes > 0) {
      time += minutes + "м";
    }
    return time;
  };
  return (
    <article className="card">
      <a
        href={movie.trailerLink}
        className="card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card__image"
          src={`https://api.nomoreparties.co/${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>
      <h2 className="card__title">
        {movie.nameRU}
        <ButtonMoviLike />
      </h2>
      <p className="card__time">{timeConventer(movie.duration)}</p>
    </article>
  );
};

export default MoviesCard;
