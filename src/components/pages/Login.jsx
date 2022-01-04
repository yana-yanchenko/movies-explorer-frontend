import React from 'react';
import ContainerMain from '../Containers/ContainerMain';
import LoginForm from '../Forms/LoginForm';
import Logo from '../Logo/Logo';

const Login = () => {
  return (
    <ContainerMain type="auth">
    <Logo/>
    <LoginForm/>
  </ContainerMain>
  );
}

export default Login;
