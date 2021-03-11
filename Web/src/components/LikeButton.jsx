import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    color: #f91212;
    margin-right: 4px;
  }
`;

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

const LikeButton = ({ likes, id, liked }) => {
  const [likePhoto] = useMutation(LIKE_PHOTO, {
    variables: {
      input: { id },
    },
  });

  const handleLikeButton = () => {
    likePhoto({ id });
  };

  const size = '32px';

  return (
    <Button type="button" onClick={() => handleLikeButton()}>
      {liked ? <MdFavorite size={size} /> : <MdFavoriteBorder size={size} />}
      {likes} Likes!
    </Button>
  );
};

export default LikeButton;
