import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link as LinkRouter } from '@reach/router';
import Spiner from '../assets/styles/animation/Spiner';

const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

const Grid = styled.div`
  padding-top: 16px;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`;
const Div = styled.div`
  padding-top: 50px;
  text-align: center;
`;

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      liked
      src
      likes
      userId
    }
  }
`;
const Favorites = () => {
  const { loading, error, data } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return (
      <Div>
        <Spiner />
      </Div>
    );
  }
  if (error) {
    return <h1>Ooopss... Ocurrio un error, vuelve a recargar la paguina </h1>;
  }
  return (
    <>
      <Grid>
        {data?.favs?.map((photo) => (
          <Link key={photo.id} to={`/detail/${photo.id}`}>
            <Image src={photo.src} alt="" />
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default Favorites;
