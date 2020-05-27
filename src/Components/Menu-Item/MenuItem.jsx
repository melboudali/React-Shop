import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ title, imageUrl, subtitle }) => (
  <div className='menu-item' style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>{subtitle}</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default MenuItem;
