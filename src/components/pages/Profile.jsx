import React from 'react';
import ContainerMain from '../Containers/ContainerMain';
import Header from '../Header/Header';
import ProfileForm from '../ProfileForm/ProfileForm';

const Profile = ( {isLoggedIn , user}) => {
  return (
    <>
    <Header isLoggedIn={isLoggedIn}/>
    <ContainerMain type="profile">
       <ProfileForm user={user}/>
    </ContainerMain>
    </>
  );
}

export default Profile;
