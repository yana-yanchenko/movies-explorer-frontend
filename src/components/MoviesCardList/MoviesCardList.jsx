import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'
const MoviesCardList = ({movies}) => {
  return (
    <section className='movies'>
      {
        movies.map((movie) => 
        <MoviesCard movie={movie} key={movie.id}/>
        )
      }
    </section>
  );
}

export default MoviesCardList;
