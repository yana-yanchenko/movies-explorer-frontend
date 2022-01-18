import React, { useState } from "react";
import "./ButtonMoviLike.css";
import likeActive from "../../images/like-active.svg";
import likeDisable from "../../images/like-disable.svg";

const ButtonMoviLike = () => {
  const [Like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!Like);
  };
  return (
    <span
      className="card-button"
      style={{ backgroundImage: `url(${Like ? likeActive : likeDisable})` }}
      onClick={handleLike}
    ></span>
  );
};

export default ButtonMoviLike;
