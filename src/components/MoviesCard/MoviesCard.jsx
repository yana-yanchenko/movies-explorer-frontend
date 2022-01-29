import React from "react";
import { timeConventer } from "../../utils/movies-services";
import ButtonMoviLike from "../ButtonMoviLike/ButtonMoviLike";
import "./MoviesCard.css";

const MoviesCard = ({ movie, isLocationSaved, handleSavedMovies, handleDeleteMovies, isLiked }) => {

  return (
    <article className="card">
      <a
        href={movie.trailer}
        className="card__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card__image"
          src={movie.image}
          alt={movie.nameRU}
        />
      </a>
      <h2 className="card__title">
        {movie.nameRU}
        <ButtonMoviLike isLocationSaved={isLocationSaved} handleSavedMovies={handleSavedMovies} handleDeleteMovies={handleDeleteMovies} movie={movie} isLiked={isLiked} />
      </h2>
      <p className="card__time">{timeConventer(movie.duration)}</p>
    </article>
  );
};

export default MoviesCard;
