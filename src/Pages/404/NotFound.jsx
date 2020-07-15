import React from 'react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className='NotFound'>
      <h1 className='ErrorNumber'>404</h1>
      <h1 className='ErrorMessage'>page not found</h1>
    </div>
  );
};

export default NotFound;
