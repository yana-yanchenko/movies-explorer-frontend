import React, { useState } from "react";
import ContainerMain from "../Containers/ContainerMain";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Prealoder from "../Preloader/Preloader";

const SavedMovies = ({
  isLoggedIn,
  movies,
  isMoviesConfig,
  mobileSize,
  handleMobileMenu,
}) => {
  const [isFilterButton, setIsFilterButton] = useState(false);

  const handleFilterButton = () => {
    setIsFilterButton(!isFilterButton);
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        mobileSize={mobileSize}
        handleMobileMenu={handleMobileMenu}
      />
      <ContainerMain type="movies">
        <SearchForm
          isFilterButton={isFilterButton}
          onToggleSwitch={handleFilterButton}
        />
        {movies.isLoading ? (
          <Prealoder />
        ) : (
          <>
            <MoviesCardList
              movies={movies}
              isMoviesConfig={isMoviesConfig}
              isLocationSaved={true}
            />
          </>
        )}
      </ContainerMain>
      <Footer />
    </>
  );
};

export default SavedMovies;
