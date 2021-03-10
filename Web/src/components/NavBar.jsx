import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { RiHeartsFill, RiUser3Fill, RiHome2Fill } from 'react-icons/ri';
import fadeIn from '../assets/styles/animation/FadeIn';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f5ebf5;
  border-top: 1px solid #b9b9b9;
  bottom: 0;
  height: 50px;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
  &[aria-current] {
    color: #000;
    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
      color: #f91212;
    }
  }
`;

const NavBar = () => {
  const size = '32px';
  return (
    <Nav>
      <Link to="/">
        <RiHome2Fill size={size} />
      </Link>
      <Link to="/favs">
        <RiHeartsFill size={size} />
      </Link>
      <Link to="/user">
        <RiUser3Fill size={size} />
      </Link>
    </Nav>
  );
};

export default NavBar;
