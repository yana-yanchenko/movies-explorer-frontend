import React from 'react';
import ContainerMain from '../Containers/ContainerMain';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';

const Main = ({isLoggedIn}) => {
  return (
    <>
    <Header type="blue" isLoggedIn={isLoggedIn}/>
    <ContainerMain type="main">
      <Promo/>
      <NavTab/>
    </ContainerMain>
    </>
  );
}

export default Main;
