import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title> Inicia sesión | Registrate </title>
        <meta name="description" content="Resgitrate o inicia sesión" />
      </Helmet>

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
