import React from 'react';
import { Container } from './Product.Style';

import PropTypes from 'prop-types';

const Comments = ({
  item: {
    id,
    name,
    description,
    colors,
    size,
    oldPrice,
    newPrice,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl,
    fourthImageUrl,
    rate,
    orders
  }
}) => {
  return (
    <Container style={{ backgroundColor: 'yellow' }}>
      <div style={{ backgroundColor: 'black', width: '100%', height: '100%' }} />
    </Container>
  );
};

Comments.propTypes = {};

export default Comments;
