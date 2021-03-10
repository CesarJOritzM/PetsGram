import React from 'react';
import Context from '../hooks/Context';

const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => (
      <form onSubmit={activateAuth}>
        <button>Iniciar sesión</button>
      </form>
    )}
  </Context.Consumer>
);
export default NotRegisteredUser;
