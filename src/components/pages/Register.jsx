import React from 'react';
import ContainerMain from '../Containers/ContainerMain';
import RegisterForm from '../Forms/RegisterForm';
import Logo from '../Logo/Logo';

const Register = () => {
  return (
    <ContainerMain type="auth">
      <Logo/>
      <RegisterForm/>
    </ContainerMain>
  );
}

export default Register;
