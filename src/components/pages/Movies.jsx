import React, { useState } from "react";
import ButtonMore from "../ButtonMore/ButtonMore";
import ContainerMain from "../Containers/ContainerMain";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Prealoder from "../Preloader/Preloader";

const Movies = ({
  isLoggedIn,
  movies,
  isMoviesConfig,
  handleCardsIncreases,
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
              isLocationSaved={false}
            />
            <ButtonMore handleCardsIncreases={handleCardsIncreases} />
          </>
        )}
      </ContainerMain>
      <Footer />
    </>
  );
};

export default Movies;
