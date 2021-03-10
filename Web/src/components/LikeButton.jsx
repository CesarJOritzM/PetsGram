import React from 'react';
import styled from 'styled-components';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;

const LikeButton = ({ likes, liked, onclick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button type="button" onClick={() => onclick()}>
      <Icon size="32px" />
      {likes} Likes!
    </Button>
  );
};

export default LikeButton;
