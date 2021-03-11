import React from 'react';
import { Router } from '@reach/router';
import Context from '../hooks/Context';

import GlobalStyle from '../assets/styles/GlobalStyles';
import Logo from '../assets/images/Logo';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Favs from '../pages/Favs';
import User from '../pages/User';
import NotRegisterUser from '../pages/NotRegisterUser';
import NavBar from './NavBar';

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path="/" />
      <Home path="/pet/:id" />
      <Details path="/detail/:id" />
    </Router>

    <Context.Consumer>
      {({ isAuth }) =>
        isAuth ? (
          <Router>
            <Favs path="/favs" />
            <User path="/user" />
          </Router>
        ) : (
          <Router>
            <NotRegisterUser path="/favs" />
            <NotRegisterUser path="/user" />
          </Router>
        )
      }
    </Context.Consumer>

    <NavBar />
  </>
);
export default App;
