import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
const MoviesCardList = ({ currentMovies, moviesSaved, isMoviesConfig, isLocationSaved, handleSavedMovies, handleDeleteMovies }) => {
  return (
    <section className="movies">
      {currentMovies.slice(0, isMoviesConfig.number).map((movie) => (
        <MoviesCard
          movie={movie}
          key={movie.movieId}
          isLiked={(!isLocationSaved && moviesSaved.items.some((e) => e.movieId === movie.movieId))}
          isLocationSaved={isLocationSaved}
          handleSavedMovies={handleSavedMovies}
          handleDeleteMovies={handleDeleteMovies}
        />
      ))}
    </section>
  );
};

export default MoviesCardList;
