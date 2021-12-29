import React from 'react';
import AccountButton from '../AccountButton/AccountButton';
import AuthButtons from '../AuthButtons/AuthButtons';
import './AuthPromo.css'

const AuthPromo = ({isLoggedIn}) => {
  return (
    <div className="auth-promo">
      {
        isLoggedIn ? 
          <AccountButton/>
        :
         <AuthButtons/>
      }
    </div>
  );
}

export default AuthPromo;
