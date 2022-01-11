import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'
const MoviesCardList = ({movies, isMoviesConfig}) => {
  return (
    <section className='movies'>
      {
        movies.slice(0, isMoviesConfig.number).map((movie) => 
        <MoviesCard movie={movie} key={movie.id}/>
        )
      }
    </section>
  );
}

export default MoviesCardList;
