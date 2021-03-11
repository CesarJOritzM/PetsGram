import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Context from './hooks/Context';
import App from './components/App';

const client = new ApolloClient({
  uri: 'https://pets-gram.vercel.app/graphql',
  request: (operation) => {
    const token = window.sessionStorage.getItem('token');
    const authorization = token ? `Bearer ${token}` : '';
    operation.setContext({
      headers: {
        authorization,
      },
    });
  },
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
);
