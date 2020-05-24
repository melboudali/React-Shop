import React from 'react';
import { Button, Container } from '@material-ui/core';
import Navbar from './layouts/Navbar';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <>
      <Navbar Container={Container} />
      <Container>
        <Button color='primary'>
          <i className='far fa-save' />
          save
        </Button>
        <Button color='secondary'>
          <i className='fab fa-github-square' />
          cancel
        </Button>
      </Container>
    </>
  );
};

Home.propTypes = {};

export default Home;
