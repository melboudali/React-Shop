import React from 'react';
import Directory from '../../Components/Directory/Directory';
import PropTypes from 'prop-types';
import './Home.scss';

const Home = props => (
  <div className='Home'>
    <Directory />
  </div>
);

Home.propTypes = {};

export default Home;
