import React from 'react';
import styled from 'styled-components';
import { MdFavoriteBorder } from 'react-icons/md';

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
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => (
  <article>
    <a href={`/details/${id}`}>
      <ImgWrapper>
        <Img src={src} alt="" />
      </ImgWrapper>
    </a>
    <Button type="button">
      {' '}
      <MdFavoriteBorder size="32px" />
      {likes} Likes!
    </Button>
  </article>
);

export default PhotoCard;
