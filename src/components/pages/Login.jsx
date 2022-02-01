import React from "react";
import ContainerMain from "../Containers/ContainerMain";
import LoginForm from "../Forms/LoginForm";
import Logo from "../Logo/Logo";

const Login = ({ onSubmit }) => {
  return (
    <ContainerMain type="auth">
      <Logo />
      <LoginForm onSubmit={onSubmit} />
    </ContainerMain>
  );
};

export default Login;
