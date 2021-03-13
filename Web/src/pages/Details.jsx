import React from 'react';
import { Helmet } from 'react-helmet';
import Detail from '../components/Detail';

const Details = ({ id }) => (
  <>
    <Helmet>
      <title> Detalle | Petgram </title>
      <meta name="description" content="Detalle de mascota" />
    </Helmet>
    <Detail id={id} />;
  </>
);
export default Details;
