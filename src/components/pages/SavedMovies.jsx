import React, { useState, useEffect } from "react";
import ContainerMain from "../Containers/ContainerMain";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Prealoder from "../Preloader/Preloader";
import LocalServices from "../../utils/local-services";
import { filterKeywords } from "../../utils/movies-services";

const SavedMovies = ({
  isLoggedIn,
  movies,
  moviesSaved,
  isMoviesConfig,
  mobileSize,
  handleMobileMenu,
  handleSavedMovies,
  handleDeleteMovies,
}) => {
  const [isFilterButton, setIsFilterButton] = useState(true);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [key, setKey] = useState(LocalServices.getItem('lastSearchMoviesSavedKeyword'));

  useEffect(() => {
    if (!moviesSaved.isLoading) {
      setCurrentMovies(isFilterButton ? moviesSaved.items : moviesSaved.itemsShort)
    }
  }, [isFilterButton, moviesSaved.isLoading, moviesSaved.items, moviesSaved.itemsShort]);

  useEffect(() => {
    const lastValueFilterButton = LocalServices.getItem('isFilterButtonMoviesSaved')
    if (lastValueFilterButton === false) {
      setIsFilterButton(false)
    }
  }, []);

  const handleFilterButton = () => {
    setIsFilterButton(!isFilterButton);
    LocalServices.setItem('isFilterButtonMoviesSaved', !isFilterButton)
  };

  const handleSearchMovieByKeyword = (keyword) => {
    setKey(keyword)
    LocalServices.setItem('lastSearchMoviesSavedKeyword', keyword)
  }

  useEffect(() => {
    if (key) {
      if (isFilterButton) {
        setCurrentMovies(filterKeywords(moviesSaved.items, key))
      } else {
        setCurrentMovies(filterKeywords(moviesSaved.itemsShort, key))
      }
    } else {
      setCurrentMovies(isFilterButton ? moviesSaved.items : moviesSaved.itemsShort)
    }
  }, [isFilterButton, key, moviesSaved.items, moviesSaved.itemsShort]);




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
          onSubmit={handleSearchMovieByKeyword}
          keyword={key}
          setKeyword={setKey}
          isLocationSaved={true}
        />
        {moviesSaved.isLoading ? (
          <Prealoder />
        ) : currentMovies.length > 0 ? (
          <>
            <MoviesCardList
              currentMovies={currentMovies}
              isMoviesConfig={isMoviesConfig}
              isLocationSaved={true}
              handleSavedMovies={handleSavedMovies}
              handleDeleteMovies={handleDeleteMovies}
            />
          </>
        ) : <p>Ничего не найдено</p>
        }
      </ContainerMain>
      <Footer />
    </>
  );
};

export default SavedMovies;
