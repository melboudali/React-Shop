import React from 'react';
import { Container } from './Product.Style';
import PropTypes from 'prop-types';

const ImagesViewer = props => {
  return (
    <Container style={{ backgroundColor: 'green' }}>
      <div style={{ backgroundColor: 'black', width: '100%', height: '100%' }}></div>
    </Container>
  );
};

ImagesViewer.propTypes = {};

export default ImagesViewer;
