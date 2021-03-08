import React from 'react';
import styled from 'styled-components';
import PhotoCard from './PhotoCard';
import { photos } from '../../db.json';

const List = styled.ul`
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Item = styled.li`
  padding: 0 8px;
`;

const ListOfPhotoCard = () => (
  <List>
    {photos.map((photo) => (
      <Item key={photo.id}>
        <PhotoCard id={photo.id} likes={photo.likes} src={photo.src} />
      </Item>
    ))}
  </List>
);

export default ListOfPhotoCard;
