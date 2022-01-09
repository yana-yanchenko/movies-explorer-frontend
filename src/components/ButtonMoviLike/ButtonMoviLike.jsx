import React from 'react';
import './ButtonMoviLike.css'
import likeActive from '../../images/like-active.svg';
import likeDisable from '../../images/like-disable.svg';
import cross from '../../images/like-disable.svg';



const ButtonMoviLike = () => {
  return (
    <span className="card-button" style={{backgroundImage: `url(${false ? likeActive : likeDisable})`}}></span>
  );
}

export default ButtonMoviLike;
