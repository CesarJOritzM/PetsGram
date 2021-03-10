import React from 'react';
import { Router } from '@reach/router';

import GlobalStyle from '../assets/styles/GlobalStyles';
import Logo from '../assets/images/Logo';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Favs from '../pages/Favs';
import User from '../pages/User';
import NotRegisterUser from '../pages/NotRegisterUser';
import NavBar from './NavBar';

const UserLogged = ({ children }) => children({ isAuth: true });

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path="/" />
      <Home path="/pet/:id" />
      <Details path="/detail/:detailId" />
    </Router>

    <UserLogged>
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
    </UserLogged>

    <NavBar />
  </>
);
export default App;
