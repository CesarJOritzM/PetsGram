import React from 'react';
import styled from 'styled-components';
import Category from './Category';
import { categories } from '../../db.json';

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
    {categories.map((category) => (
      <Item key={category.id}>
        <Category
          cover={category.cover}
          path={category.path}
          emoji={category.emoji}
          name={category.name}
        />
      </Item>
    ))}
  </List>
);

export default ListOfCategories;
