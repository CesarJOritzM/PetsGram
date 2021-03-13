import React from 'react';
import { Helmet } from 'react-helmet';
import ListOfCategories from '../components/ListOfCategories';
import ListOfPhotoCard from '../components/ListOfPhotoCard';

const Home = ({ id }) => (
  <>
    <Helmet>
      <title> Petgram - Tu app de fotos para mascotas</title>
      <meta
        name="description"
        content="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
      />
    </Helmet>
    <ListOfCategories />
    <ListOfPhotoCard categoryId={id} />
  </>
);

export default React.memo(
  Home,
  (prevProps, props) => prevProps.id === props.id
);
