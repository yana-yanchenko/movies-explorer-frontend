import React, { useState } from "react";
import "./ButtonMoviLike.css";
import likeActive from "../../images/like-active.svg";
import likeDisable from "../../images/like-disable.svg";
import likeSaved from "../../images/saved-cross.svg";

const ButtonMoviLike = ({ isLocationSaved }) => {
  const [Like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!Like);
  };
  return (
    <button
      className={`${isLocationSaved ? "saved-button" : "card-button"}`}
      style={{
        backgroundImage: `url(${
          isLocationSaved ? likeSaved : Like ? likeActive : likeDisable
        })`,
      }}
      onClick={handleLike}
      type="button"
    ></button>
  );
};

export default ButtonMoviLike;
