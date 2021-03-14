import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Skeleton from 'react-loading-skeleton';
import PhotoCard from './PhotoCard';

export const List = styled.ul`
  overflow: scroll;
  width: 100%;
  margin: 0 0 30px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Item = styled.li`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const ListOfPhotoCard = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: {
      categoryId,
    },
  });

  if (loading) {
    return (
      <List>
        <Item>
          <Skeleton width={340} height={220} />
          <Skeleton width={120} height={30} />
        </Item>
        <Item>
          <Skeleton width={340} height={220} />
          <Skeleton width={120} height={30} />
        </Item>
        <Item>
          <Skeleton width={340} height={220} />
          <Skeleton width={120} height={30} />
        </Item>
      </List>
    );
  }
  if (error) {
    return <h1>Ooopss... Ocurrio un error, vuelve a recargar la paguina </h1>;
  }
  return (
    <List>
      {data?.photos?.map((photo) => (
        <Item key={photo.id}>
          <PhotoCard
            id={photo.id}
            likes={photo.likes}
            src={photo.src}
            liked={photo.liked}
          />
        </Item>
      ))}
    </List>
  );
};

export default ListOfPhotoCard;
