import React,{useState} from 'react';
import ButtonMore from '../ButtonMore/ButtonMore';
import ContainerMain from '../Containers/ContainerMain';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer'

const Movies = ({ isLoggedIn, movies }) => {
  const [isFilterButton, setIsFilterButton] = useState(false);

  const handleFilterButton = () => {
    setIsFilterButton(!isFilterButton)
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <ContainerMain type="movies">
        <SearchForm isFilterButton={isFilterButton} onToggleSwitch={handleFilterButton}/>
        <MoviesCardList movies={movies}/>
        <ButtonMore/>
      </ContainerMain>
      <Footer/>
    </>
  );
}

export default Movies;
