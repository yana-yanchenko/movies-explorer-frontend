import React from "react";
import ContainerMain from "../Containers/ContainerMain";
import Header from "../Header/Header";
import ProfileForm from "../ProfileForm/ProfileForm";

const Profile = ({ isLoggedIn, user, mobileSize, handleMobileMenu }) => {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        mobileSize={mobileSize}
        handleMobileMenu={handleMobileMenu}
      />
      <ContainerMain type="profile">
        <ProfileForm user={user} />
      </ContainerMain>
    </>
  );
};

export default Profile;
