import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';
import { Context } from '../hooks/Context';

import GlobalStyle from '../assets/styles/GlobalStyles';
import Logo from '../assets/images/Logo';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Favs from '../pages/Favs';
import User from '../pages/User';
import NotRegisterUser from '../pages/NotRegisterUser';
import NavBar from './NavBar';

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/detail/:id" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  );
};
export default App;
