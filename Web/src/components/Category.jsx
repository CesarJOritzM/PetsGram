import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;
const Img = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`;

const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?', name }) => (
  <Link to={path}>
    <Img src={cover} alt={name} />
    {emoji}
  </Link>
);

export default Category;
