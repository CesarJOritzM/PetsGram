import React from 'react';
import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';
import { RiHeartsFill, RiUser3Fill, RiHome2Fill } from 'react-icons/ri';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
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
`;

const NavBar = () => {
  const size = '32px';
  const iconStyles = { color: '#666666' };
  return (
    <Nav>
      <Link to="/">
        <RiHome2Fill size={size} style={iconStyles} />
      </Link>
      <Link to="/favs">
        <RiHeartsFill size={size} style={iconStyles} />
      </Link>
      <Link to="/user">
        <RiUser3Fill size={size} style={iconStyles} />
      </Link>
    </Nav>
  );
};

export default NavBar;
