import React from "react";
import ContainerMain from "../Containers/ContainerMain";
import RegisterForm from "../Forms/RegisterForm";
import Logo from "../Logo/Logo";

const Register = ({ onSubmit }) => {
  return (
    <ContainerMain type="auth">
      <Logo />
      <RegisterForm onSubmit={onSubmit} />
    </ContainerMain>
  );
};

export default Register;
