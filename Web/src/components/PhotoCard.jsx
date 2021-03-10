import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import fadeIn from '../../assets/styles/animation/FadeIn';
import useLocalStorage from '../../hooks/useLocalStorage';
import useNearScreen from '../../hooks/useNearScreen';
import LikeButton from './LikeButton';

const Article = styled.article`
  height: 250px;
  width: 340px;
`;
const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;
const Img = styled.img`
  ${fadeIn()};
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const PhotoCard = ({ id, likes, src }) => {
  const [show, ref] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [likeAnonymousPhoto, { loading, error, data }] = useMutation(
    LIKE_PHOTO,
    {
      variables: {
        input: { id },
      },
    }
  );

  const handleLikeButton = () => {
    if (!liked) {
      setLiked(!liked);
      likeAnonymousPhoto({ id });
    }
  };
  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </a>
          <LikeButton likes={likes} liked={liked} onclick={handleLikeButton} />
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
