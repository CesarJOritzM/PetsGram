import React from 'react';
import ListOfCategories from './ListOfCategories';
import ListOfPhotoCard from './ListOfPhotoCard';
import GlobalStyle from '../../assets/styles/GlobalStyles';
import Logo from '../../assets/images/Logo';

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
);
export default App;
