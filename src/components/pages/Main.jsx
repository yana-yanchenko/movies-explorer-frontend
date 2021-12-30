import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import AboutProject from '../AboutProject/AboutProject';
import ContainerMain from '../Containers/ContainerMain';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import Portfolio from '../Portfolio/Portfolio';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';

const Main = ({isLoggedIn}) => {
  return (
    <>
    <Header type="blue" isLoggedIn={isLoggedIn}/>
    <ContainerMain type="main">
      <Promo/>
      <NavTab/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </ContainerMain>
    <Footer/>
    </>
  );
}

export default Main;
