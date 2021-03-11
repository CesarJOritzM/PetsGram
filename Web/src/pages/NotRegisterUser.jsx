import React from 'react';
import Context from '../hooks/Context';
import UserForm from '../components/UserForm';
import useRegister from '../hooks/useRegister';

const NotRegisteredUser = () => {
  const { register, loading, error } = useRegister();

  const Registro = ({ activateAuth }) => {
    const onSubmit = ({ email, password }) => {
      const input = { email, password };
      const variables = { input };
      register({ variables }).then(() => {
        activateAuth();
      });
    };
    return (
      <UserForm
        onSubmit={onSubmit}
        title="Registrarse"
        error={error}
        loading={loading}
      />
    );
  };

  return (
    <Context.Consumer>
      {({ activateAuth }) => (
        <>
          <Registro activateAuth={activateAuth} />
          <UserForm title="Iniciar sesión" onSubmit={activateAuth} />
        </>
      )}
    </Context.Consumer>
  );
};

export default NotRegisteredUser;
