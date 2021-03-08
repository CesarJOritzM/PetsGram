import React from 'react';
import ListOfCategories from './ListOfCategories';
import ListOfPhotoCard from './ListOfPhotoCard';
import GlobalStyle from '../../assets/styles/GlobalStyles';
import Logo from './Logo';

const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCard />
  </>
);
export default App;
