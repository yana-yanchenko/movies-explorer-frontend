import React from 'react';
import AuthPromo from '../AuthPromo/AuthPromo';
import Logo from '../Logo/Logo';
import './Header.css';
import Navigation from '../Navigation/Navigation'

const Header = ({type, isLoggedIn}, props) => {
  console.log(props);
  return (
    <header className={`header header_theme_${type}`}>
      <Logo />
      <Navigation/>
      <AuthPromo isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
