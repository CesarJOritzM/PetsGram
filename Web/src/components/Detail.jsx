import React from 'react';
import { gql } from 'apollo-boost';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@apollo/react-hooks';
import PhotoCard from './PhotoCard';
import { List, Item } from './ListOfPhotoCard';

const GET_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;
const Detail = ({ id }) => {
  const { loading, error, data } = useQuery(GET_PHOTO, {
    variables: { id },
  });

  if (loading) {
    return (
      <List>
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
      <Item>
        <PhotoCard
          id={data?.photo?.id}
          src={data?.photo?.src}
          likes={data?.photo?.likes}
        />
      </Item>
    </List>
  );
};

export default Detail;
