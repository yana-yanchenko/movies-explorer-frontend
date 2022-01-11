import React from 'react';
import './ButtonMore.css'

const ButtonMore = ({handleCardsIncreases}) => {
  return (
    <button className="movies-button" onClick={handleCardsIncreases}>
      Ещё
    </button>
  );
}

export default ButtonMore;
