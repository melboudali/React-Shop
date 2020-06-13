import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match: { url } }) => (
  <div className={`${size} MenuItem`} onClick={() => history.push(`${url}${linkUrl}`)}>
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  url: PropTypes.string
};

export default withRouter(MenuItem);
