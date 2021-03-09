import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PhotoCard from './PhotoCard';

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

const ListOfPhotoCard = () => {
  const [photos, setPhotos] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <List>
      {photos.map((photo) => (
        <Item key={photo}>
          <PhotoCard id={photo} likes={photo.likes} src={photo.src} />
        </Item>
      ))}
    </List>
  );
};

export default ListOfPhotoCard;
