import React from 'react';
import Context from '../hooks/Context';
import UserForm from '../components/UserForm';
import useRegister from '../hooks/useRegister';
import useLogin from '../hooks/useLogin';

const NotRegisteredUser = () => {
  const {
    register,
    loading: loadingRegister,
    error: errorRegister,
  } = useRegister();
  const { login, loading: loadingLogin, error: erroLogin } = useLogin();

  const Registro = ({ activateAuth }) => {
    const onSubmit = ({ email, password }) => {
      const input = { email, password };
      const variables = { input };
      register({ variables }).then(() => {
        activateAuth();
      });
    };
    const errorMsg =
      errorRegister && 'Ops.. Ocurrio algo tal vez ya estes registado';
    return (
      <UserForm
        onSubmit={onSubmit}
        title="Registrarse"
        error={errorMsg}
        loading={loadingRegister}
      />
    );
  };

  const Login = ({ activateAuth }) => {
    const onSubmit = ({ email, password }) => {
      const input = { email, password };
      const variables = { input };
      login({ variables }).then(() => {
        activateAuth();
      });
    };
    const errorMsg =
      erroLogin && 'La contraseña no es correcta o el usuario no existe';
    return (
      <UserForm
        onSubmit={onSubmit}
        title="Iniciar sesión"
        error={errorMsg}
        loading={loadingLogin}
      />
    );
  };
  return (
    <Context.Consumer>
      {({ activateAuth }) => (
        <>
          <Registro activateAuth={activateAuth} />
          <Login activateAuth={activateAuth} />
        </>
      )}
    </Context.Consumer>
  );
};

export default NotRegisteredUser;
