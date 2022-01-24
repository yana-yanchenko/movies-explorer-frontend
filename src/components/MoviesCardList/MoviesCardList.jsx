import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
const MoviesCardList = ({ movies, isMoviesConfig, isLocationSaved }) => {
  return (
    <section className="movies">
      {movies.items.slice(0, isMoviesConfig.number).map((movie) => (
        <MoviesCard
          movie={movie}
          key={movie.id}
          isLocationSaved={isLocationSaved}
        />
      ))}
    </section>
  );
};

export default MoviesCardList;
