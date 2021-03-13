import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import Category from './Category';
import fadeIn from '../assets/styles/animation/FadeIn';
import useFetch from '../hooks/useFetch';

const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding-bottom: 1rem;
  ${fadeIn()};
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
       {
        ${fadeIn()};
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
      }
    `}
`;
const Item = styled.li`
  padding: 0 8px;
`;

const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const url = 'https://pets-gram.vercel.app/categories';
  const [data, loading] = useFetch(url);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      if (showFixed !== newShowFixed) {
        setShowFixed(newShowFixed);
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {data.map((category) => (
        <Item key={category.id}>
          <Category
            cover={category.cover}
            path={`/pet/${category.id}`}
            emoji={category.emoji}
            name={category.name}
          />
        </Item>
      ))}
    </List>
  );
  if (loading) {
    return (
      <List>
        <Item>
          <Skeleton circle height={75} width={75} />
        </Item>
        <Item>
          <Skeleton circle height={75} width={75} />
        </Item>
        <Item>
          <Skeleton circle height={75} width={75} />
        </Item>
        <Item>
          <Skeleton circle height={75} width={75} />
        </Item>
      </List>
    );
  }
  return (
    <>
      {!showFixed && renderList(false)}
      {showFixed && renderList(true)}
    </>
  );
};

export default React.memo(ListOfCategories);
