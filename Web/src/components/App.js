import React from 'react';
import { Router } from '@reach/router';
import GlobalStyle from '../assets/styles/GlobalStyles';
import Logo from '../assets/images/Logo';
import Details from '../pages/Details';
import Home from '../pages/Home';
import NavBar from './NavBar';

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path="/" />
      <Home path="/pet/:id" />
      <Details path="/detail/:detailId" />
    </Router>
    <NavBar />
  </>
);
export default App;
