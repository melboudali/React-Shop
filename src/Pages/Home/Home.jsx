import React from 'react';
import Directory from '../../Components/Directory/Directory';
import PropTypes from 'prop-types';

const Home = ({ hello }) => {
  return (
    <div className='Home'>
      <Directory />
      <h1>{hello}</h1>
    </div>
  );
};

Home.propTypes = {};

export default Home;
