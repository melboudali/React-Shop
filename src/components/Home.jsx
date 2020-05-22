import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <div>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
    </div>
  );
};

Home.propTypes = {};

export default Home;
