import React, { useState, useEffect } from "react";
import ButtonMore from "../ButtonMore/ButtonMore";
import ContainerMain from "../Containers/ContainerMain";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloder from "../Preloader/Preloader";
import LocalServices from "../../utils/local-services";
import { filterKeywords } from "../../utils/movies-services";

const Movies = ({
  isLoggedIn,
  movies,
  moviesSaved,
  isMoviesConfig,
  handleCardsIncreases,
  mobileSize,
  handleMobileMenu,
  handleSavedMovies,
  handleDeleteMovies
}) => {
  const [isFilterButton, setIsFilterButton] = useState(true);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [key, setKey] = useState('');

  useEffect(() => {
    if (!movies.isLoading) {
      setCurrentMovies(isFilterButton ? movies.items : movies.itemsShort)
    }
  }, [isFilterButton, movies.isLoading, movies.items, movies.itemsShort]);

  useEffect(() => {
    const lastSearchingKey = LocalServices.getItem('lastSearchMoviesKeyword')
    if (lastSearchingKey) {
      setKey(lastSearchingKey)
    }
    const lastValueFilterButton = LocalServices.getItem('isFilterButtonMovies')
    if (lastValueFilterButton === false) {
      setIsFilterButton(false)
    }
  }, []);

  const handleFilterButton = () => {
    setIsFilterButton(!isFilterButton);
    LocalServices.setItem('isFilterButtonMovies', !isFilterButton)
  };

  const handleSearchMovieByKeyword = (keyword) => {
    setKey(keyword)
    LocalServices.setItem('lastSearchMoviesKeyword', keyword)
  }

  useEffect(() => {
    if (key) {
      if (isFilterButton) {
        setCurrentMovies(filterKeywords(movies.items, key))
      } else {
        setCurrentMovies(filterKeywords(movies.itemsShort, key))
      }
    } else {
      setCurrentMovies(isFilterButton ? movies.items : movies.itemsShort)
    }
  }, [isFilterButton, key, movies.items, movies.itemsShort]);


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
        />
        {movies.isLoading ? (
          <Preloder />
        ) : currentMovies.length > 0 ? (
          <>
            <MoviesCardList
              currentMovies={currentMovies}
              moviesSaved={moviesSaved}
              isMoviesConfig={isMoviesConfig}
              isLocationSaved={false}
              handleSavedMovies={handleSavedMovies}
              handleDeleteMovies={handleDeleteMovies}
            />
            {currentMovies.length > isMoviesConfig.number && <ButtonMore handleCardsIncreases={handleCardsIncreases} />}
          </>
        ) : <p>Ничего не найдено</p>
        }
      </ContainerMain>
      <Footer />
    </>
  );
};

export default Movies;
