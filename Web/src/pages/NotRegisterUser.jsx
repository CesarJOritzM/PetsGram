import React, { useContext } from 'react';
import { Context } from '../hooks/Context';
import UserForm from '../components/UserForm';
import useRegister from '../hooks/useRegister';
import useLogin from '../hooks/useLogin';

const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  const { register, loading, error } = useRegister();
  const { login, loading: loadingLogin, error: erroLogin } = useLogin();

  const handleRegister = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    register({ variables }).then(({ data }) => {
      activateAuth(data.signup);
    });
  };

  const handleLogin = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };
    login({ variables }).then(({ data }) => {
      activateAuth(data.login);
    });
  };

  return (
    <>
      <UserForm
        onSubmit={handleRegister}
        title="Registrarse"
        error={error && 'Ops.. Ocurrio algo tal vez ya estes registado'}
        loading={loading}
      />
      <UserForm
        onSubmit={handleLogin}
        title="Iniciar sesión"
        error={
          erroLogin && 'La contraseña no es correcta o el usuario no existe'
        }
        loading={loadingLogin}
      />
    </>
  );
};

export default NotRegisteredUser;
