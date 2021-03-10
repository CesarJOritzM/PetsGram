import React from 'react';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCard from '../components/ListOfPhotoCard';

const Home = ({ id }) => (
  <>
    <ListOfCategories />
    <ListOfPhotoCard categoryId={id} />
  </>
);

export default Home;
