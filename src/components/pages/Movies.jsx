import React,{useState} from 'react';
import ContainerMain from '../Containers/ContainerMain';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

const Movies = ({ isLoggedIn }) => {
  const [isFilterButton, setIsFilterButton] = useState(false);

  const handleFilterButton = () => {
    setIsFilterButton(!isFilterButton)
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn}/>
      <ContainerMain type="movies">
        <SearchForm isFilterButton={isFilterButton} onToggleSwitch={handleFilterButton}/>
      </ContainerMain>
    </>
  );
}

export default Movies;
