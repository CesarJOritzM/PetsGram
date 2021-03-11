import React from 'react';
import styled from 'styled-components';
import Favorites from '../components/Favorites';

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  padding: 8px 0;
`;

const Favs = () => (
  <>
    <Title>Favoritos</Title>
    <Favorites />;
  </>
);

export default Favs;
