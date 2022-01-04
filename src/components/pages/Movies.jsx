import React from 'react';
import ContainerMain from '../Containers/ContainerMain';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

const Movies = ({ isLoggedIn }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <ContainerMain type="movies">
        <SearchForm/>
      </ContainerMain>
    </>
  );
}

export default Movies;
