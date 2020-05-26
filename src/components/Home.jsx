import React from 'react';
import { Button, Container } from '@material-ui/core';
import Navbar from './layouts/Navbar';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <>
      <Navbar Container={Container} />
      <Container>
       {/* Sections */}
      </Container>
    </>
  );
};

Home.propTypes = {};

export default Home;
