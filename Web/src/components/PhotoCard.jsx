import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import fadeIn from '../assets/styles/animation/FadeIn';
import useNearScreen from '../hooks/useNearScreen';
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

const PhotoCard = ({ id, likes, src, liked }) => {
  const [show, ref] = useNearScreen();

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="" />
            </ImgWrapper>
          </Link>
          <LikeButton likes={likes} id={id} liked={liked} />
        </>
      )}
    </Article>
  );
};

export default PhotoCard;
