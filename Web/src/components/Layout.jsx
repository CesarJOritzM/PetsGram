import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Div = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #222;
  padding-bottom: 8px;
`;

const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  padding-bottom: 4px;
`;
const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
    <Div>
      {title && <Title>{title}</Title>}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {children}
    </Div>
  </>
);

export default Layout;
