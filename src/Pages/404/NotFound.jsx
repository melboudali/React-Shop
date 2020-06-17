import React from 'react';
import './NotFound.scss';
import PropTypes from 'prop-types';

const NotFound = props => {
  return (
    <div className='NotFound'>
      <h1 className='ErrorNumber'>404</h1>
      <h1 className='ErrorMessage'>page not found</h1>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
