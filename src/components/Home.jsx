import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import Navbar from './layouts/Navbar';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <>
      <Navbar Container={Container} />
      <Container>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </Container>
    </>
  );
};

Home.propTypes = {};

export default Home;
