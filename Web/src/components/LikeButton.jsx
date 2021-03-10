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
  const size = '32px';
  const iconStyles = { color: ' #F91212' };

  return (
    <Button type="button" onClick={() => onclick()}>
      {liked ? (
        <MdFavorite size={size} style={iconStyles} />
      ) : (
        <MdFavoriteBorder size={size} />
      )}
      {likes} Likes!
    </Button>
  );
};

export default LikeButton;
