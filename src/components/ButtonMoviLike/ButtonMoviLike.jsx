import React from "react";
import "./ButtonMoviLike.css";
import likeActive from "../../images/like-active.svg";
import likeDisable from "../../images/like-disable.svg";
import likeSaved from "../../images/saved-cross.svg";

const ButtonMoviLike = ({ isLocationSaved, handleSavedMovies, handleDeleteMovies, movie, isLiked }) => {
  return (
    <button
      className={`${isLocationSaved ? "saved-button" : "card-button"}`}
      style={{
        backgroundImage: `url(${isLocationSaved ? likeSaved : isLiked ? likeActive : likeDisable})`
      }}
      onClick={() => isLocationSaved ? handleDeleteMovies(movie) : !isLiked ? handleSavedMovies(movie) : handleDeleteMovies(movie)}
      type="button"
    ></button>
  );
};

export default ButtonMoviLike;
