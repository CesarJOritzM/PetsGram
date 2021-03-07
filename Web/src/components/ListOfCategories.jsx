import React from 'react';
import styled from 'styled-components';
import Category from './Category';

// --------------- styles---------------
const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Item = styled.li`
  padding: 0 8px;
`;
// ---------------endStyles---------------

const ListOfCategories = () => (
  <List>
    {[1, 2, 3, 4].map((category) => (
      <Item key={category}>
        <Category />
      </Item>
    ))}
  </List>
);

export default ListOfCategories;
