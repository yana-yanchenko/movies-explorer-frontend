import React from "react";
import ContainerMain from "../Containers/ContainerMain";
import Header from "../Header/Header";
import ProfileForm from "../ProfileForm/ProfileForm";

const Profile = ({ isLoggedIn, mobileSize, handleMobileMenu, onLogOut, onUpdateUser }) => {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        mobileSize={mobileSize}
        handleMobileMenu={handleMobileMenu}
      />
      <ContainerMain type="profile">
        <ProfileForm onUpdateUser={onUpdateUser} onLogOut={onLogOut} />
      </ContainerMain>
    </>
  );
};

export default Profile;
