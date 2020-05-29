import React from 'react';
import Directory from '../../Components/Directory/Directory';
import PropTypes from 'prop-types';

const Home = props => {
  console.log(props.match.params);
  console.log(props);
  return (
    <div className='Home'>
      <Directory />
    </div>
  );
};

Home.propTypes = {};

export default Home;
