import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Favorites from '../components/Favorites';

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding: 8px 0;
`;

const Favs = () => (
  <>
    <Helmet>
      <title> Tus Favoritos | Petgram </title>
      <meta name="description" content="Aquí puedes encontrar tus favoritos" />
    </Helmet>
    <Title>Favoritos</Title>
    <Favorites />;
  </>
);

export default Favs;
