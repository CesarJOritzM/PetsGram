import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../hooks/Context';

const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`;
const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <Button onClick={removeAuth}>Cerrar sesión</Button>
    </>
  );
};

export default User;
